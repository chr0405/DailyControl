let TimerStop;
const kyou = new Date();

const output_comment = document.getElementById("output_comment");
const output_today = document.getElementById("output_today");
const output_time = document.getElementById("output_time");
const output_day = document.getElementById("output_day");
const output_Dday = document.getElementById("output_Dday");
const output_week = document.getElementById("output_week");
const output_month = document.getElementById("output_month");
const output_month_day = document.getElementById("output_month_day");
const output_time_ment = document.getElementById("output_time_ment");

function remove(){
    clearTimeout(TimerStop);
    output_comment.innerHTML = ""
    output_today.innerHTML = ""
    output_time.innerHTML = ""
    output_day.innerHTML = ""
    output_Dday.innerHTML = ""
    output_week.innerHTML = ""
    output_month.innerHTML = ""
    output_month_day.innerHTML = ""
    output_time_ment.innerHTML = ""
    output_month_day.style.left="100px";
    // output_month_day.style.bottom="38px";
}

function remove_css(){
    output_month_day.style.left="0px";
    // output_month_day.style.bottom="0px";
}

const StartThisYear = document.getElementById("StartThisYear"); //올해가 시작한지
const StartThisYearValue = "2023-01-01";
StartThisYear.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "2023년은 검은 토끼의 해입니다 ₍ᐢ.ˬ.ᐢ₎❤️ <br> 어떤 한 해를 보내고 계신가요? <br> 남은 2023년도 파이팅입니다😊 "
    sugositahi_kaisan(StartThisYearValue);
});

const LeftThisYear = document.getElementById("LeftThisYear"); //올해가 언제 끝나는지
const LeftThisYearValue = "2024-01-01";
LeftThisYear.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "2024년은 청룡의 해입니다 <br> 멋진 한 해가 올 예감이에요 ٩(●'▿'●)۶ <br> 내년을 준비해봐요 "
    kuruhi_kaisan(LeftThisYearValue);
});

const CSAT = document.getElementById("CSAT"); // 수능
const CSATValue = "2024-11-16"
CSAT.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "수능을 준비하고 계신가요? <br> 도전하는 모습이 멋있습니다!! <br> 파이팅~~💗"
    if(kyou.getTime() > CSATValue){
        sugositahi_kaisan(CSATValue);
    }
    else{
        kuruhi_kaisan(CSATValue);
    }
});

const Valentine = document.getElementById("Valentine");
const ValentineValue = "2024-02-14";
Valentine.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "초콜릿을 만드실 계획인가요?🍫 <br> 어떤 초콜릿을 만드실 건가요? <br> 맛있을 것 같아요!!"
    if(kyou.getTime() > ValentineValue){
        sugositahi_kaisan(ValentineValue);
    }
    else{
        kuruhi_kaisan(ValentineValue);
    }
});

const White_Day = document.getElementById("White_Day");
const White_DayValue = "2024-03-14";
White_Day.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "사탕을 선물할 계획인가요? <br> 받으시는 분이 기뻐할 게 분명합니다!! <br> 해피 화이트데이🍭 "
    if(kyou.getTime() > White_DayValue){
        sugositahi_kaisan(White_DayValue);
    }
    else{
        kuruhi_kaisan(White_DayValue);
    }
});

const Christmas = document.getElementById("Christmas");
const ChristmasValue = "2023-12-25";
Christmas.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "뷔슈 드 노엘을 아시나요?🍰 <br> 프랑스의 크리스마스 케이크입니다 <br> 화이트 크리스마스였으면 좋겠어요 ・:*( ܸ ・⩊・ ܸ )*:・"
    
    if(kyou.getTime() > ChristmasValue){
        sugositahi_kaisan(ChristmasValue);
    }
    else{
        kuruhi_kaisan(ChristmasValue);
    }
});

const Orangestar_birthday = document.getElementById("Orangestar_birthday");
const Orangestar_birthdayValue = "2024-08-20";
Orangestar_birthday.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "Orangestar는 제가 좋아하는 작곡가입니다 <br> DAYBREAK FRONTLINE이라는 곡이 유명합니다 <br> 어떤 노래를 제일 좋아하시나요? "
    
    if(kyou.getTime() > Orangestar_birthdayValue){
        sugositahi_kaisan(Orangestar_birthdayValue);
    }
    else{
        kuruhi_kaisan(Orangestar_birthdayValue);
    }
});

