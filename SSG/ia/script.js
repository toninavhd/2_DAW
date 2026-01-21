const form = document.getElementById('birthdayForm');
const card = document.getElementById('card');
const messageEl = document.getElementById('message');
const saveBtn = document.getElementById('saveBtn');
const savedList = document.getElementById('savedList');
const clearAllBtn = document.getElementById('clearAll');

let currentCard = null;
const LS_KEY = 'ddg_bday_cards_v1';

function makeMessage(first,last,hobby){
  return `¡Feliz cumpleaños, ${first} ${last}! Que tu día esté lleno de alegría y tiempo para disfrutar de tu hobby: ${hobby}. 🎉`;
}

function renderCurrent(first,last,hobby){
  messageEl.textContent = makeMessage(first,last,hobby);
  card.classList.remove('hidden');
  saveBtn.disabled = false;
  currentCard = {first,last,hobby,created:Date.now()};
}

function loadSaved(){
  const raw = localStorage.getItem(LS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveAll(arr){
  localStorage.setItem(LS_KEY, JSON.stringify(arr));
}

function renderSaved(){
  const arr = loadSaved();
  savedList.innerHTML = '';
  if(arr.length===0){
    savedList.innerHTML = '<div style="opacity:.6">No hay tarjetas guardadas.</div>';
    return;
  }

  function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[s]));
}
  // Mostrar más recientes arriba
  arr.slice().reverse().forEach((c,revIdx)=>{
    const realIdx = arr.length - 1 - revIdx;
    const wrapper = document.createElement('div');
    wrapper.className = 'saved-item';

    // Crear mini tarjeta (clon del estilo de la tarjeta principal)
    const mini = document.createElement('div');
    mini.className = 'mini-card';
    mini.innerHTML = `
      <div class="mini-title">¡Feliz Cumpleaños, ${escapeHtml(c.first)} ${escapeHtml(c.last)}!</div>
      <div class="mini-message">${escapeHtml(makeMessage(c.first,c.last,c.hobby))}</div>
      <div class="saved-actions">
        <button class="action-btn" data-index="${realIdx}" data-action="load">Abrir</button>
        <button class="action-btn" data-index="${realIdx}" data-action="delete">Eliminar</button>
      </div>
    `;
    wrapper.appendChild(mini);
    savedList.appendChild(wrapper);
  });
}


form.addEventListener('submit', e=>{
  e.preventDefault();
  const first = form.firstName.value.trim();
  const last = form.lastName.value.trim();
  const hobby = form.hobby.value.trim();
  if(!first||!last||!hobby) return;
  renderCurrent(first,last,hobby);
});

saveBtn.addEventListener('click', ()=>{
  if(!currentCard) return;
  const arr = loadSaved();
  arr.push(currentCard);
  saveAll(arr);
  renderSaved();
  saveBtn.disabled = true;
});

savedList.addEventListener('click', e=>{
  const btn = e.target.closest('button');
  if(!btn) return;
  const action = btn.dataset.action;
  const idx = Number(btn.dataset.index);
  const arr = loadSaved();
  if(action === 'load'){
    const c = arr[idx];
    renderCurrent(c.first,c.last,c.hobby);
    window.scrollTo({top:0,behavior:'smooth'});
  } else if(action === 'delete'){
    arr.splice(idx,1);
    saveAll(arr);
    renderSaved();
  }
});

clearAllBtn.addEventListener('click', ()=>{
  if(confirm('¿Borrar todas las tarjetas guardadas?')) {
    localStorage.removeItem(LS_KEY);
    renderSaved();
  }
});

// init
renderSaved();
/* Confetti pastel sutil - canvas animation */
(function initConfetti(){
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  const colors = [
    'rgba(255,182,193,0.9)', // light pink
    'rgba(173,216,230,0.9)', // light blue
    'rgba(221,160,221,0.9)', // lavender
    'rgba(255,255,224,0.9)', // pale yellow
    'rgba(198, 255, 230,0.9)' // mint
  ];

  const confettiCount = Math.floor((W*H)/80000); // scale to screen
  const confetti = [];

  function rand(min,max){ return Math.random()*(max-min)+min }

  for(let i=0;i<confettiCount;i++){
    confetti.push({
      x: rand(0,W),
      y: rand(-H,0),
      size: rand(6,14),
      speedY: rand(20,60)/60, // vertical speed
      speedX: rand(-0.6,0.6),
      rot: rand(0,360),
      rotSpeed: rand(-3,3),
      color: colors[Math.floor(rand(0,colors.length))]
    });
  }

  function resize(){
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
  }
  addEventListener('resize', resize);

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05,(now-last)/1000);
    last = now;
    ctx.clearRect(0,0,W,H);
    // subtle global fade to blend with fog
    // draw confetti behind UI: low opacity
    confetti.forEach(p=>{
      p.x += p.speedX * dt * 60;
      p.y += p.speedY * dt * 60;
      p.rot += p.rotSpeed * dt * 60;
      if(p.y > H + 50){ p.y = rand(-60, -10); p.x = rand(0,W) }
      if(p.x < -50) p.x = W + 50;
      if(p.x > W + 50) p.x = -50;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      // draw rounded rectangle to feel soft/pastel
      const w = p.size * 1.6;
      const h = p.size;
      roundRect(ctx, -w/2, -h/2, w, h, Math.max(2, p.size/4));
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(loop);
  }

  function roundRect(ctx, x, y, w, h, r){
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  // start with lowered global alpha so confetti doesn't overpower fog
  ctx.globalAlpha = 0.85;
  requestAnimationFrame(loop);
})();
