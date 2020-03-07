$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed sleep to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var name = $("[name=devoured]:checked")
      .val()
      .trim();

      if (name !== "") {
        var newBurger = {
          name: name
        };

        // var newBurger = {
        //   name: $("#ca").trim(),
        //   devour: $("[name=devoured]:checked").trim()
        // };

        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        });
      } else {
        $("[name=devoured]:checked").val("");
      }
    });
  });

  $(".delete-sleep").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
