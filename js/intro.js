document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");
  const continueBtn = document.getElementById("continue-btn");

  const tryPlay = () => {
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };
  tryPlay();

  const handleClick = (event) => {
    if (audio.paused) {
      audio.play().catch(() => {});
    }

    goToNext();
  };

  document.body.addEventListener("click", handleClick);

  continueBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    handleClick();
  });
});

function goToNext() {
  const nextEl = document.getElementById("next");
  if (nextEl) {
    nextEl.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.hash = "#next";
  }
}
