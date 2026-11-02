/* CampusConnect Foundation - js/script.js
   1 Menu | 2 Accordion | 3 Dynamic services + search/sort | 4 Lightbox
   5 Leaflet map | 6 Form validation + AJAX | 7 Enquiry response + tracking | 8 Contact email */
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* 1. Mobile menu */
(() => {
  const btn = $('#menuToggle'), nav = $('#siteNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    btn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
})();

/* 2. Accordion (FAQs) */
$$('.accordion-btn').forEach(btn => btn.addEventListener('click', () => {
  const panel = document.getElementById(btn.getAttribute('aria-controls'));
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  if (panel) panel.hidden = open;
}));

/* 3. Dynamic services + live search + sort */
const SERVICES = [
  { title: 'Student Support', text: 'Get assistance with personal, academic or campus-related issues.', keywords: 'help assistance complaint concern issue problem report enquiry', icon: 'fa-regular fa-comment-dots', color: 'teal', href: './enquiry.html' },
  { title: 'Academic Support', text: 'Access tutoring, study guides and academic resources.', keywords: 'tutoring tutor study guides appeals marks lecturer exams', icon: 'fa-solid fa-graduation-cap', color: 'green', href: './enquiry.html' },
  { title: 'Campus Announcements', text: 'Stay informed about important news and events.', keywords: 'news notices events updates timetable maintenance', icon: 'fa-solid fa-bullhorn', color: 'purple', href: '../index.html#announcements' },
  { title: 'Contact Directory', text: 'Find contacts for RCL, lecturers and departments.', keywords: 'contact email phone staff management representative', icon: 'fa-solid fa-address-book', color: 'amber', href: './contact.html' },
  { title: 'Resources & FAQs', text: 'Browse helpful resources and frequently asked questions.', keywords: 'questions answers guides information help', icon: 'fa-solid fa-book-open', color: 'pink', href: './enquiry.html#faqs' },
  { title: 'Issue Tracking', text: 'Track the status of your submitted issues.', keywords: 'track status reference number progress complaint request', icon: 'fa-solid fa-chart-line', color: 'blue', href: './enquiry.html#track' }
];
(() => {
  const grid = $('#servicesGrid');
  if (!grid) return;
  const input = $('#serviceSearch'), sort = $('#serviceSort'), none = $('#noResults'), count = $('#resultCount');
  // lower-case, turn "&" into "and" and drop punctuation so "faqs?" and "Resources & FAQs" both match
  const norm = s => s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const render = () => {
    const terms = norm(input.value).split(' ').filter(Boolean);
    const list = SERVICES.filter(s => {
      const hay = norm(s.title + ' ' + s.text + ' ' + s.keywords);
      return terms.every(t => hay.includes(t)); // every word typed must match
    });
    if (sort.value === 'az') list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort.value === 'za') list.sort((a, b) => b.title.localeCompare(a.title));
    grid.innerHTML = list.map(s => `<a href="${s.href}" class="help-card ${s.color}"><div class="help-icon"><i class="${s.icon}"></i></div><h3>${s.title}</h3><p>${s.text}</p><span class="learn-more">Learn more <i class="fa-solid fa-arrow-right"></i></span></a>`).join('');
    none.hidden = list.length > 0;
    if (count) count.textContent = terms.length ? `${list.length} of ${SERVICES.length} services found` : '';
  };
  input.addEventListener('input', render);
  input.addEventListener('keydown', e => { if (e.key === 'Escape') { input.value = ''; render(); } });
  sort.addEventListener('change', render);
  render();
})();

