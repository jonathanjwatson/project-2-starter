$(document).ready(function () {
    $("#edit-renter").on("submit", function (e) {
      e.preventDefault();
      const id = $(this).data("id");
      const email = $("#email").val();
      const password = $("#password").val();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const propertyType = $("#propertyType").val();
      const description = $("#description").val();

      $.ajax({
        method: "PUT",
        url: `/api/hosts/${id}`,
        data: {
          email,
          password,
          firstName,
          lastName,
          propertyType,
          description,
        },
      }).then((response) => {
        window.location.replace("/hosts");
      });
    });
  });
  