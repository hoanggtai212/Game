const world = document.getElementById("world");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
let selected = null;

/*
  CHỈ 1 ẢNH: assets/world-map.png
  Mỗi chapter dùng lại ảnh đó nhưng đổi crop/zoom nhẹ.
  Muốn thêm map chỉ cần thêm object vào mảng.
*/
const chapters = [
  ["Chặng 02", "Bài 5–8", 5, [[70,25],[46,48],[48,73],[37,94]], "center top"],
  ["Chặng 03", "Bài 9–12", 9, [[68,25],[45,48],[50,73],[36,94]], "center 35%"],
  ["Chặng 04", "Bài 13–16", 13, [[71,25],[47,48],[49,73],[38,94]], "center 65%"],
  ["Chặng 05", "Bài 17–20", 17, [[67,25],[45,48],[51,73],[37,94]], "center 100%"],
  ["Chặng 06", "Bài 21–24", 21, [[70,25],[46,48],[49,73],[38,94]], "center 20%"]
];

chapters.forEach(([name, range, from, positions, position]) => {
  const section = document.createElement("section");
  section.className = "map-section";
  section.style.background = `url("assets/world-map.png") ${position}`;

  section.innerHTML = `<div class="chapter">${name} • ${range}</div>`;

  positions.forEach(([x, y], i) => {
    const number = from + i;
    const btn = document.createElement("button");

    btn.className = `level${i === 3 ? " end" : ""}`;
    btn.style.cssText = `left:${x}%;top:${y}%`;
    btn.dataset.level = number;
    btn.innerHTML = `<span>${number}</span><small>Bài ${number}</small>`;

    btn.onclick = () => {
      selected = number;
      modalTitle.textContent = `Bài ${number}`;
      modal.classList.remove("hidden");
    };

    section.appendChild(btn);
  });

  world.appendChild(section);
});

document.getElementById("close").onclick = () => modal.classList.add("hidden");
modal.addEventListener("click", e => {
  if(e.target === modal) modal.classList.add("hidden");
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") modal.classList.add("hidden");
});
document.getElementById("play").onclick = () => {
  alert(`Bắt đầu Bài ${selected}!`);
};