/* 4. Gallery lightbox */
(() => {
  const imgs = $$('.gallery img');
  if (!imgs.length) return;
  const box = document.createElement('div');
  box.className = 'lightbox'; box.hidden = true;
  box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
  box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous image">&#10094;</button><img alt=""><button class="lb-next" aria-label="Next image">&#10095;</button><p class="lb-cap"></p>';
  document.body.appendChild(box);
  const big = $('img', box), cap = $('.lb-cap', box);
  let i = 0;
  const show = n => { i = (n + imgs.length) % imgs.length; big.src = imgs[i].src; big.alt = imgs[i].alt; cap.textContent = imgs[i].alt; };
  const open = n => { show(n); box.hidden = false; document.body.style.overflow = 'hidden'; };
  const close = () => { box.hidden = true; document.body.style.overflow = ''; };
  imgs.forEach((im, n) => {
    im.tabIndex = 0;
    im.addEventListener('click', () => open(n));
    im.addEventListener('keydown', e => { if (e.key === 'Enter') open(n); });
  });
  $('.lb-close', box).onclick = close;
  $('.lb-prev', box).onclick = () => show(i - 1);
  $('.lb-next', box).onclick = () => show(i + 1);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();

/* 5. Leaflet map (coordinates are approximate - adjust to the exact campus) */
(() => {
  const el = $('#leafletMap');
  if (!el || typeof L === 'undefined') return;
  const pos = [-33.9608, 25.6022];
  const map = L.map(el).setView(pos, 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
  L.marker(pos).addTo(map).bindPopup('<strong>CampusConnect Foundation</strong><br>Rosebank College, Nelson Mandela Bay').openPopup();
})();

/* 6. Form validation + AJAX */
const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // testing API, nothing is stored
const MAIL_TO = 'info@campusconnectnmb.co.za';

function validateField(el) {
  const v = el.value.trim(), n = el.name;
  if (el.type === 'checkbox') return el.required && !el.checked ? 'You must tick this box to continue.' : '';
  if (el.required && v === '') return el.tagName === 'SELECT' ? 'Please select an option.' : 'This field is required.';
  if (v === '') return '';
  if (n === 'fullName' && v.length < 2) return 'Name must be at least 2 characters.';
  if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Please enter a valid email address.';
  if (n === 'studentNo' && !/^\d{6,10}$/.test(v)) return 'Student number must be 6 to 10 digits.';
  if (n === 'phone' && !/^(?:\+27|0)\d{9}$/.test(v.replace(/\s+/g, ''))) return 'Enter a valid SA number, e.g. 0821234567 or +27821234567.';
  if (n === 'subject' && v.length < 5) return 'Subject must be at least 5 characters.';
  if ((n === 'description' || n === 'message') && v.length < 10) return 'Please write at least 10 characters.';
  return '';
}
function clearError(el) {
  el.classList.remove('invalid');
  el.removeAttribute('aria-invalid');
  const next = el.nextElementSibling;
  if (next && next.classList.contains('error-msg')) next.remove();
}
function showError(el, msg) {
  clearError(el);
  el.classList.add('invalid');
  el.setAttribute('aria-invalid', 'true');
  const small = document.createElement('small');
  small.className = 'error-msg';
  small.textContent = msg;
  el.insertAdjacentElement('afterend', small);
}
function showStatus(form, type, msg) {
  let s = $('.form-status', form);
  if (!s) {
    s = document.createElement('div');
    s.setAttribute('role', 'status');
    s.setAttribute('aria-live', 'polite');
    form.prepend(s);
  }
  s.className = 'form-status ' + type;
  s.textContent = msg;
}
function setupForm(id, onValid) {
  const form = document.getElementById(id);
  if (!form) return;
  const fields = $$('input:not([type=radio]):not([type=submit]), textarea, select', form);
  const check = f => { const m = validateField(f); m ? showError(f, m) : clearError(f); return m; };
  fields.forEach(f => {
    f.addEventListener('blur', () => check(f));
    ['input', 'change'].forEach(ev => f.addEventListener(ev, () => { if (f.classList.contains('invalid')) check(f); }));
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const old = $('.form-status', form);
    if (old) old.remove();
    let first = null;
    fields.forEach(f => { if (check(f) && !first) first = f; });
    if (first) { showStatus(form, 'error', 'Please fix the highlighted fields and try again.'); first.focus(); return; }
    const btn = $('button[type=submit]', form), label = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending...';
    try {
      const msg = await onValid(Object.fromEntries(new FormData(form)));
      showStatus(form, 'success', msg);
      form.reset();
      fields.forEach(clearError);
    } catch (err) {
      console.error('Form submission failed:', err);
      showStatus(form, 'error', 'Something went wrong. Please check your connection and try again.');
    } finally {
      btn.disabled = false; btn.textContent = label;
    }
  });
}

/* 7. Enquiry: category response + saved reference for tracking */
const RESPONSES = {
  academic:   { dept: 'the Academic Support office', time: '2-3 working days', cost: 'Free of charge' },
  facilities: { dept: 'Campus Facilities', time: '3-5 working days', cost: 'Free of charge' },
  finance:    { dept: 'the Finance office', time: '1-2 working days', cost: 'Free of charge (any fee adjustment is subject to approval)' },
  safety:     { dept: 'Campus Security', time: 'within 24 hours', cost: 'Free of charge' },
  conduct:    { dept: 'Campus Management', time: '3-5 working days', cost: 'Free of charge' },
  other:      { dept: 'the RCL team', time: '3-5 working days', cost: 'Free of charge' }
};
function saveEnquiry(item) {
  try {
    const list = JSON.parse(localStorage.getItem('ccEnquiries') || '[]');
    list.push(item);
    localStorage.setItem('ccEnquiries', JSON.stringify(list));
  } catch (e) { /* storage unavailable - tracking just won't find it */ }
}
setupForm('enquiryForm', async data => {
  const res = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  if (!res.ok) throw new Error('Server responded with ' + res.status);
  const ref = 'CC-' + Date.now().toString().slice(-7);
  const r = RESPONSES[data.category] || RESPONSES.other;
  saveEnquiry({ ref, subject: data.subject, category: data.category, date: new Date().toLocaleDateString('en-ZA'), status: 'Received' });
  return `Thank you, ${data.fullName}! Your enquiry (${ref}) has been received. Cost: ${r.cost}. Expected response: ${r.time} from ${r.dept} (office hours Mon-Fri 08:00-16:30). Keep your reference number to track it. This is a demo submission.`;
});
(() => {
  const f = $('#trackForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const ref = $('#trackRef').value.trim().toUpperCase(), out = $('#trackResult');
    let list = [];
    try { list = JSON.parse(localStorage.getItem('ccEnquiries') || '[]'); } catch (err) { /* ignore */ }
    const hit = list.find(x => x.ref === ref);
    out.textContent = hit
      ? `${hit.ref}: "${hit.subject}" (${hit.category}), submitted ${hit.date}. Status: ${hit.status}.`
      : 'No issue was found with that reference number on this device.';
    out.className = 'form-status ' + (hit ? 'success' : 'error');
    out.hidden = false;
  });
})();

/* 8. Contact: compile validated input into an email */
setupForm('contactForm', async data => {
  const subject = `[${data.messageType}] ${data.subject}`;
  const body = `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nMessage type: ${data.messageType}\n\n${data.message}`;
  window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `Thank you! Your email app should now open with your message to ${MAIL_TO}. Press Send there to complete it.`;
});

/* 9. Newsletter (footer on the home page) */
(() => {
  const f = $('#newsletterForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('input[type=email]', f), out = $('#newsletterMsg');
    const m = validateField(input);
    out.textContent = m || 'Thank you for subscribing! (demo only, nothing is stored)';
    if (!m) f.reset();
  });
})();
// =========================================================
    // 6. SOUTH AFRICAN DATE AND MIDNIGHT COUNTDOWN
    // =========================================================

    const dateDisplay =
        document.getElementById('current-date');

    const countdownDisplay =
        document.getElementById('midnight-countdown');

    if (dateDisplay && countdownDisplay) {

        const timeZone = 'Africa/Johannesburg';

        const dateFormatter = new Intl.DateTimeFormat('en-ZA', {
            timeZone: timeZone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const clockFormatter = new Intl.DateTimeFormat('en-GB', {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h23'
        });

        const updateDailyInfo = () => {

            const now = new Date();

            // Show the current date in South Africa.
            dateDisplay.textContent = dateFormatter.format(now);

            // Extract South African clock values.
            const parts = Object.fromEntries(
                clockFormatter.formatToParts(now).map(
                    (part) => [part.type, part.value]
                )
            );

            const hour = Number(parts.hour);
            const minute = Number(parts.minute);
            const second = Number(parts.second);

            // Calculate seconds remaining until midnight.
            const elapsed =
                hour * 3600 + minute * 60 + second;

            const remaining = Math.max(
                0,
                86399 - elapsed
            );

            const hours = String(
                Math.floor(remaining / 3600)
            ).padStart(2, '0');

            const minutes = String(
                Math.floor((remaining % 3600) / 60)
            ).padStart(2, '0');

            const seconds = String(
                remaining % 60
            ).padStart(2, '0');

            countdownDisplay.textContent =
                `${hours}:${minutes}:${seconds}`;
        };

        // Update immediately and then every second.
        updateDailyInfo();

        window.setInterval(updateDailyInfo, 1000);
    }