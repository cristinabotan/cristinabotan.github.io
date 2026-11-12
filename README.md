# Portofoliul Cristinei Boțan

**Online:** https://cristinabotan.github.io

Site personal: automatizări AI în n8n, aplicații web, un curs în două limbi și un magazin online.
HTML, CSS și JavaScript simplu, fără framework și fără pas de build: fișierele se deschid direct în browser.

---

## Cum e făcut

```
portofoliu-cristina/
├── index.html                      pagina principală: hero, Despre, PORTOFOLIU (grila cu 6 proiecte),
│                                   Experiență și studii, Contact
├── proiect-crm.html                o pagină pentru fiecare proiect (cu „anterior / următor” la final)
├── proiect-sistem-n8n.html
├── proiect-curs-n8n.html
├── proiect-agent-telegram.html
├── proiect-zilma.html
├── proiect-alte-automatizari.html
├── proiecte.html                   doar trimite la portofoliu (pentru linkurile vechi)
├── css/stil.css                    tot designul, comun pentru toate paginile
├── js/script.js                    butonul care copiază adresa de email
├── img/                            poza și capturile (.webp)
└── fisiere/                        CV-ul și certificatele în PDF
```

- **Culorile** se schimbă în `css/stil.css`, sus, în `:root`: `--night` (fundalul închis), `--orange`, `--coral`, `--lilac` și gradientul `--g-main` (liliac → roz → piersică).
- **Fonturile** vin de la Google Fonts: Inter (text și titluri), Instrument Serif italic (cuvintele scrise înclinat, clasa `it`), JetBrains Mono (etichetele mici).
- **Pe telefon** totul trece pe o coloană; regulile sunt la finalul `stil.css` (`@media`).

## Cum văd site-ul pe calculator

Dublu-clic pe `index.html`. Atât.

## Cum adaug un proiect nou

**1. Pagina proiectului.** Copiez una dintre paginile `proiect-*.html` (de exemplu `proiect-zilma.html`) sub un nume nou și schimb conținutul din `<section class="proj ...">`:
- **Problema / Soluția / Rezultat** în `<dl class="pr">`;
- „Rolul meu” în `<div class="rol">`;
- cifre în `<div class="fapte">`;
- capturi în `<figure class="ecran">`; două alăturate în `<div class="doua">`.

Jos, în `<nav class="pnav">`, pun legăturile spre proiectul anterior și următor.

**2. Cartonașul din pagina principală** (`index.html`, în `<div class="pgrid">`). Copiez un `<a class="pcard" ...>` întreg și schimb: linkul (`href`), imaginea din `img/`, eticheta mică (`ptag`), titlul (`h3`) și tehnologiile de lângă el. Grila are 3 coloane; cartonașul al 7-lea începe un rând nou.

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
