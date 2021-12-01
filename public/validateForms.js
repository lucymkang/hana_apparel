(function () {
  "use strict";

  bsCustomFileInput.init();

  //fetch all forms that need validation
  const forms = document.querySelectorAll(".needs-validation");

  //loop over and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
