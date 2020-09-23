$(() => {
    $(".devour").on("click", (event) => {
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");
        console.log("dev btn clicked")
        const isDevoured = {
            devoured: devoured
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

    $(".create-form").on("submit", event => {
        event.preventDefault();

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