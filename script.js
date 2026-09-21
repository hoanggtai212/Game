const modal = document.getElementById("levelModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const playBtn = document.getElementById("playBtn");

let selectedLevel = null;

document.querySelectorAll(".level").forEach((button) => {
  button.addEventListener("click", () => {
    selectedLevel = button.dataset.level;
    modalTitle.textContent = `Bài ${selectedLevel}`;
    modalText.textContent = `Bạn đã chọn Bài ${selectedLevel}. Đây là nơi bạn có thể nối sang màn chơi thật của game.`;
    modal.classList.remove("hidden");
  });
});

function hideModal() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) hideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});

playBtn.addEventListener("click", () => {
  // Sau này thay dòng này bằng:
  // window.location.href = `levels/level-${selectedLevel}.html`;
  alert(`Bắt đầu Bài ${selectedLevel}!`);
});

document.getElementById("backBtn").addEventListener("click", () => {
  alert("Nút Menu — bạn có thể nối sang màn hình chính tại đây.");
});
