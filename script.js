grade_points = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    P: 4,
    F: 0,
    Ab: 0,
    I: 0,
  };
  
  var count = 11;
  
  function addmore() {
    count = count + 1;
    var str =
      '<tr><td><label for="cr' +
      count +
      ' ">' +
      count +
      '.</label></td><td><input type="number" class="cred form-control" id="cr' +
      count +
      '" min=1></td><td> <select class="opt form-control"><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>C</option><option>P</option><option>F</option><option>Ab</option><option>I</option> </select></td></tr>';
    $("form table").append(str);
  }
  
  // $("#reset").on("click", resetall());
  
  function resetall() {
    $("#go").removeClass("hidden");
    $("#reset").addClass("hidden");
    $("#result").addClass("hidden");
    $("#more").removeClass("hidden");
    $("table").removeClass("hidden");
  }
  
  function calculate(event) {
    var credit_list = $(".cred");
    var grade_list = $(".opt");
    var points = 0;
    var sum_c = 0;
    var credits = 0;
    for (var i = 0; i < credit_list.length; i++) {
      if (credit_list[i] === "") {
        credits = 0;
      } else {
        credits = Number(credit_list[i].value);
      }
      sum_c += credits;
      var grade = grade_points[grade_list[i].value];
      points += credits * grade;
    }
    var gpa = points / sum_c;
    var percent = (gpa * 10).toFixed(0);
  
    $("#result").removeClass("hidden");
    $("#more").addClass("hidden");
    $("#gpa").text(gpa.toFixed(2));
    $(".progress-bar").css({
      width: percent + "%",
    });
    $("#reset").removeClass("hidden");
    $("#go").addClass("hidden");
    $("table").addClass("hidden");
    window.scrollTo(0, 0);
    // event.stopPropagation();
  }
  