$(function () {
  $(".add_burger").on("submit", (event) => {
    let newBurger = $("#add_burger").val();
    console.log(newBurger);

    var burgerObj = {
      burger_name: newBurger,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerObj,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devour").click(function (event) {
    let id = $(this).data("id");

    let obj = {
      id: id,
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: obj,
    }).then(function () {
      console.log("burger devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
