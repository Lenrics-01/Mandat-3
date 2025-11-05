(function () {
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (menuBtn && nav) {
    const mq = window.matchMedia('(min-width: 761px)');
    const closeMenu = () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
    };
    const openMenu = () => {
      menuBtn.setAttribute('aria-expanded', 'true');
      nav.hidden = false;
    };
    const syncMenuWithViewport = () => {
      if (mq.matches) {

        nav.hidden = false;
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        
        const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
        nav.hidden = !isOpen;
      }
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    syncMenuWithViewport();
    mq.addEventListener?.('change', syncMenuWithViewport);
  }

  const form = document.getElementById('contact-form');
  if (form) {
    const errorsEl = document.getElementById('form-errors');
    form.addEventListener('submit', (e) => {
      const messages = [];
      const name = /** @type {HTMLInputElement} */ (document.getElementById('name'));
      const prename = /** @type {HTMLInputElement} */ (document.getElementById('prename'));
      const email = /** @type {HTMLInputElement} */ (document.getElementById('email'));
      const tel = /** @type {HTMLInputElement} */ (document.getElementById('tel'));
      const sexe = /** @type {HTMLSelectElement} */ (document.getElementById('sexe'));
      const msg = /** @type {HTMLTextAreaElement} */ (document.getElementById('msg'));

      if (!name.value.trim()) messages.push('Le nom est requis.');
      if (!prename.value.trim()) messages.push('Le prénom est requis.');
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) messages.push('Un courriel valide est requis.');
      if (tel.value && !/^[+0-9 ()-]{7,}$/.test(tel.value)) messages.push('Téléphone invalide.');
      if (!sexe.value) messages.push('Veuillez sélectionner un genre.');
      if (!msg.value.trim() || msg.value.trim().length < 10) messages.push('Le message doit contenir au moins 10 caractères.');
      if (!(/** @type {HTMLInputElement} */(document.getElementById('check'))).checked) messages.push('Vous devez accepter la politique de confidentialité.');

      if (messages.length) {
        e.preventDefault();
        if (errorsEl) {
          errorsEl.innerHTML = `<ul>${messages.map(m => `<li>${m}</li>`).join('')}</ul>`;
          errorsEl.hidden = false;
          errorsEl.focus?.();
        } else {
          alert(messages.join('\n'));
        }
        const firstInvalid = [name, prename, email, tel, sexe, msg].find(el => !el.checkValidity?.() || (el === msg && msg.value.trim().length < 10));
        firstInvalid?.focus();
      } else {
        alert(`Merci ${prename.value}, votre message a bien été envoyé !`);
      }
    });
  }

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const imgEl = document.getElementById('lightbox-img');
    const btnClose = document.getElementById('lightbox-close');
    let lastTrigger = null;
  try { if (typeof lightbox.tabIndex === 'number') lightbox.tabIndex = -1; } catch (e) { /* ignore */ }
    const open = (src) => {
      if (!imgEl) return;
      imgEl.setAttribute('src', src);
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
        btnClose?.focus();
    };
    const close = () => {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden', 'true');
      if (lastTrigger) lastTrigger.focus();
    };
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target instanceof HTMLElement && target.matches('[data-lightbox]')) {
        e.preventDefault();
        lastTrigger = target;
        const src = target.getAttribute('src');
        if (src) open(src);
      }
    });
      btnClose?.addEventListener('click', close);
      lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
      document.addEventListener('keydown', (e) => {
        if (lightbox.hidden) return; 
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopImmediatePropagation();
          close();
        }
      }, true);
  }
})();

const audios = document.querySelectorAll('audio')

audios.forEach(audio =>{
    audio.addEventListener('play', ()=>{
        audios.forEach(otherAudio =>{
            if(otherAudio !== audio){
                otherAudio.pause()
            }
        })
    })
})