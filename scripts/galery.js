

const modal = document.getElementById('modalai');

import Modal from '../scripts/Modal.js';

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

      newMod.append(vFotke);
      modal.appendChild(newMod);

      vFotke.addEventListener('click', () => {
        newMod.removeChild(vFotke);

        const visaInfo = document.createElement('div');
        visaInfo.classList.add('visaInfo');
        visaInfo.append(vardas);
        visaInfo.append(text);
        visaInfo.append(aprasy);
        newMod.append(visaInfo);

        const closeModal = () => {
          newMod.removeChild(visaInfo);
          newMod.append(vFotke);
          document.removeEventListener('spaustEsc', onEscKeyDown);
        };
        const onEscKeyDown = event => {
          if (event.key === 'Escape') {
            closeModal();
          }};
        document.addEventListener('spaustEsc', onEscKeyDown);
        visaInfo.addEventListener('click', closeModal);
      });
    });
  });

  //     vFotke.addEventListener('click', () => {
  //       const newDiv = document.createElement('div');
  //       newDiv.classList.add('modalai');
  //       newDiv.appendChild(vardas);
  //       newDiv.appendChild(text);
  //       newDiv.appendChild(aprasy);

  //       newMod.replaceChild(newDiv, vFotke);
  //     });

  //     newMod.append(vFotke);
  //     modal.appendChild(newMod);
  //   });
  // });


      // paspaudimas ant fotkės

      // newMod.append(vardas);
      // newMod.append(text);
      // newMod.append(aprasy);
      // modal.appendChild(newMod);

      // vFotke.addEventListener('click', () => {
      //   newMod.removeChild(vFotke);
      // });

      // vFotke.addEventListener('click', () => {
      //   const newDiv = document.createElement('div');
      //   const newAprasy = document.createElement('p');
      //   const newTekstas = document.createTextNode(apie);
      //   newAprasy.appendChild(newTekstas);
      //   const newTur = document.createElement('p');
      //   const newVa = document.createTextNode(apras);
      //   newTur.appendChild(newVa);
      //   newDiv.append(newAprasy);
      //   newDiv.append(newTur);
      //   newMod.append(newDiv);
      // });
  //   });
  // });