// $(document).ready(function () {
//   console.log("ready!");
// });

$(function () {
  $("#isi").html("<h1>Jquery</h1>");

  $("#klik").click(function (e) {
    e.preventDefault();
    alert("belajar jquery");
  });

  $("#isi").mouseleave(function () {
    alert("mouse leave");
    console.log(mouse);
  });
});
