/* =====================================================
   CampusConnect Foundation - script.js
   1. Mobile menu toggle
   2. Client-side form validation
   3. Error handling (messages shown under each field)
   4. AJAX form submission (fetch)
   ===================================================== */

   /* ---------- 1. Menu ---------- */
   const meunToggle = document.getElementById('menu-toggle');
   const siteNav = document.getElementById('site-nav');

   if (menuToggle && siteNav){
    menuToggle.addEventListener('click', () =>{
        const isOpen = siteNav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

}
/* ---------- 2. Form Validation ---------- */

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
 
function validateField(input) {
    const value = input.value.trim();
    const name = input.name;
 
    // Required check (works for input, textarea and select)
    if (input.required && value === '') {
        return input.tagName === 'SELECT'
            ? 'Please select an option.'
            : 'This field is required.';
    }
  // Nothing more to check on an empty optional field
    if (value === '') return '';
 
    if (name === 'fullName' && value.length < 2) {
        return 'Name must be at least 2 characters.';
    }
 
    if (input.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailPattern.test(value)) return 'Please enter a valid email address.';
    }
    if (name === 'studentNo' && !/^\d{6,10}$/.test(value)) {
        return 'Student number must be 6 to 10 digits.';
    }
 
    if (name === 'phone') {
        const phone = value.replace(/\s+/g, '');
        if (!/^(\+27|0)\d{9}$/.test(phone)) {
            return 'Enter a valid SA number, e.g. 0821234567 or +27821234567.';
        }
    }
 
    if (name === 'subject' && value.length < 5) {
        return 'Subject must be at least 5 characters.';
    }
 
    if ((name === 'description' || name === 'message') && value.length < 10) {
        return 'Please write at least 10 characters.';
    }
 
    return '';
}

/* ---------- 3. Error Handling ---------- */
 
function showError(input, message) {
    clearError(input);
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
 
    const error = document.createElement('small');
    error.className = 'error-msg';
    error.textContent = message;
    input.insertAdjacentElement('afterend', error);
}
function clearError(input) {
    input.classList.remove('invalid');
    input.removeAttribute('aria-invalid');
    const next = input.nextElementSibling;
    if (next && next.classList.contains('error-msg')) next.remove();
}
 
function showStatus(form, type, message) {
    let status = form.querySelector('.form-status');
    if (!status) {
        status = document.createElement('div');
        status.className = 'form-status';
        status.setAttribute('role', 'alert');
        form.prepend(status);
    }
    status.className = 'form-status ' + type; // "success" or "error"
    status.textContent = message;
}

 