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
            laptop_condition: $("#condition").val().trim(),
            processor: $("processor").val().trim(),
            graphics: $("#graphics").val().trim(),


        }

        console.log(newLaptop);

    });
})