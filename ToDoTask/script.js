btn = $("#btnAdd");
con = $(".tasksBox");
taskinput = $("#taskInput").val();
btn.click(function () {
    if ($("#taskInput").val().length!= 0) {
    mydiv = $("<div></div>");
    mytext = $("<label/>");
    mytext.text($("#taskInput").val());
  
    mytext.addClass("task");
    mydiv.append(mytext);
    mydone = $(" <button> Done </button>");
    mydone.addClass("done");
    mydiv.append(mydone);

    mydone.click(function () {
      $(this).parent().toggleClass("TaskDone");
    });

    mydelete = $(" <button> Delete </button>");
    mydelete.addClass("delete");
    mydiv.append(mydelete);
    con.append(mydiv);
    mydelete.click(function () {
      $(this).parent().remove();
    });
    $("#taskInput").val("");
  }else{
    alert("please Enter Data");
  }
});
