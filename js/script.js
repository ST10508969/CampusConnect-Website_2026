
/* =====================================================
   CampusConnect Foundation - Javascript

   1. Mobile menu toggle
   2. Client-side form validation
   3. Error messages under each field
   4. AJAX form submission using fetch()
   ===================================================== */


/* ---------- 1. Mobile Menu ---------- */

const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('open');

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}


/* ---------- 2. API URL ---------- */

// This is a testing API, not a real database.
// Submitted information is not permanently saved.
const API_URL = 'https://jsonplaceholder.typicode.com/posts';


/* ---------- 3. Form Validation ---------- */

function validateField(input) {
    const value = input.value.trim();
    const name = input.name;

    // Check required fields.
    if (input.required && value === '') {
        return input.tagName === 'SELECT'
            ? 'Please select an option.'
            : 'This field is required.';
    }

    // Optional fields can be left empty.
    if (value === '') {
        return '';
    }

    // Validate full name.
    if (name === 'fullName' && value.length < 2) {
        return 'Name must be at least 2 characters.';
    }

    // Validate email address.
    if (input.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!emailPattern.test(value)) {
            return 'Please enter a valid email address.';
        }
    }

    // Validate student number: 6 to 10 digits.
    if (name === 'studentNo' && !/^\d{6,10}$/.test(value)) {
        return 'Student number must be 6 to 10 digits.';
    }

    // Validate South African phone number.
    if (name === 'phone') {
        const phone = value.replace(/\s+/g, '');

        if (!/^(?:\+27|0)\d{9}$/.test(phone)) {
            return 'Enter a valid SA number, e.g. 0821234567 or +27821234567.';
        }
    }

    // Validate subject.
    if (name === 'subject' && value.length < 5) {
        return 'Subject must be at least 5 characters.';
    }

    // Validate issue description or contact message.
    if (
        (name === 'description' || name === 'message') &&
        value.length < 10
    ) {
        return 'Please write at least 10 characters.';
    }

    return '';
}


/* ---------- 4. Error Handling ---------- */

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

    const nextElement = input.nextElementSibling;

    if (nextElement && nextElement.classList.contains('error-msg')) {
        nextElement.remove();
    }
}


function showStatus(form, type, message) {
    let status = form.querySelector('.form-status');

    if (!status) {
        status = document.createElement('div');
        status.className = 'form-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');

        form.prepend(status);
    }

    status.className = 'form-status ' + type;
    status.textContent = message;
}


/* ---------- 5. AJAX Form Submission ---------- */

function setupForm(formId, successText) {
    const form = document.getElementById(formId);

    // Exit if this page does not contain the form.
    if (!form) {
        return;
    }

    const fields = form.querySelectorAll(
        'input:not([type="submit"]):not([type="button"]), textarea, select'
    );

    // Validate fields when the user leaves them.
    fields.forEach((field) => {
        field.addEventListener('blur', () => {
            const message = validateField(field);

            if (message) {
                showError(field, message);
            } else {
                clearError(field);
            }
        });

        // Clear errors when the user corrects a field.
        field.addEventListener('input', () => {
            if (field.classList.contains('invalid')) {
                const message = validateField(field);

                if (!message) {
                    clearError(field);
                }
            }
        });

        // Also support dropdown changes.
        field.addEventListener('change', () => {
            if (field.classList.contains('invalid')) {
                const message = validateField(field);

                if (!message) {
                    clearError(field);
                }
            }
        });
    });


    // Handle form submission.
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Remove the previous status message.
        const oldStatus = form.querySelector('.form-status');

        if (oldStatus) {
            oldStatus.remove();
        }

        // Validate every field.
        let firstInvalid = null;

        fields.forEach((field) => {
            const message = validateField(field);

            if (message) {
                showError(field, message);

                if (!firstInvalid) {
                    firstInvalid = field;
                }
            } else {
                clearError(field);
            }
        });

        // Stop submission if a field is invalid.
        if (firstInvalid) {
            showStatus(
                form,
                'error',
                'Please fix the highlighted fields and try again.'
            );

            firstInvalid.focus();
            return;
        }

        // Find and disable the submit button.
        const button = form.querySelector('button[type="submit"]');

        if (!button) {
            showStatus(
                form,
                'error',
                'The submit button could not be found.'
            );
            return;
        }

        const originalText = button.textContent;

        button.disabled = true;
        button.textContent = 'Sending...';

        try {
            // Send form information to the testing API.
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    Object.fromEntries(new FormData(form))
                )
            });

            if (!response.ok) {
                throw new Error(
                    'Server responded with ' + response.status
                );
            }

            const result = await response.json();

            // Display a success message.
            showStatus(
                form,
                'success',
                successText +
                ' Demo reference number: CC-' + result.id +
                '. This is a test submission only.'
            );

            form.reset();

            // Clear validation styles after resetting.
            fields.forEach((field) => clearError(field));

        } catch (error) {
            console.error('Form submission failed:', error);

            showStatus(
                form,
                'error',
                'Unable to send your form. Please check your connection and try again.'
            );

        } finally {
            button.disabled = false;
            button.textContent = originalText;
        }
    });
}



/* ---------- 6. Activate Forms ---------- */

// Enquiry page.
setupForm(
    'enquiryForm',
    'Thank you! Your enquiry has been submitted.'
);

// Contact page, if it contains a form with this ID.
setupForm(
    'contactForm',
    'Thank you! Your message has been sent.'
);
