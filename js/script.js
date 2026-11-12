// Butonul de email: copiază adresa; dacă browserul nu permite, deschide programul de email.
const buton = document.getElementById('copiaza');
const stare = document.getElementById('stare');
if (buton) {
  buton.addEventListener('click', async () => {
    const email = buton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      stare.textContent = 'Adresa a fost copiată.';
    } catch (e) {
      window.location.href = 'mailto:' + email;
    }
  });
}

// Filele din Portofoliu: arată doar proiectele din categoria aleasă.
document.querySelectorAll('.filtre button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.filtre button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pc3').forEach(c => { c.hidden = b.dataset.f !== 'toate' && c.dataset.cat !== b.dataset.f; });
}));
