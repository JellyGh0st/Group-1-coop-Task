
const modal = document.getElementById('modalai');

fetch('../scripts/data.json')
  .then(response => response.json())
  .then(data => {
    data.Nuotraukos.forEach(jKort => {
      const pav = jKort.author;
      const apras = jKort.title;
      const apie = jKort.about;
      const fotke = jKort.source;

      const newMod = document.createElement('div');
      newMod.classList.add('modalai');
      const vardas = document.createElement('h2');
      const vaPa = document.createTextNode(pav);
      vardas.appendChild(vaPa);
      const text = document.createElement('p');
      const tur = document.createTextNode(apras);
      text.appendChild(tur);
      const aprasy = document.createElement('p');
      const tekstas = document.createTextNode(apie);
      aprasy.appendChild(tekstas);
      const vFotke = document.createElement('img');
      vFotke.setAttribute('src', fotke);

      newMod.append(vardas, aprasy, vFotke, text);
      modal.appendChild(newMod);
    });
  });