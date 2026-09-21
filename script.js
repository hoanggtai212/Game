const world=document.getElementById("world");
const modal=document.getElementById("modal");
const modalTitle=document.getElementById("modalTitle");
let selected=null;

const chapters=[
  {name:"Chặng 02",range:"Bài 5–7",from:5,positions:[[55,34],[51,50],[47,66]]},
  {name:"Chặng 03",range:"Bài 8–10",from:8,positions:[[55,34],[51,50],[47,66]]},
  {name:"Chặng 04",range:"Bài 11–13",from:11,positions:[[55,34],[51,50],[47,66]]},
  {name:"Chặng 05",range:"Bài 14–16",from:14,positions:[[55,34],[51,50],[47,66]]},
  {name:"Chặng 06",range:"Bài 17–19",from:17,positions:[[55,34],[51,50],[47,66]]}
];

chapters.forEach(chapter=>{
  const section=document.createElement("section");
  section.className="map-section";
  section.style.backgroundImage='url("assets/world-map.png")';
  section.style.backgroundRepeat="no-repeat";
  section.style.backgroundSize="100% auto";
  section.style.backgroundPosition="center top";

  const label=document.createElement("div");
  label.className="chapter";
  label.textContent=`${chapter.name} • ${chapter.range}`;
  section.appendChild(label);

  chapter.positions.forEach((position,index)=>{
    const number=chapter.from+index;
    const btn=document.createElement("button");
    btn.className="level";
    btn.style.left=position[0]+"%";
    btn.style.top=position[1]+"%";
    btn.dataset.level=number;
    btn.innerHTML=`<span>${number}</span><small>Bài ${number}</small>`;

    btn.onclick=()=>{
      selected=number;
      modalTitle.textContent=`Bài ${number}`;
      modal.classList.remove("hidden");
    };

    section.appendChild(btn);
  });

  world.appendChild(section);
});

document.getElementById("close").onclick=()=>modal.classList.add("hidden");

modal.onclick=e=>{
  if(e.target===modal) modal.classList.add("hidden");
};

document.onkeydown=e=>{
  if(e.key==="Escape") modal.classList.add("hidden");
};

document.getElementById("play").onclick=()=>{
  alert(`Bắt đầu Bài ${selected}!`);
};
