document.addEventListener("DOMContentLoaded", () => {
    const signs = document.querySelectorAll(".sign1, .sign2, .sign3, .sign4, .sign5, .sign6, .sign7, .sign8 ,.sign9, .sign10");
    const neonSection = document.querySelector(".neon-section");
    const goldenAgeSection = document.querySelector(".golden-age-section");
    const goldenAgeContent = document.querySelector(".golden-age-content");
    const bgMusic = document.getElementById("bgMusic");
    const startButton = document.getElementById(".next-page-button");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("neon-section")) {
                    signs.forEach((sign, index) => {
                        setTimeout(() => {
                            sign.classList.add("show");
                            sign.classList.remove("hide");
                        }, index * 700);
                    });
                }

                if (entry.target.classList.contains("golden-age-section")) {
                    console.log("Golden Age Section detected!");
                    goldenAgeSection.classList.add("show");
                    goldenAgeContent.classList.add("fade-in");
                    goldenAgeContent.classList.remove("fade-out");
                }
            } else {
                if (entry.target.classList.contains("neon-section")) {
                    signs.forEach(sign => {
                        sign.classList.add("hide");
                        sign.classList.remove("show");
                    });
                }

                if (entry.target.classList.contains("golden-age-section")) {
                    console.log("Golden Age Section hidden!");
                    goldenAgeSection.classList.remove("show");
                    goldenAgeContent.classList.remove("fade-in");
                    goldenAgeContent.classList.add("fade-out");
                }
            }
        });
    }, { threshold: 0.3 });

    observer.observe(neonSection);
    observer.observe(goldenAgeSection);

    const transitionText = document.getElementById("transitionText");
    

    // 🌟 일본어 ↔ 영어 자동 전환 (7초마다 변경)
    const textPairs = [
        "東京の夜はすべてを忘れさせる。",
        "ネオンサインとともにどこかへ行きたくなる。",
        "Tokyo’s nights make you forget everything.",
        "You just want to drift away with the neon glow."
    ];

    let textIndex = 0;
    setInterval(() => {
        transitionText.classList.add("hide");

        setTimeout(() => {
            textIndex = (textIndex + 1) % textPairs.length;
            transitionText.innerHTML = textPairs[textIndex];

            transitionText.classList.remove("hide");
            transitionText.classList.add("show");

        }, 2000); // 2초 후 텍스트 변경
    }, 5000); 
    bgMusic.play(); // 음악 재생

    if (sessionStorage.getItem("musicPlaying") === "true") {
        bgMusic.play();
    }

    // 🎵 음악이 재생 중일 때, 다음 페이지로 이동할 때 재생 상태 저장
    nextButton.addEventListener("click", (event) => {
        event.preventDefault(); // 기본 링크 이동 방지
        sessionStorage.setItem("musicPlaying", "true");
        window.location.href = "next.html";
    });

});