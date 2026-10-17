
(() => {
 const player=document.querySelector('.presentation-player'); if(!player)return;
 const image=document.getElementById('presentation-slide'), play=document.getElementById('slide-play'), select=document.getElementById('slide-select'), status=document.getElementById('slide-status');
 const caption=document.createElement('p');caption.className='presentation-caption';caption.hidden=true;image.after(caption);
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,paused=motion.matches,timer,hover=false,focused=false,visible=true,texts=[];
 for(let n=1;n<=30;n++)select.add(new Option(String(n),String(n-1)));
 function schedule(){clearTimeout(timer);if(!paused&&!hover&&!focused&&visible&&!document.hidden)timer=setTimeout(()=>show(index+1),8000);}
 function show(n){index=(n+30)%30;image.src=`assets/slideshow/slide-${index+1}.webp`;image.alt=texts[index]||`Quality of Experiments, slide ${index+1} of 30`;caption.hidden=index<27;caption.textContent=index>=27?['Instrumentation Lab · Faculty demonstration','Instrumentation Lab · Wheatstone bridge trainer','Instrumentation Lab · Potentiometer trainer'][index-27]:'';select.value=String(index);status.textContent=`Slide ${index+1} of 30`;schedule();const next=new Image();next.src=`assets/slideshow/slide-${(index+1)%30+1}.webp`;}
 function pause(value){paused=value;play.textContent=paused?'Play':'Pause';schedule();}
 document.getElementById('slide-prev').onclick=()=>show(index-1);
 document.getElementById('slide-next').onclick=()=>show(index+1);
 play.onclick=()=>pause(!paused);select.onchange=()=>show(Number(select.value));
 player.addEventListener('keydown',e=>{if(e.target.tagName==='SELECT')return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();show(index+(e.key==='ArrowRight'?1:-1));}});
 player.addEventListener('mouseenter',()=>{hover=true;schedule();});player.addEventListener('mouseleave',()=>{hover=false;schedule();});
 player.addEventListener('focusin',()=>{focused=true;status.setAttribute('aria-live','polite');schedule();});player.addEventListener('focusout',e=>{if(!player.contains(e.relatedTarget)){focused=false;status.setAttribute('aria-live','off');schedule();}});
 document.addEventListener('visibilitychange',schedule);motion.addEventListener('change',e=>{if(e.matches)pause(true);});
 if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();}).observe(player);
 const full=document.getElementById('slide-fullscreen');if(!player.requestFullscreen)full.hidden=true;else full.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await player.requestFullscreen();}catch{full.textContent='Full screen unavailable';}};
 fetch('assets/slideshow/slides.json').then(r=>r.json()).then(t=>{texts=t;image.alt=texts[index];}).catch(()=>{});
 player.querySelector('.presentation-controls').hidden=false;pause(paused);
})();
