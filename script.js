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
      const style = /** @type {HTMLInputElement} */ (document.getElementById('style'))

      if (!name.value.trim()) messages.push('Le nom est requis.');
      if (!prename.value.trim()) messages.push('Le prénom est requis.');
      if (!style.value.trim()) messages.push('Le style artiste est requis')
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) messages.push('Un courriel valide est requis.');
      if (!tel.value.trim()) {
        messages.push('Le téléphone est requis.');
      } else if (!/^[+0-9 ()-]{7,}$/.test(tel.value)) {
        messages.push('Téléphone invalide.');
      }
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
        e.preventDefault();
        const successMsg = document.createElement('div');
        successMsg.textContent = `Merci ${prename.value}, votre message a bien été envoyé !`;
        successMsg.className = 'success-banner';
        successMsg.setAttribute('role', 'status');
        successMsg.setAttribute('aria-live', 'polite');
        document.body.appendChild(successMsg);
        requestAnimationFrame(() => successMsg.classList.add('visible'));
        setTimeout(() => successMsg.remove(), 5000);
        form.reset();
      }
    });
  }

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const imgEl = document.getElementById('lightbox-img');
    const btnClose = document.getElementById('lightbox-close');
    let lastTrigger = null;
  try { if (typeof lightbox.tabIndex === 'number') lightbox.tabIndex = -1; } catch (e) { }
    const open = (src, altText) => {
      if (!imgEl) return;
      imgEl.setAttribute('src', src);
      if (altText) imgEl.setAttribute('alt', altText);
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
        const altText = target.getAttribute('alt') || 'Agrandissement';
        if (src) open(src, altText);
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

const audios = document.querySelectorAll('audio');
audios.forEach((audio) => {
  audio.addEventListener('play', () => {
    audios.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
  });
});

const bgMusic = /** @type {HTMLAudioElement|null} */ (document.getElementById('background-music'));
if (bgMusic) {
  try { bgMusic.volume = 0.25; } catch (_) {}
  const btn = document.createElement('button');
  btn.id = 'audio-control';
  document.body.appendChild(btn);

  const refreshIcon = () => {
    const isPlaying = !bgMusic.paused && !bgMusic.ended;
    btn.textContent = isPlaying ? '🔊' : '🔈';
    btn.setAttribute('aria-pressed', String(isPlaying));
    btn.setAttribute('aria-label', isPlaying ? 'Mettre la musique en pause' : 'Lancer la musique de fond');
    btn.title = isPlaying ? 'Mettre la musique en pause' : 'Lancer la musique de fond';
  };
  refreshIcon();

  bgMusic.addEventListener('play', refreshIcon);
  bgMusic.addEventListener('pause', refreshIcon);

  btn.addEventListener('click', async () => {
    try {
      if (bgMusic.paused) {
        await bgMusic.play();
      } else {
        bgMusic.pause();
      }
    } catch (_) {
    } finally {
      refreshIcon();
    }
  });
}