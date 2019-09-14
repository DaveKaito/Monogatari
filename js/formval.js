//Validation Script
//This prevents the default HTML 5 message bubble
document.querySelector("form").addEventListener(
  "invalid",
  function(event) {
    event.preventDefault();
  },
  true
);

//Validation using the validate jquery plugin

$(document).ready(function() {
  $(".formval").validate({
    //Rules for all the input fields
    rules: {
      gender: {
        required: true
      },
      firstname: {
        required: true,
        rangelength: [5, 30],
        pattern: /^[a-z ,.'-]+$/i
      },
      email: {
        required: true,
        minlength: 5,
        pattern: /^(\w[-._+\w]*\w@\w[-._\w]*\w\.\w{2,3})$/
      },
      job: {
        required: true,
        pattern: /^[a-z ,.'-]+$/i
      },

      city: {
        required: true,
        pattern: /^[a-z ,.'-]+$/i
      },
      state: {
        required: true,
        pattern: /^[a-z ,.'-]+$/i
      },
      zip: {
        required: true,
        pattern: /^[0-9]*$/
      }
    },

    //Custom messagesfor all the input fields
    messages: {
      firstname: "No numbers / min. 5 characters",
      email: "The provided email is invalid",
      job: "No numbers",
      city: "No numbers",
      state: "No Numbers",
      zip: "Only numbers"
    },

    // Custom borders defined in CSS
    errorClass: "invalid",
    validClass: "valid"
  });
  // To Disable Submit Button By Default
  $("input[type=submit]").attr("disabled", "disabled");
  // When user filled out form
  $("form").keyup(function() {
    $("input[type=submit]").removeAttr("disabled");
  });
});
