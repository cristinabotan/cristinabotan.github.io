# Portofoliul Cristinei Boțan

**Online:** https://cristinabotan.github.io

Site personal: aplicații web, automatizări n8n și baze de date.
HTML, CSS și JavaScript simplu, fără framework și fără pas de build: fișierele se deschid direct în browser.

---

## Cum e făcut

```
portofoliu-cristina/
├── index.html      pagina principală: Acasă, Despre, Experiență, Abilități, Proiecte (carduri), Contact
├── proiecte.html   proiectele în detaliu: CRM, n8n, Baze de date
├── css/stil.css    tot designul (culori, fonturi, așezare), comun pentru ambele pagini
├── js/script.js    filtrele de proiecte și butonul „Copiază adresa”
└── img/            capturile (format .webp)
```

- **Culorile** se schimbă în `css/stil.css`, sus, în blocul `:root` (`--accent` = violet, `--accent-2` = roz). Sunt două seturi: întunecat (implicit) și luminos.
- **Fonturile** vin de la Google Fonts: Sora (titluri), Inter (text), JetBrains Mono (cod).

## Cum văd site-ul pe calculator

Dublu-clic pe `index.html`. Atât.

## Cum adaug un proiect nou

**1. Cardul de pe pagina principală** (`index.html`, secțiunea `id="proiecte"`).
Copiez un `<article class="card" ...>` întreg și schimb:
- `data-cat="crm"`: categoria pentru filtre (`crm`, `n8n` sau `baze`; pentru o categorie nouă adaug și un buton `<button class="fila" data-f="...">`);
- imaginea din `img/` (`src` și `alt`);
- eticheta (`tag`), titlul (`h3`) și o frază (`p`);
- linkul „Vezi detalii”, de exemplu `proiecte.html#numele-proiectului`.

**2. Detaliile** (`proiecte.html`).
Copiez o `<section class="proiect" id="...">` întreagă. Fiecare lucrare din ea e un `<article class="bloc">` cu:
- **Problema** și **Soluția** (`<dl class="pr">`);
- o captură în ramă de fereastră (`<figure class="ecran">`); două capturi alăturate merg în `<div class="doua">`.

**3. Imaginile**: le pun în `img/`, de preferat `.webp`, lățime de cel mult 1600 px. Se pot converti gratuit pe squoosh.app.

> Înainte să pun o captură din munca la o firmă: ascund numele firmei, sigla, datele clienților, adresele și codul fiscal. **Codul firmei nu se publică niciodată**, doar capturi și descrieri.

## Cum public modificările

Site-ul e găzduit gratuit pe **GitHub Pages**, din acest repository.

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

## De făcut

- [ ] Linkul de LinkedIn în Contact (în `index.html` e pregătit, într-un comentariu)
- [ ] O poză în cercul de sus (acum scrie „CB”): `img/poza.webp` în locul lui `<span class="grad">CB</span>`
- [ ] Lucrările n8n din curs (Evaluarea finală și lecțiile alese)
- [ ] Verificat nivelurile de la Abilități
