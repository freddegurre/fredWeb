$(document).on("click", ".leave-note", function (event) {
    event.preventDefault();
    console.log("i have beeen cliked")
    var id = $(this).data("id");
    var noteWritten = $(this).parent("form").children(".mdl-textfield").children("textarea").val()
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
    alert("Comment deleted, please refresh page :)")
    $.ajax({
        method: "get",
        url: "/notes/" + id
    }).then(function (data) {
        location.reload();
        console.log(data);
        
    })
});

$(document).on("click", "#scrape", function(){
    console.log("this has been klicked")
    $.ajax({
        method:"get",
        url: "/scrape"
    }).then(function(data){
        console.log(data); 
        location.reload();
    })
})



