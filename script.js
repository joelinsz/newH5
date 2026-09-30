document.addEventListener("DOMContentLoaded",()=>{
  const loading=document.getElementById("loading");
  setTimeout(()=>{loading.style.opacity="0";setTimeout(()=>loading.remove(),800)},650);

  const music=document.getElementById("bgMusic");
  const btn=document.getElementById("musicBtn");
  let playing=false;
  btn.addEventListener("click",()=>{
    if(playing){music.pause();btn.classList.remove("on");playing=false}
    else{
      music.play().then(()=>{btn.classList.add("on");playing=true}).catch(()=>{});
    }
  });
  // 微信/移动端常见策略：首次触摸后尝试播放，失败也不影响页面。
  document.addEventListener("touchstart",()=>{
    if(!playing) music.play().then(()=>{btn.classList.add("on");playing=true}).catch(()=>{});
  },{once:true,passive:true});

  const target=new Date("2026-10-18T18:00:00+08:00").getTime();
  const pad=n=>String(Math.max(0,n)).padStart(2,"0");
  function tick(){
    let d=Math.max(0,target-Date.now());
    const day=Math.floor(d/86400000); d%=86400000;
    const h=Math.floor(d/3600000); d%=3600000;
    const m=Math.floor(d/60000); d%=60000;
    const s=Math.floor(d/1000);
    document.getElementById("days").textContent=pad(day);
    document.getElementById("hours").textContent=pad(h);
    document.getElementById("mins").textContent=pad(m);
    document.getElementById("secs").textContent=pad(s);
  }
  tick();setInterval(tick,1000);

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.classList.add("visible");
    });
  },{threshold:.12});
  document.querySelectorAll(".scene").forEach(el=>io.observe(el));
});