const Henceforth = document.getElementById("Henceforth");
const HenceforthValue = "2023-08-30";
Henceforth.addEventListener("click", function(){
    remove();
    output_comment.innerHTML = "8/30 Orangestar의 앨범이 나옵니다 <br> 6년만의 메이저 앨범입니다"
        
    if(kyou.getTime() > HenceforthValue){
        sugositahi_kaisan(HenceforthValue);
    }
    else{
        kuruhi_kaisan(HenceforthValue);
    }
});

const SelectDay = document.getElementById("SelectDay"); //달력에서 날짜를 선택했을 경우
const SelectDayInput = document.getElementById("SelectDayInput");

SelectDayInput.addEventListener("click", function(){
    remove();
    const erandahi = new Date(SelectDay.value);

    if(kyou.getTime() > erandahi.getTime()){
        output_comment.innerHTML = "어떤 날을 기억하고 계신가요? <br> 언젠가의 하루를 기억하는 일은 <br> 생각보다 더 큰 의미가 있습니다 "
        sugositahi_kaisan(SelectDay.value);
    }
    else{
        output_comment.innerHTML = "어떤 날을 기다리고 계신가요? <br> 다가올 미래를 준비하고 있는 당신!! <br> 좋은 하루가 되길 빌어요 "
        kuruhi_kaisan(SelectDay.value);
    }
});

const array31 = [0, 2, 4, 6, 7, 9, 11];
const array30 = [3, 5, 8, 10];

