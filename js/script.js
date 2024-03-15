// $(document).ready(function () {
//   $('input[name="trip"]').click(function () {
//       $(this).tab('show');
//       $(this).removeClass('active');
//   });
// });




document.getElementById('switch').addEventListener('click', function() {
  var tbox1Value = document.getElementById('tbox1').value;
  var tbox2Value = document.getElementById('tbox2').value;
  
  document.getElementById('tbox1').value = tbox2Value;
  document.getElementById('tbox2').value = tbox1Value;
});

document.getElementById('switch2').addEventListener('click', function() {
  var tbox3Value = document.getElementById('tbox3').value;
  var tbox4Value = document.getElementById('tbox4').value;
  
  document.getElementById('tbox3').value = tbox4Value;
  document.getElementById('tbox4').value = tbox3Value;
});



$(document).ready(function() {
  // Functionality for tbox1
  var originalSrcTbox1 = $("#cross").attr("src"); // Store the original source for tbox1
  $("#tbox1").on("keyup", function() {
    $("#cross").attr("src", "images/x.webp");
  });
  $("#cross").on("click", function() {
    $("#tbox1").val(""); // Clear the input field
    $("#cross").attr("src", originalSrcTbox1); // Revert back to the original source
  });


  // Functionality for tbox2
  var originalSrcTbox2 = $("#cross2").attr("src"); // Store the original source for tbox2
  $("#tbox2").on("keyup", function() {
    $("#cross2").attr("src", "images/x.webp");
  });
  $("#cross2").on("click", function() {
    $("#tbox2").val(""); // Clear the input field
    $("#cross2").attr("src", originalSrcTbox2); // Revert back to the original source
  });


  // Drop-menu functionality for both tbox1 and tbox2
  $("#tbox1 ").on("keyup", function() {
    console.log('test');
    $(".drop-menu").toggle();
  });
  $(" #tbox2").on("keyup", function() {
    console.log('test');
    $(".drop-menu2").toggle();
  });
  

  $(document).on("click", function(event) {
    // Check if the click event occurred outside of the input fields
    if (!$(event.target).closest('#tbox1').length) {
      $(".drop-menu").hide();
    }
  });
  $(document).on("click", function(event) {
    // Check if the click event occurred outside of the input fields
    if (!$(event.target).closest(' #tbox2').length) {
      $(".drop-menu2").hide();
    }
  });
});




// for phone 


$(document).ready(function() {
  // Functionality for tbox3
  var originalSrcTbox3 = $("#cross").attr("src"); // Store the original source for tbox3
  $("#tbox3").on("keyup", function() {
    $("#cross").attr("src", "images/x.webp");
  });
  $("#cross").on("click", function() {
    $("#tbox3").val(""); // Clear the input field
    $("#cross").attr("src", originalSrcTbox3); // Revert back to the original source
  });


  // Functionality for tbox4
  var originalSrcTbox4 = $("#cross2").attr("src"); // Store the original source for tbox4
  $("#tbox4").on("keyup", function() {
    $("#cross2").attr("src", "images/x.webp");
  });
  $("#cross2").on("click", function() {
    $("#tbox4").val(""); // Clear the input field
    $("#cross2").attr("src", originalSrcTbox4); // Revert back to the original source
  });


  // Drop-menu functionality for both tbox3 and tbox4
  $("#tbox3").on("keyup", function() {
    $(".drop-menu3").toggle();
  });
  $("#tbox4").on("keyup", function() {
    $(".drop-menu4").toggle();
  });

  $(document).on("click", function(event) {
    // Check if the click event occurred outside of the input fields
    if (!$(event.target).closest('#tbox3').length) {
      $(".drop-menu3").hide();
    }
  });
  $(document).on("click", function(event) {
    // Check if the click event occurred outside of the input fields
    if (!$(event.target).closest('#tbox4').length) {
      $(".drop-menu4").hide();
    }
  });
});
