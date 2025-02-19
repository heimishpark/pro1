document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const bgMusic = document.getElementById("bgMusic");
    const scriptSection = document.getElementById("scriptSection"); // 🎬 영화 스크립트 섹션 가져오기
    const goldenAgeButton = document.getElementById("goldenAgeButton"); // 🎵 "My Golden Age" 버튼 가져오기
    const neonSection = document.getElementById("neonSection"); // 💡 네온사인 섹션 가져오기

    let isPlaying = false;

    // 🎵 "Let's Start" 버튼 클릭 시 실행
    startButton.addEventListener("click", () => {
        if (!isPlaying) {
            bgMusic.play();
            startButton.style.display = "none"; // 버튼 숨기기
            scriptSection.classList.add("show"); // 영화 스크립트 섹션 등장

            // ⏳ 35초 후 영화 스크립트가 페이드아웃되고 "My Golden Age" 버튼 등장
            setTimeout(() => {
                scriptSection.style.opacity = "0"; // 영화 스크립트 페이드아웃
                setTimeout(() => {
                    scriptSection.style.display = "none"; // 완전히 숨김
                    goldenAgeButton.classList.remove("hidden"); // "My Golden Age" 버튼 표시
                }, 1000); // 페이드아웃 지속 시간 2초
            }, 33000);
        }
        isPlaying = true;
    });

    // 🎬 "My Golden Age" 버튼 클릭 시 네온사인 페이지로 이동
    goldenAgeButton.addEventListener("click", () => {
        window.location.href = "neon-page.html"; // 네온사인 페이지로 이동
    });
});