function sugositahi_kaisan(value){
    const izen = new Date(value); // 지나간 날
    const genzai = new Date(); // 현재

    const offset = 1000 * 60 * 60 * 9;
    const result = genzai.getTime() - izen.getTime() + offset;

    // 시간 계산
    const after_day = new Date(genzai - izen);
    const hours = ('0' + after_day.getHours()).slice(-2);
    const minutes = ('0' + after_day.getMinutes()).slice(-2);
    const seconds = ('0' + after_day.getSeconds()).slice(-2);
    const time = `${hours}:${minutes}:${seconds}` 

    const result_day = parseInt(result /(1000 * 60 * 60 * 24));
    const result_week = parseInt(result /(1000 * 60 * 60 * 24 * 7)); // 몇 주가 지났는지
    
    // 몇 시간 지났는지 띄움
    output_time.innerHTML = time
    output_time_ment.innerHTML = "지금도 시간은 쌓이고 있어요"

    // 며칠 지났는지 띄움
    output_Dday.innerHTML = result_day + "일 지났습니다 "
    output_day.innerHTML = (result_day + 1) + "일 지났습니다 "

    // 주 계산
    const result_week_rest_day = result_day % 7 + 1; //몇 주 하고 며칠 지났는지
    
    if((result_day + 1) > 7 && ((result_day + 1) % 7 != 0)){ // 7일 이상 지났다면
            if(result_week == 0){
                output_week.innerHTML = (result_week + 1) + "주 " + result_week_rest_day + "일 지났습니다 ";
            }
            else{
                output_week.innerHTML = result_week + "주 " + result_week_rest_day + "일 지났습니다 ";
            }
    }
    else if((result_day + 1) % 7 == 0){ // 딱 한 주 단위로 지났을 때
        output_week.innerHTML = (result_week + 1)  + "주 지났습니다 ";
    }
    else{
        output_week.innerHTML = (result_day + 1) + "일 지났습니다 "
    }

    const result_year = genzai.getFullYear() - izen.getFullYear(); // 몇 년이 지났는지
    const result_year_month = genzai.getMonth() - izen.getMonth();// 몇 년 하고 몇 달이 지났는지
    const result_year_date = genzai.getDate() -  izen.getDate(); // 몇 달 지났는지 계산하기 위한 날짜

    // 년, 개월, 일 계산
    if(result_year > 0){ // 1년 이상 지났는지
        if(result_year_month < 0){ // 년수는 현재가 더 미래지만 1년을 채우지 못한 경우 (달이 과거가 더 큼) result_year_month가 음수
            if(result_year_date < 0){ // 날짜가 과거가 더 큰 경우 (한 달을 채우지 못함)
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 11) + "개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 11) + "개월 "
                }
            }
            else if(result_year_date == 0){ // 날짜가 현재와 같음
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 12) + "개월 지났습니다 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 12) + "개월 지났습니다 "
                }
            }
            else{ // 날짜가 현재가 더 큼
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 12) + "개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 12) + "개월 "
                }
            }
        }
        else if(result_year_month == 0){ // 년수가 더 미래이고 달이 현재와 같은 경우 result_year_month가 0
            if(result_year_date < 0){ // 1년을 채우지 못한 경우 (날이 과거가 더 큼)
                if(result_year - 1 == 0){
                    output_month.innerHTML = "11개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + "11개월 "
                }
            }
            else if(result_year_date == 0){ // 딱 1년을 채운 경우
                output_month.innerHTML = result_year + "년 지났습니다 "
            }
            else{ // 1년을 채우고 넘은 경우 (날이 현재가 더 큼)
                output_month.innerHTML = result_year + "년 "
            }
        }
        else{ //년수도 현재가 미래이고 달도 현재가 미래인 경우
            if(result_year_date < 0){ // 1달을 채우지 못한 경우
                if((result_year_month - 1) == 0){
                    output_month.innerHTML = result_year + "년 "
                }
                else{
                    output_month.innerHTML = result_year + "년 " + (result_year_month - 1) + "개월 "
                }
            }
            else if(result_year_date == 0){ // 딱 1달을 채운 경우
                output_month.innerHTML = result_year + "년 " + result_year_month + "개월 지났습니다 "
            }
            else{
                output_month.innerHTML = result_year + "년 " + result_year_month + "개월 "
            }
        }
    }
    else if(result_year_month > 0){ // 1년 이상 지나지 않았고, 달이 차이가 난다면
        if(result_year_date < 0){ // 과거의 날짜가 더 큰 경우
            if(result_year_month - 1 == 0){
                remove_css();
                output_month.innerHTML = ""
            }
            else{
                output_month.innerHTML = result_year_month - 1 + "개월 "
            }
        }
        else if(result_year_date == 0){ // 과거의 날짜와 현재의 날짜가 같은 경우
            output_month.innerHTML = result_year_month + "개월 지났습니다 "
        }
        else{ //과거의 날짜가 더 작은 경우
            output_month.innerHTML= result_year_month + "개월 "
        }
    }

    if (result_year_date > 0){ // 현재의 날짜가 더 큰 경우
        if(izen.getMonth() == genzai.getMonth()){
            remove_css();
            output_month_day.innerHTML = (result_year_date + 1) + "일 지났습니다 "
        }
        else{
            output_month_day.innerHTML = (result_year_date) + "일 지났습니다 "
        }
        
    }
    else if(result_year_date < 0){ // 과거의 날짜가 더 큰 경우 //////////////
        if(array30.includes(izen.getMonth())){ // 과거 달이 30일로 끝남
            output_month_day.innerHTML = (30 - izen.getDate() + genzai.getDate() + 1) + "일 지났습니다 "
        }
        else if(array31.includes(izen.getMonth())){ // 과거 달이 31일로 끝남
            output_month_day.innerHTML = (31 - izen.getDate() + genzai.getDate() + 1) + "일 지났습니다 "
        }
        else{ // 과거 달이 2월일 경우
            if((izen.getFullYear() % 4 == 0 && izen.getFullYear() % 100 != 0) || izen.getFullYear() % 400 == 0){ // 윤년
                output_month_day.innerHTML = (29 - izen.getDate() + genzai.getDate() + 1) + "일 지났습니다 "
            }
            else{ // 윤년 아님
                output_month_day.innerHTML = (28 - izen.getDate() + genzai.getDate() + 1) + "일 지났습니다 "
            }
        }
    }
    else{ // 과거의 날짜와 현재의 날짜가 같은 경우
        if(result_year_month == 0){
            remove_css();
            output_month_day.innerHTML = "1일 지났습니다."
        }
        else{
            output_month_day.innerHTML = ""
        }
    }

    TimerStop = setTimeout(sugositahi_kaisan, 1000, value);
}

