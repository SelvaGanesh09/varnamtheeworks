// =========================================================
// WHATSAPP SETTINGS - change these two lines to update the site
// =========================================================
// Number: country code + number, digits only (no + or spaces)
const WHATSAPP_NUMBER = "919876543210";

// Default message used when a button has no message of its own
const DEFAULT_MESSAGE =
  "Hello Varnam Thee Works, I would like to enquire about your welding services.";

// =========================================================
// Set the link of every WhatsApp button
// =========================================================
// Buttons with a data-message attribute (e.g. each service) use that text,
// after the greeting. All other buttons use the default message.
const GREETING = "Hello Varnam Thee Works, ";

document.querySelectorAll(".whatsapp-link").forEach(function (button) {
  const customMessage = button.dataset.message;
  const message = customMessage ? GREETING + customMessage : DEFAULT_MESSAGE;
  button.href =
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
});

// =========================================================
// Hide images that are missing (logo and gallery photos)
// so visitors never see a broken-image icon
// =========================================================
document.querySelectorAll("img").forEach(function (image) {
  image.addEventListener("error", function () {
    image.classList.add("image-missing");
  });
});

// =========================================================
// Footer: show the current year automatically
// =========================================================
document.getElementById("current-year").textContent = new Date().getFullYear();
