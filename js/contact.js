/* ===================================
   CONTACT FORM + CLIPBOARD
   =================================== */

export function initContact() {
  initForm();
  initCopyEmail();
}

function initForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Honeypot check
    if (form.querySelector('[name="_gotcha"]')?.value) return;

    const btn = form.querySelector('.contact-form__submit');
    btn.textContent = 'Sending…';
    btn.disabled    = true;

    try {
      const data = new FormData(form);
      const res  = await fetch(form.action, {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        showStatus('success', '✓ Message sent! I\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      showStatus('error', '✕ Something went wrong. Please email me directly.');
    } finally {
      btn.textContent = 'Send Message';
      btn.disabled    = false;
    }
  });

  function showStatus(type, message) {
    if (!status) return;
    status.textContent = message;
    status.className   = `form-status ${type}`;
    setTimeout(() => { status.className = 'form-status'; }, 6000);
  }
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email');
  if (!copyBtn) return;

  const copyHint = copyBtn.querySelector('.contact__link-copy');
  const email    = copyBtn.dataset.email;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (copyHint) {
        copyHint.textContent = '✓ Copied!';
        setTimeout(() => { copyHint.textContent = 'Copy ✉'; }, 2500);
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${email}`;
    }
  });
}
