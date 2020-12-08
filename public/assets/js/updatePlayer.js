$(document).ready(function () {
  $("#edit-player").on("submit", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const email = $("#email").val();
    const password = $("#password").val();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();

    $.ajax({
      method: "PUT",
      url: `/api/players/${id}`,
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
