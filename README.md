# Devnath Aluminium

Business website for Devnath Aluminium — an aluminium fabrication company offering windows, doors, partitions, railings, structural glazing and custom aluminium work.

## Structure

- `index.html` — main single-page site (Home, About, Services, Gallery, Why Us, Contact)
- `css/style.css` — styles
- `js/script.js` — mobile nav toggle + contact form handling

## Running locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize

Update the placeholder content in `index.html` with real business details:
- Phone number, email, address (Contact section and footer)
- WhatsApp number in the floating chat button link
- Real project photos in the Gallery section
- Contact form currently shows a confirmation message only — connect it to an email/API service (e.g. Formspree, EmailJS) to receive submissions.
