
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
const errorMsg = document.getElementById('form-error');

form.addEventListener('submit', function(e) {
  e.preventDefault();



  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      successMsg.classList.remove('hidden');
      form.reset();
      setTimeout(() => successMsg.classList.add('hidden'), 7000);
    } else {
      errorMsg.classList.remove('hidden');
    }
  })
  .catch(() => {
    errorMsg.classList.remove('hidden');
  });
});
   // Menu mobile toggle
   const mobileMenuButton = document.getElementById('mobile-menu-button');
   const closeMobileMenu = document.getElementById('close-mobile-menu');
   const mobileNav = document.getElementById('mobile-nav');
   
   mobileMenuButton.addEventListener('click', () => {
       mobileNav.classList.add('active');
       document.body.style.overflow = 'hidden';
   });
   
   closeMobileMenu.addEventListener('click', () => {
       mobileNav.classList.remove('active');
       document.body.style.overflow = '';
   });
   
   // Fechar menu ao clicar em um link
   mobileNav.querySelectorAll('a').forEach(link => {
       link.addEventListener('click', () => {
           mobileNav.classList.remove('active');
           document.body.style.overflow = '';
       });
   });
   
   // Smooth scrolling para links de âncora
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });
   
  
   
   // Ativar link da navegação conforme scroll
   window.addEventListener('scroll', () => {
       const sections = document.querySelectorAll('section');
       const navLinks = document.querySelectorAll('.nav-link');
       
       let current = '';
       
       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;
           
           if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
               current = section.getAttribute('id');
           }
       });
       
       navLinks.forEach(link => {
           link.classList.remove('active');
           if (link.getAttribute('href').substring(1) === current) {
               link.classList.add('active');
           }
       });
   });