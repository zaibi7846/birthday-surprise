
let count = 5;

let timer = setInterval(()=>{
  document.getElementById("countdown").innerHTML = count;
  count--;

  if(count < 0){
    clearInterval(timer);
    document.getElementById("countdown").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("music").play();
    typeMessage();
  }
},1000);

/* slideshow */
let photos = [
"photos/photo1.jpg","photos/photo2.jpg","photos/photo3.jpg",
"photos/photo4.jpg","photos/photo5.jpg","photos/photo6.jpg",
"photos/photo7.jpg","photos/photo8.jpg","photos/photo9.jpg",
"photos/photo10.jpg"
];

let i=0;

setInterval(()=>{
  document.getElementById("slide").src = photos[i];
  i = (i+1)%photos.length;
},3000);

/* message type */
let text = `Dear Ruhma ❤️
Happy Birthday!
You are the best friend ever.
— Shahzaib ❤️`;

let index=0;

function typeMessage(){
  let el = document.getElementById("msg");
  let t = setInterval(()=>{
    el.innerHTML += text[index];
    index++;
    if(index>=text.length) clearInterval(t);
  },40);
}

/* cake */
function blow(){
  alert("🎉 Happy Birthday Ruhma ❤️");

  for(let i=0;i<40;i++){
    let s=document.createElement("div");
    s.innerHTML="✨";
    s.style.position="fixed";
    s.style.left=Math.random()*100+"%";
    s.style.top=Math.random()*100+"%";
    s.style.color="gold";
    document.body.appendChild(s);

    setTimeout(()=>s.remove(),2000);
  }
}

/* music unlock fix */
document.addEventListener("click",()=>{
  document.getElementById("music").play();
});
