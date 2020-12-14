$(document).ready(function () {
  console.log("My new game form will go here.");

  $("#new-game").on("submit", function (e) {
    e.preventDefault();
    console.log("You submitted the new game form.");
    const name = $("#name").val();
    const category = $("#category").val();
    const maxNumPlayers = $("#maxNumPlayers").val();
    const minNumPlayers = $("#minNumPlayers").val();

    $.ajax({
      method: "POST",
      url: "/api/games",
      data: {
        name,
        category,
        maxNumPlayers,
        minNumPlayers,
      },
    }).then((response) => {
      window.location.replace("/games");
    });
  });
});
