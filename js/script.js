/* =====================================================
   CampusConnect Foundation - script.js
   1. Mobile menu toggle
   2. Client-side form validation
   3. Error handling (messages shown under each field)
   4. AJAX form submission (fetch)
   ===================================================== */

   /* ---------- 1. MENU ---------- */
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