document.addEventListener("DOMContentLoaded", function() {
    const SelectDay = document.getElementById("SelectDay");
    const SelectDayInput = document.getElementById("SelectDayInput");

    const day_day = document.getElementById("day_day");
    const Dday_day = document.getElementById("Dday_day");

    const DayCounter_text = document.getElementById("DayCounter_text");
    const DayCounter_text2 = document.getElementById("DayCounter_text2");

    // 결과를 표시하는 요소들
    const output_day = document.getElementById("output_day");
    const output_Dday = document.getElementById("output_Dday");

    // 타이머 제어 변수
    // let TimerStop;

    // 특정 기념일 버튼을 눌렀을 때
    const DayCounter_btn = document.querySelectorAll('.DayCounter_btn');
    let selectedButton = null; // 선택된 버튼을 저장할 변수

    DayCounter_btn.forEach(button => {
        button.addEventListener('click', () => {
            // 만약 같은 버튼을 다시 클릭하면 초기화
            if (selectedButton === button) {
                selectedButton.classList.remove('DayCounter_btn2');
                selectedButton = null;
                clear(); // 내용 초기화 함수 호출
                return; // 함수 종료
            }

            // 선택된 버튼의 스타일을 관리하여 변경
            if (selectedButton) {
                selectedButton.classList.remove('DayCounter_btn2');
                // clearTimeout(TimerStop);
            }
            button.classList.add('DayCounter_btn2');
            selectedButton = button; // 현재 선택된 버튼으로 설정

            let targetDate;
            switch (button.id) {
                case 'start_year':
                    targetDate = new Date(new Date().getFullYear(), 0, 1); // 올해의 1월 1일
                    calculatePastTime(targetDate);
                    break;
                case 'end_year':
                    targetDate = new Date(new Date().getFullYear(), 11, 31); // 올해의 12월 31일
                    calculateFutureTime(targetDate);
                    break;
                case 'Valentine':
                    targetDate = getNextOccurrenceDate(2, 14); // 다음 발렌타인데이
                    calculateFutureTime(targetDate);
                    break;
                case 'White':
                    targetDate = getNextOccurrenceDate(3, 14); // 다음 화이트데이
                    calculateFutureTime(targetDate);
                    break;
                case 'Pepero':
                    targetDate = getNextOccurrenceDate(11, 11); // 다음 빼빼로데이
                    calculateFutureTime(targetDate);
                    break;
                case 'Christmas':
                    targetDate = getNextOccurrenceDate(12, 25); // 다음 크리스마스
                    calculateFutureTime(targetDate);
                    break;
                default:
                    break;
            }
        });
    });

    // 선택 버튼 클릭 시 이벤트 처리
    SelectDayInput.addEventListener("click", function() {
        // clearTimeout(TimerStop); // 기존 타이머 정지
        clear(); // 기존 결과 초기화

        // 특정 기념일 버튼 누름 초기화
        DayCounter_btn.forEach(btn => {
            btn.classList.remove('DayCounter_btn2');
        });

        if (SelectDay.value === "") {
            output_day.innerHTML = "Today";
            output_Dday.innerHTML = "Today";

            let currentDate = new Date();
            let formattedDate = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);
            console.log(formattedDate);
            saveLocalStorage(formattedDate, "Today", "Today");

            return; // 날짜가 선택되지 않은 경우 처리 중단
        }

        const selectedDate = new Date(SelectDay.value);
        const currentKoreaTime = getKoreaTime();

        if (isSameDay(currentKoreaTime, selectedDate)) {
            output_Dday.innerHTML = "Today";
            output_day.innerHTML = "Today";

            let currentDate = new Date();
            let formattedDate = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);
            console.log(formattedDate);
            saveLocalStorage(formattedDate, "Today", "Today");

        } else if (currentKoreaTime.getTime() > selectedDate.getTime()) {
            calculatePastTime(selectedDate);
        } else {
            calculateFutureTime(selectedDate);
        }
    });

    // 한국 시간으로 현재 시간 가져오기
    function getKoreaTime() {
        const currentDate = new Date();
        const utcOffset = 9 * 60; // 한국 표준시는 UTC+9
        const koreaTime = new Date(currentDate.getTime() + (utcOffset * 60 * 1000));
        return koreaTime;
    }

    // 과거 시간 계산 함수
    function calculatePastTime(selectedDate) {
        const currentKoreaTime = getKoreaTime();
        const timeDifference = currentKoreaTime.getTime() - selectedDate.getTime();
        displayTimeDifference(timeDifference, false, selectedDate);
        // TimerStop = setTimeout(function() {
        //     calculatePastTime(selectedDate);
        // }, 1000);
    }

    // 미래 시간 계산 함수
    function calculateFutureTime(selectedDate) {
        const currentKoreaTime = getKoreaTime();
        const timeDifference = selectedDate.getTime() - currentKoreaTime.getTime();
        displayTimeDifference(timeDifference, true, selectedDate);
        // TimerStop = setTimeout(function() {
        //     calculateFutureTime(selectedDate);
        // }, 1000);
    }

    // 시간 차이를 출력하는 함수
    function displayTimeDifference(timeDifference, isFuture, selectedDate) {
        const seconds = Math.abs(Math.floor(timeDifference / 1000));
        const minutes = Math.abs(Math.floor(seconds / 60));
        const hours = Math.abs(Math.floor(minutes / 60));
        const days = Math.abs(Math.floor(hours / 24));

        let formattedDate = selectedDate.getFullYear() + '-' + ('0' + (selectedDate.getMonth() + 1)).slice(-2) + '-' + ('0' + selectedDate.getDate()).slice(-2);
        console.log(formattedDate);

        if (isFuture) {
            output_day.innerHTML = `${days + 1}`;
            output_Dday.innerHTML = `${days + 1}`;

            day_day.innerHTML = "day";
            Dday_day.innerHTML = "day";

            DayCounter_text.innerHTML = "남았습니다";
            DayCounter_text2.innerHTML = "남았습니다";
            saveLocalStorage(formattedDate, `D - ${days + 1}`, `D - ${days + 1}`);

        } else {
            output_day.innerHTML = `${days + 1}`;
            output_Dday.innerHTML = `${days}`;

            day_day.innerHTML = "day";
            Dday_day.innerHTML = "day";

            DayCounter_text.innerHTML = "지났습니다";
            DayCounter_text2.innerHTML = "지났습니다";
            saveLocalStorage(formattedDate, `D + ${days + 1}`, `D + ${days}`);
        }
    }

    // 날짜가 같은지 비교하는 함수
    function isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    // 이전 결과 초기화 함수
    function clear() {
        // clearTimeout(TimerStop);

        output_day.innerHTML = "";
        output_Dday.innerHTML = "";

        day_day.innerHTML = "";
        Dday_day.innerHTML = "";

        DayCounter_text.innerHTML = "";
        DayCounter_text2.innerHTML = "";
    }

    // 다음 기념일 날짜 계산 함수
    function getNextOccurrenceDate(month, day) {
        const currentDate = new Date();
        let nextOccurrenceYear = currentDate.getFullYear();

        // 현재 날짜보다 이전인 경우 내년으로 계산
        if (currentDate.getMonth() > month - 1 || (currentDate.getMonth() === month - 1 && currentDate.getDate() > day)) {
            nextOccurrenceYear++;
        }

        return new Date(nextOccurrenceYear, month - 1, day);
    }

    // 전역 변수로 dataArray 정의
    let dataArray = JSON.parse(localStorage.getItem('selectedDates'));
    // let dataArray = JSON.parse(localStorage.getItem('selectedDates')) || [];

    // saveLocalStorage 함수 정의
    function saveLocalStorage(date, day, Dday) {
        const maxEntries = 3;

        let newEntry = [date, day, Dday];
        dataArray.unshift(newEntry);

        if (dataArray.length > maxEntries) {
            dataArray.pop(); // 배열의 맨 뒤 데이터 제거
        }
        localStorage.setItem('selectedDates', JSON.stringify(dataArray));
        console.log(JSON.parse(localStorage.getItem('selectedDates')));
    }

    // window.addEventListener('beforeunload', function() {
    //     localStorage.removeItem('selectedDates');
    //     // dataArray 변수 초기화
    //     dataArray = [];
    // });
}); 