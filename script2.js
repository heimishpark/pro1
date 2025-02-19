document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("userInput");
    const floatingTexts = document.getElementById("floatingTexts");

    // 🎵 배경 음악 추가
    const bgMusic = document.createElement("audio");
    bgMusic.src = "시퀀스 02.mp3"; 
    bgMusic.loop = true; // 무한 반복 설정
    bgMusic.id = "bgMusic";
    document.body.appendChild(bgMusic); // 오디오 추가

    // ✅ 이전 페이지에서 음악이 재생 중이었다면 다시 재생
    if (sessionStorage.getItem("musicPlaying") === "true") {
        bgMusic.play();
    }

    // 사용자가 입력하면 텍스트 추가
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && userInput.value.trim() !== "") {
            createFloatingText(userInput.value);
            userInput.value = ""; // 입력창 초기화
        }
    });

    function createFloatingText(text) {
        if (!floatingTexts) return; // floatingTexts가 없으면 실행 안 함 (오류 방지)

        const span = document.createElement("span");
        span.classList.add("floating-text");
        span.textContent = text;

        // 🌟 랜덤 위치 설정 (화면 안에서 떠다니도록)
        const randomX = Math.random() * 90 + 5;  // 5% ~ 95% 범위
        const randomY = Math.random() * 70 + 10; // 10% ~ 80% 범위

        span.style.left = `${randomX}%`;
        span.style.top = `${randomY}%`;

        floatingTexts.appendChild(span);

        // 일정 시간 후 삭제
        setTimeout(() => {
            span.remove();
        }, 12000);
    }
});
