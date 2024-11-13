(() => {

    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
    });
  })();
  (() => {
    const menuBtnRef = document.querySelector('[popup-menu-open]');
    const mobileMenuRef = document.querySelector('[popup-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
    });
  });
  (() =>{
  const button = document.querySelector('.header__booton');
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.popup__close');

  button.addEventListener('click', () => {
    popup.classList.add('is-open');

  });
  close.addEventListener('click', () => {
    popup.classList.remove('is-open');
    
  })
})();
(() =>{
  const button = document.querySelector('.header__booton .header__booton--mail');
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.popup__close');

  button.addEventListener('click', () => {
    popup.classList.add('is-open');

  });
  close.addEventListener('click', () => {
    popup.classList.remove('is-open');
    
  })
})();
(() =>{
  const button = document.querySelector('.header__booton--mobil');
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.popup__close');

  button.addEventListener('click', () => {
    popup.classList.add('is-open');

  });
  close.addEventListener('click', () => {
    popup.classList.remove('is-open');
    
  })
})();