// Simple JS for nav toggle and fake form submission
document.getElementById('nav-toggle').addEventListener('click', function(){
  document.getElementById('nav').classList.toggle('show');
});
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thanks — message captured locally. Hook this form up to a backend or use Formspree/Netlify Forms.';
  this.reset();
});
