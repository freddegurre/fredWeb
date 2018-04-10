$(document).on("click", ".leave-note", function(){
console.log("i have beeen cliked")
var id = $(this).data("id"); 
var data = $(".note").val()
console.log("id    " + id + "     data  " + data); 
$.ajax({
    method: "post", 
    url: "/articles/"+ id,
    data: {
       note: $(".note").val()
    }

}).then(function(data){
    console.log(data); 
})
})