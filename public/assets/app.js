$(document).on("click", ".leave-note", function () {
    console.log("i have beeen cliked")
    var id = $(this).data("id");
    var noteWritten = $(this).parent().children("textarea").val()
    console.log("id    " + id + "     data  " + noteWritten);
    $.ajax({
        method: "post",
        url: "/articles/" + id,
        data: {
            note: noteWritten
        }

    }).then(function (data) {
        console.log(data);
        location.reload();
       
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
        location.reload();
    })
})



