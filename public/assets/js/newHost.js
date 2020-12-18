$(document).ready(function () {
    console.log("My new host form will go here.");
    console.log(
      "I can write all my actual code in a javascript file. Not inside a handlebars file. "
    );
  
    $("#new-host").on("submit", function (e) {
      e.preventDefault();
      const email = $("#email").val();
      const password = $("#password").val();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const propertyType = $("#propertyType").val();
      console.log(email);
      console.log(password);
      console.log(firstName);
      console.log(lastName);
      console.log(propertyType); 
       // AJAX calling routes
      $.ajax({
        method: "POST",
        url: "/api/hosts",
        data: {
          email,
          password,
          firstName,
          lastName,
          propertyType,
        },
      }).then((response) => {
        window.location.replace("/hosts");
      });
    });
  });
  