// 오늘 날짜
const today = new Date();
const year = today.getFullYear(); // 년
const month = today.getMonth() + 1; // 월
const date = today.getDate(); // 일
const dayNumber = today.getDay(); // 0~6 사이의 숫자

// 요일 변환 배열
const dayList = ['일', '월', '화', '수', '목', '금', '토'];
const dayKorean = dayList[dayNumber];

const timeText = `${year}년 ${month}월 ${date}일 (${dayKorean})`;

document.getElementById('display-date').innerText = timeText;

// 현재 시각
setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
}, 1000);
