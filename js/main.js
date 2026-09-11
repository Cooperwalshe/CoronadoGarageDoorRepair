/* Coronado Garage Door Repair — form submission */

(function () {
  "use strict";

  var form = document.getElementById("quoteForm");
  if (!form) return;

  var status = document.getElementById("formStatus");
  var button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    // If the Formspree endpoint hasn't been set yet, don't pretend it worked.
    if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
      event.preventDefault();
      show("error", "This form isn't connected yet. Please try again shortly.");
      return;
    }

    event.preventDefault();
    button.disabled = true;
    button.textContent = "Sending\u2026";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (response) {
        if (response.ok) {
          form.reset();
          show("ok", "Got it. We'll be in touch shortly.");
        } else {
          show("error", "That didn't go through. Please try again in a moment.");
        }
      })
      .catch(function () {
        show("error", "That didn't go through. Please try again in a moment.");
      })
      .then(function () {
        button.disabled = false;
        button.textContent = "Send request";
      });
  });

  function show(state, message) {
    if (!status) return;
    status.setAttribute("data-state", state);
    status.textContent = message;
  }
})();
