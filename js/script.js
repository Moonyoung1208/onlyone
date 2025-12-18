// AOS 초기화
AOS.init({
    once: true,
    easing: 'ease-out-cubic',
    duration: 900
});

// 스크롤 시 네비게이션 그림자
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 폼 제출 UX (실제 전송은 백엔드 연동 시)
const form = document.querySelector('.reservation-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    alert(
        "상담 신청이 접수되었습니다.\n\n온리원 심리상담센터가\n따뜻한 마음으로 곧 연락드리겠습니다 🌿"
    );

    form.reset();
});

// 터치 아코디언 이벤트
document.addEventListener('DOMContentLoaded', function () {
    const identityItems = document.querySelectorAll('.identity-item');

    identityItems.forEach(item => {
        const header = item.querySelector('.item-header');

        header.addEventListener('click', () => {
            // 하나를 열면 나머지를 닫고 싶을 때 사용 (선택 사항)
            identityItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // 현재 클릭한 아이템 토글
            item.classList.toggle('active');
        });
    });
});