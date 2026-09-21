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
  {name:"Chặng 02", range:"Bài 5–8",  from:5,  positions:[[70,25],[46,48],[48,73],[37,94]], zoom:1.00, pos:"center top"},
  {name:"Chặng 03", range:"Bài 9–12", from:9,  positions:[[68,25],[45,48],[50,73],[36,94]], zoom:1.06, pos:"center 7%"},
  {name:"Chặng 04", range:"Bài 13–16",from:13, positions:[[71,25],[47,48],[49,73],[38,94]], zoom:1.02, pos:"center 3%"},
  {name:"Chặng 05", range:"Bài 17–20",from:17, positions:[[67,25],[45,48],[51,73],[37,94]], zoom:1.08, pos:"center 10%"},
  {name:"Chặng 06", range:"Bài 21–24",from:21, positions:[[70,25],[46,48],[49,73],[38,94]], zoom:1.04, pos:"center 5%"},
  {name:"Chặng 07", range:"Bài 25–28",from:25, positions:[[68,25],[47,48],[50,73],[37,94]], zoom:1.10, pos:"center 12%"}
];

chapters.forEach((chapter, chapterIndex) => {
  const section = document.createElement("section");
  section.className = "map-section";
  section.style.backgroundSize = `${100 * chapter.zoom}% auto`;
  section.style.backgroundPosition = chapter.pos;

  const label = document.createElement("div");
  label.className = "chapter";
  label.textContent = `${chapter.name}  •  ${chapter.range}`;
  section.appendChild(label);

  chapter.positions.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "level" + (i === 3 ? " end" : "");
    btn.style.left = p[0] + "%";
    btn.style.top = p[1] + "%";
    btn.dataset.level = chapter.from + i;
    btn.innerHTML = `<span>${chapter.from + i}</span><small>Bài ${chapter.from + i}</small>`;
    btn.addEventListener("click", () => {
      selected = btn.dataset.level;
      modalTitle.textContent = `Bài ${selected}`;
      modal.classList.remove("hidden");
    });
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
