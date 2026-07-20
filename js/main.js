(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.hidden === true;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const form = document.getElementById('reservationForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const message = [
        'Reservation Request',
        '------------------',
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Date: ${values.date}`,
        `Time: ${values.time}`,
        `Party: ${values.party}`,
        `Requests: ${values.requests || 'None'}`
      ].join('\n');

      alert(message + '\n\nThis demo captures the request. For production, wire this to an email or reservation system.');
      form.reset();
    });
  }
})();
