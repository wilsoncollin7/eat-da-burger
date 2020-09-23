$(document).ready(() => {
    $(".devour").on("click", (event) => {
        const id = $(this).data("id");
        console.log("dev btn clicked")
        const isDevoured = {
            devoured: 1
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: isDevoured
        }).then(() => {
                console.log("changed devoured to", devoured);
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", (event) => {
        console.log("made it here")
        event.preventDefault();

        console.log("made it here")

        const newBurger = {
            name: $("#bur").val().trim()
        };

        console.log(newBurger)

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created burger")
            location.reload();
        })
    })

})