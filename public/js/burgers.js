$(document).ready(function() {
    console.log("javascript")

    $(".devour").on("click", function(event) {
        const id = $(this).data("id");
        console.log("dev btn clicked")
        const isDevoured = {
            devoured: 1
        };

        console.log(id)

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

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("created burger")
            location.reload();
        })
    })

})