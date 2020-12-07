$(document).ready(function () {
  console.log("My new player form will go here.");
  console.log(
    "I can write all my actual code in a javascript file. Not inside a handlebars file. "
  );

  $("#new-player").on("submit", function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);

    $.ajax({
      method: "POST",
      url: "/api/players",
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    }).then((response) => {
      window.location.replace("/players");
    });
  });
});
