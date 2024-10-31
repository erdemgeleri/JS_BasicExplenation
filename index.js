document.getElementById("hesapla").addEventListener("click", function () {
  let first_number = document.getElementById("text_1").value;
  let second_number = document.getElementById("text_2").value;
  let section = document.getElementById("options").value;
  let result;
  if (first_number != "" && second_number != "" && section != "İşlem Seçiniz") {
    if (section == "+") {
      result = parseInt(first_number) + parseInt(second_number);
    } else if (section == "-") {
      result = parseInt(first_number) - parseInt(second_number);
    } else if (section == "x") {
      result = parseInt(first_number) * parseInt(second_number);
    } else if (section == "/") {
      result = parseInt(first_number) / parseInt(second_number);
    }
    document.getElementById("answer").innerHTML = result;
  } else {
    if (first_number == "" || second_number == "") {
      alert("İnput alanları boş bırakılamaz");
    } else if (section == "İşlem Seçiniz") {
      alert("İşlem seçmek zorunludur");
    }
  }
});

document.getElementById("showAlert").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("alert").style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("alert").style.display = "none";
});
