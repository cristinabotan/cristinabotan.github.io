document.querySelectorAll('.fila').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.fila').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  const f = b.dataset.f;
  document.querySelectorAll('.card').forEach(c => { c.hidden = f !== 'toate' && c.dataset.cat !== f; });
}));
document.getElementById('copiaza')?.addEventListener('click', () => {
  const t = document.getElementById('email').textContent, st = document.getElementById('stare');
  const alege = () => { const r = document.createRange(); r.selectNodeContents(document.getElementById('email')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); st.textContent = 'Adresa e selectată; apasă Ctrl+C.'; };
  try { navigator.clipboard.writeText(t).then(() => { st.textContent = 'Adresa a fost copiată.'; }, alege); } catch (e) { alege(); }
});