//////////////////////////////

function kuruhi_kaisan(value){
    const ato = new Date(value); // 올 날
    const genzai = new Date(); // 현재


    const offset = 1000 * 60 * 60 * 9;
    const result = (ato.getTime() - genzai.getTime() + offset);

    // 시간 계산

    let hours_value;
    let minutes_value;
    let seconds_value;

    if(genzai.getHours() == 0){
        hours_value = genzai.getHours()
    }
    else{
        hours_value = 24 - genzai.getHours();
    }

    if(genzai.getMinutes() == 0){
        minutes_value = genzai.getMinutes()
    }
    else{
        minutes_value = 60 - genzai.getMinutes();
    }

    if(genzai.getSeconds() == 0){
        seconds_value = genzai.getSeconds()
    }
    else{
        seconds_value = 60 - genzai.getSeconds();
    }


    const hours = ('0' + hours_value).slice(-2);
    const minutes = ('0' + minutes_value).slice(-2);
    const seconds = ('0' + seconds_value).slice(-2);
    const time = `${hours}:${minutes}:${seconds}` 

    
    const result_day = parseInt(result /(1000 * 60 * 60 * 24) + 1);
    const result_week = parseInt(result /(1000 * 60 * 60 * 24 * 7)); // 몇 주가 남았는지
    
    // 몇 시간 남았는지 띄움
    output_time.innerHTML = time;
    output_time_ment.innerHTML = "지금도 시간은 흐르고 있어요";

    // 며칠 남았는지 띄움
    output_Dday.innerHTML = result_day + "일 남았습니다 "
    output_day.innerHTML = (result_day) + "일 남았습니다 "
    
    // 주 계산
    const result_week_rest_day = result_day % 7; //몇 주 하고 며칠 지났는지
    
    if((result_day) > 7 && ((result_day) % 7 != 0)){ // 7일 이상 지났다면
            output_week.innerHTML = result_week + "주 " + result_week_rest_day + "일 남았습니다 ";
    }
    else if((result_day) % 7 == 0){ // 딱 한 주 단위로 지났을 때
        output_week.innerHTML = (result_week)  + "주 남았습니다 ";
    }
    else{
        output_week.innerHTML = result_day + "일 남았습니다 "
    }
    
    const result_year = ato.getFullYear() - genzai.getFullYear(); // 몇 년이 남았는지
    const result_year_month = ato.getMonth() - genzai.getMonth();// 몇 년 하고 몇 달이 남았는지
    const result_year_date = ato.getDate() -  genzai.getDate(); // 몇 달 남았는지 계산하기 위한 날짜

    // 년, 개월, 일 계산
    if(result_year > 0){ // 1년 이상 남았는지
        if(result_year_month < 0){ // 년수는 더 미래지만 1년을 채우지 못한 경우 (달이 현재가 더 큼) result_year_month가 음수
            if(result_year_date < 0){ // 날짜가 현재가 더 큰 경우 (한 달을 채우지 못함)
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 11) + "개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 11) + "개월 "
                }
            }
            else if(result_year_date == 0){ // 날짜가 현재와 같음.
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 12) + "개월 남았습니다 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 12) + "개월 남았습니다 "
                }
            }
            else{ // 날짜가 현재가 더 작음.
                if(result_year - 1 == 0){
                    output_month.innerHTML = (result_year_month + 12) + "개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + (result_year_month + 12) + "개월 "
                }
            }
        }
        else if(result_year_month == 0){ // 년수는 더 미래이고 달이 현재와 같은 경우 result_year_month가 0
            if(result_year_date < 0){ // 1년을 채우지 못한 경우 (날이 현재가 더 큼)
                if(result_year - 1 == 0){
                    output_month.innerHTML = "11개월 "
                }
                else{
                    output_month.innerHTML = result_year - 1 + "년 " + "11개월 "
                }
            }
            else if(result_year_date == 0){ // 딱 1년을 채운 경우 (현재와 미래의 날이 같음)
                output_month.innerHTML = result_year + "년 남았습니다 "
            }
            else{ // 1년을 채우고 넘은 경우 (날이 미래가 더 큼)
                output_month.innerHTML = result_year + "년 "
            }
        }
        else{ //년수도 미래이고 달도 미래인 경우
            if(result_year_date < 0){ // 1달을 채우지 못한 경우 
                if(result_year_month - 1 == 0){
                    output_month.innerHTML = result_year + "년 "
                }
                else{
                    output_month.innerHTML = result_year + "년 " + (result_year_month - 1) + "개월 "
                }
            }
            else if(result_year_date == 0){ // 딱 1달을 채운 경우
                output_month.innerHTML = result_year + "년 " + result_year_month + "개월 남았습니다 "
            }
            else{
                output_month.innerHTML = result_year + "년 " + result_year_month + "개월 "
            }
        }
    }
    else if(result_year_month > 0){ // 1년 이상 남지 않았고, 달이 차이가 난다면
        if(result_year_date < 0){ // 현재의 날짜가 더 큰 경우
            if(result_year_month - 1 == 0){
                remove_css();
                output_month.innerHTML = ""
            }
            else{
                output_month.innerHTML = result_year_month - 1 + "개월 "
            }
        }
        else if(result_year_date == 0){ // 현재의 날짜와 같은 경우
            output_month.innerHTML = result_year_month + "개월 남았습니다 "
        }
        else{ // 현재의 날짜가 더 작은 경우
            output_month.innerHTML = result_year_month + "개월 "
        }

    }

    if (result_year_date > 0){ // 미래의 날짜가 더 큰 경우
        if(genzai.getMonth() == ato.getMonth()){
            // output_month_day.style.position="0px";
            // output_month_day.style.left="0px";
            // output_month_day.style.bottom="0px";
            remove_css();
            output_month_day.innerHTML = (result_year_date) + "일 남았습니다 "
        }
        else{
            output_month_day.innerHTML = (result_year_date) + "일 남았습니다 "
        }
        
    }
    else if(result_year_date < 0){ // 과거의 날짜가 더 큰 경우
        if(array30.includes(genzai.getMonth())){ // 이번 달이 30일로 끝남
            if(result_year_month == 1){
                output_month_day.innerHTML = (30 - genzai.getDate() + ato.getDate()) + "일 남았습니다 "
            }
            else{
                output_month_day.innerHTML = (30 - genzai.getDate() + ato.getDate() + 1) + "일 남았습니다 "
            }
            
        }
        else if(array31.includes(genzai.getMonth())){ // 이번 달이 31일로 끝남
            if(result_year_month == 1){
                output_month_day.innerHTML = (31 - genzai.getDate() + ato.getDate()) + "일 남았습니다 "
        
            }
            else{
                output_month_day.innerHTML = (31 - genzai.getDate() + ato.getDate() + 1) + "일 남았습니다 "
        
            }
            }
        else{ // 이번 달이 2월일 경우
            if(result_year_month == 1){
                if((genzai.getFullYear() % 4 == 0 && genzai.getFullYear() % 100 != 0) || genzai.getFullYear() % 400 == 0){ // 윤년
                    output_month_day.innerHTML = (29 - genzai.getDate() + ato.getDate()) + "일 남았습니다 "
                }
                else{ // 윤년 아님
                    output_month_day.innerHTML = (28 - genzai.getDate() + ato.getDate()) + "일 남았습니다 "
                }

            }
            else{
                if((genzai.getFullYear() % 4 == 0 && genzai.getFullYear() % 100 != 0) || genzai.getFullYear() % 400 == 0){ // 윤년
                    output_month_day.innerHTML = (29 - genzai.getDate() + ato.getDate() + 1) + "일 남았습니다 "
                }
                else{ // 윤년 아님
                    output_month_day.innerHTML = (28 - genzai.getDate() + ato.getDate() + 1) + "일 남았습니다 "
                }
                
            }
        }
    }
    else{ // 미래의 날짜와 현재의 날짜가 같은 경우
        output_month_day.innerHTML = "0일 남았습니다."
    }

    TimerStop = setTimeout(kuruhi_kaisan, 1000, value);
}