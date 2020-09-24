$(document).ready(function() {

    $(".devour").on("click", function(event) {
        const id = $(this).data("id");
        const isDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(function() {
                console.log("changed devoured");
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            name: $("#bur").val().trim()
        };

        console.log(newBurger)
        

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
                console.log("created burger")
                location.reload();
            }
        )
    });
})