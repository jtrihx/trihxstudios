// tiny back-to-top helper
// shows the button after a little scroll; hides it near the top
const btn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (!btn) return;
  btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// smooth scroll back to the top
if (btn) {
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
