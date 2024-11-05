function calculateCalories() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var activity = parseFloat(document.getElementById("activity").value);

  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
    document.getElementById("result").innerHTML = "Vui lòng nhập đầy đủ thông tin.";
    return;
  }

  var bmr;
  if (gender === "male") {
    bmr = 66 + (13.7 * weight) + (5 * height) - (6.76 * age);
  } else {
    bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }

  var tdee = bmr * activity;

  document.getElementById("result").innerHTML = "Lượng calo cần thiết mỗi ngày: " + Math.round(tdee) + " calo";
}