$(function () {
    $("#newLaptop").on("submit", function (event) {

        event.preventDefault();

        var newLaptop = {
            name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            phone: $("#number").val().trim(),
            city: $("#city").val().trim(),
            brand: $("#brand").val().trim(),
            model: $("#model").val().trim(),
            operating_system: $("#os").val().trim(),
            laptop_condition: $("#condition").val(),
            processor: $("#processor").val().trim(),
            graphics: $("#graphics").val().trim(),
            ram: $("#ram").val().trim(),
            screen_dimension: $("#screen").val().trim(),
            hd_storage: $("#storage").val().trim(),
            release_year: $("#year").val().trim(),
            summary: $("#summary").val().trim(),
            price: $("#price").val().trim()
        }

        console.log(newLaptop);

    });
})