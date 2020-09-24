$(document).ready(function() {
    // =============================================================
    // PUT click event for clicking the eat button
    // =============================================================
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
    // =============================================================
    // POST event for submitting the burger form
    // =============================================================
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const newBurger = {
            name: $("#bur").val().trim()
        };
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