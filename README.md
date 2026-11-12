# Portofoliul Cristinei Boțan

**Online:** https://cristinabotan.github.io

Site personal: automatizări AI în n8n, aplicații web, un curs în două limbi și un magazin online.
HTML, CSS și JavaScript simplu, fără framework și fără pas de build: fișierele se deschid direct în browser.

---

## Cum e făcut

```
portofoliu-cristina/
├── index.html      pagina principală: hero, Despre (cifre), PORTOFOLIU (cartonașele proiectelor),
│                   Experiență și studii, Contact
├── proiecte.html   proiectele în detaliu: CRM, Sistem n8n, Curs n8n, Agent Telegram, Zilma,
│                   Alte automatizări, Baze de date
├── css/stil.css    tot designul, comun pentru ambele pagini (culorile sus, în :root)
├── js/script.js    butonul care copiază adresa de email
├── img/            poza și capturile (.webp)
└── fisiere/        CV-ul și certificatele în PDF (le descarcă vizitatorii)
```

- **Culorile** se schimbă în `css/stil.css`, sus, în `:root`: `--night` (fundalul închis), `--orange`, `--coral`, `--lilac` și gradientul `--g-main` (liliac → roz → piersică).
- **Fonturile** vin de la Google Fonts: Inter (text și titluri), Instrument Serif italic (cuvintele scrise înclinat, clasa `it`), JetBrains Mono (etichetele mici).
- **Pe telefon** totul trece pe o coloană; regulile sunt la finalul `stil.css` (`@media`).

## Cum văd site-ul pe calculator

Dublu-clic pe `index.html`. Atât.

## Cum adaug un proiect nou

**1. Cartonașul de pe pagina principală** (`index.html`, în `<section class="band" id="portofoliu">`).
Copiez un `<article class="pc ...">` întreg și schimb:
- culoarea cartonașului: `c-crm`, `c-n8n`, `c-curs`, `c-tg` sau `c-zilma`;
- eticheta mică (`meta`), titlul (`h3`, cu partea înclinată în `<span class="it">`), descrierea (`desc`) și `tags`;
- captura: imaginea din `img/` în `<div class="win">`;
- linkul butonului, de exemplu `proiecte.html#numele-proiectului`.

O lucrare mai mică merge în grila de jos, ca `<a class="mc">` în `<div class="more">`.

**2. Detaliile** (`proiecte.html`).
Copiez o `<section class="proj ..." id="...">` întreagă și adaug linkul ei în bara `jump` de sus. În ea:
- **Problema / Soluția / Rezultat** în `<dl class="pr">`;
- „Rolul meu” în `<div class="rol">`;
- cifre în `<div class="fapte">`;
- capturi în `<figure class="ecran">`; două alăturate în `<div class="doua">`.

**3. Imaginile**: le pun în `img/`, în `.webp`, cu lățimea de cel mult 1600 px (se convertesc gratuit pe squoosh.app).

> Înainte să pun o captură din munca la o firmă: ascund numele firmei, sigla, datele clienților, adresele, codul fiscal și ID-urile interne. **Codul firmei nu se publică niciodată**, doar capturi și descrieri. Fișierele JSON exportate din n8n nu se publică așa cum sunt: conțin chei și tokenuri.

## Cum schimb CV-ul sau certificatele

Înlocuiesc fișierul din `fisiere/` **păstrând același nume** (de exemplu `Cristina_Botan_CV.pdf`). Butoanele se leagă singure de el.

## Cum public modificările

Site-ul e găzduit gratuit pe **GitHub Pages**, din acest repository (contul `cristinabotan`).

Din VS Code: panoul **Source Control** (Ctrl+Shift+G) → scriu un mesaj, de exemplu „Adaug proiectul X” → **Commit** → **Sync Changes**.
Sau din terminal, în acest dosar:

```
git add .
git commit -m "Adaug proiectul X"
git push
```

În 1–2 minute site-ul e actualizat online.

## Cum continui cu un asistent AI

Deschid dosarul în VS Code, îi dau asistentului acest fișier și îi spun ce vreau, de exemplu:
*„Citește README.md. Adaugă în portofoliu un proiect nou n8n: [descriere]. Păstrează stilul existent.”*

## Unde sunt materialele

- Schițele de design: `C:\Users\user\Documents\portofoliu-design\` și fișierul Figma „Portofoliu Cristina Boțan”.
- Capturile originale din CRM: `C:\Users\user\Documents\Arhiva Cristina 2026-11-11\4 Portofoliu\`.
