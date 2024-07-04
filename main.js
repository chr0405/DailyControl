document.addEventListener("DOMContentLoaded", function() {
    const SelectDay = document.getElementById("SelectDay");
    const SelectDayInput = document.getElementById("SelectDayInput");

    // 결과를 표시하는 요소들
    const output_day = document.getElementById("output_day");
    const output_Dday = document.getElementById("output_Dday");

    // 한국 시간으로 현재 시간 가져오기
    const currentKoreaTime = getKoreaTime();

    // 선택 버튼 클릭 시 이벤트 처리
    SelectDayInput.addEventListener("click", function() {
        remove(); // 기존 결과 초기화

        const selectedDate = new Date(SelectDay.value);

        if (isSameDay(currentKoreaTime, selectedDate)) {
            output_Dday.innerHTML = "Today";
            output_day.innerHTML = "Today";
        } else if (currentKoreaTime.getTime() > selectedDate.getTime()) {
            calculatePastTime(selectedDate);
        } else {
            calculateFutureTime(selectedDate);
        }
    });

    // 한국 시간으로 현재 시간 가져오기
    function getKoreaTime() {
        const currentDate = new Date();
        const timeZoneOffset = currentDate.getTimezoneOffset() * 60 * 1000; // 현재 로컬 타임존 오프셋 (밀리초)
        return new Date(currentDate.getTime() + timeZoneOffset + (9 * 60 * 60 * 1000)); // 한국 시간으로 변환
    }

    // 과거 시간 계산 함수
    function calculatePastTime(selectedDate) {
        const timeDifference = selectedDate.getTime() - currentKoreaTime.getTime();
        displayTimeDifference(timeDifference);
        TimerStop = setTimeout(function() {
            calculatePastTime(selectedDate);
        }, 1000);
    }

    // 미래 시간 계산 함수
    function calculateFutureTime(selectedDate) {
        const timeDifference = selectedDate.getTime() - currentKoreaTime.getTime();
        displayTimeDifference(timeDifference);
        TimerStop = setTimeout(function() {
            calculateFutureTime(selectedDate);
        }, 1000);
    }

    // 시간 차이를 출력하는 함수
    function displayTimeDifference(timeDifference) {
        const seconds = Math.abs(Math.floor(timeDifference / 1000));
        const minutes = Math.abs(Math.floor(seconds / 60));
        const hours = Math.abs(Math.floor(minutes / 60));
        const days = Math.abs(Math.floor(hours / 24));

        if (timeDifference < 0) {
            output_Dday.innerHTML = days;
            output_day.innerHTML = days + 1;
        } else if (timeDifference > 0) {
            output_Dday.innerHTML = days + 1;
            output_day.innerHTML = days + 1;
        } else {
            output_Dday.innerHTML = "Today";
            output_day.innerHTML = "Today";
        }
    }

    // 날짜가 같은지 비교하는 함수
    function isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    // 이전 결과 초기화 함수
    function remove() {
        clearTimeout(TimerStop);
        output_day.innerHTML = "";
        output_Dday.innerHTML = "";
    }

    // 타이머 제어 변수
    let TimerStop;
});