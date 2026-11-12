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
