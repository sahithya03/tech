function validate(){

console.log("ppp");
/*$.post("192.168.0.130:8080");*/
    $.ajax({
      type: "POST",
      url: "192.168.0.130:8080/hi",
      data: "HELLO",
      cache: false,
      success: function(data){
         alert("success")
      }
      });
}
