$(document).on("click", ".leave-note", function () {
    console.log("i have beeen cliked")
    var id = $(this).data("id");
    var noteWritten = $(".form-control").val()
    console.log("id    " + id + "     data  " + noteWritten);
    $.ajax({
        method: "post",
        url: "/articles/" + id,
        data: {
            note: noteWritten
        }

    }).then(function (data) {
        console.log(data);
        $(".notes").append("<p>" + noteWritten + "</p>");
    })
})

$(document).on("click", ".delete", function () {
    var id = $(this).data("note");
    console.log(" klickkkered" + "id   " + id);
    $.ajax({
        method: "get",
        url: "/notes/" + id
    }).then(function (data) {
        console.log(data);
    })
})

$(document).on('click', '.addProp', function (event) {
    event.preventDefault();
    $("#updateProp").hide();
    $("#deleteProp").hide();
    $("#addProp").show();
    $("#propName").val("");
    $("#streetAddress").val("");
    $("#zipCode").val("");
    $("#city").val("")
    $("#state").val("")
    $("#addEditDeleteProp").modal();
});

