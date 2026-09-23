const video = document.getElementById("honeyVideo");
if (video) {
  video.defaultPlaybackRate = 0.5;
  video.playbackRate = 0.5;
}

const modal = document.getElementById("orderModal");

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => modal.showModal());
});

modal.querySelector(".modal-close").addEventListener("click", () => modal.close());

// закрытие по клику на затемнённый фон
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});