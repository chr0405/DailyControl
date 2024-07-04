document.addEventListener("DOMContentLoaded", function() {
    // 초기 로컬 스토리지에서 데이터 가져오기
    let storedData = JSON.parse(localStorage.getItem('selectedDates')) || [];

    // Counter Log 초기화 함수 호출
    updateCounterLog(storedData);

    // DayCounter_btn 클래스를 가진 요소들에 대한 클릭 이벤트 처리
    const dayCounterBtns = document.querySelectorAll('.DayCounter_btn');
    dayCounterBtns.forEach(button => {
        button.addEventListener('click', () => {
            // 로컬 스토리지에서 데이터 다시 가져오기
            storedData = JSON.parse(localStorage.getItem('selectedDates')) || [];
            // Counter Log 업데이트 함수 호출
            updateCounterLog(storedData);
        });
    });

    // Counter Log 업데이트 함수
    function updateCounterLog(data) {
        const counterLogDivs = document.querySelectorAll('.individual_CounterLog');
        
        // 모든 Counter Log 초기화
        counterLogDivs.forEach((log, index) => {
            const selectDay = log.querySelector('.CounterLog_selectDay');
            const resultNameDay = log.querySelector('.result_name');
            const resultValueDay = log.querySelector('.result_value');
            const resultNameDday = log.querySelectorAll('.result_name')[1];  // 두 번째 결과 이름 요소
            const resultValueDday = log.querySelectorAll('.result_value')[1];  // 두 번째 결과 값 요소

            if (index < data.length) {
                const entry = data[index];
                selectDay.textContent = entry[0];
                if (entry[1] === 'Today'){
                    resultNameDay.textContent = '';
                    resultNameDday.textContent = '';
                } else {
                    resultNameDay.textContent = '날짜 수';
                    resultNameDday.textContent = '디데이';
                }
                resultValueDay.textContent = entry[1];
                resultValueDday.textContent = entry[2];
            } else {
                // 데이터가 없는 경우 초기화
                selectDay.textContent = '';
                resultNameDay.textContent = '';
                resultValueDay.textContent = '';
                resultNameDday.textContent = '';
                resultValueDday.textContent = '';
            }
        });
    }
});