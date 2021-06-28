function myfun() {
    var m = parseFloat(document.getElementById('weight').value);
    var h = parseFloat(document.getElementById('height').value);
    var bmi = m / (h * h);
    bmi = Math.round(bmi);
    document.getElementById('bmi').innerHTML =bmi;
    console.log(Math.round(bmi));
    message(bmi);
}
function message(bmi) {
  
    if (bmi < 18) {
        document.getElementById('msg1').style.display="block";
        document.getElementById('msg2').style.display="none";
        document.getElementById('msg3').style.display="none";
    }
    else if ((bmi >= 18)&&(bmi<25)) {
       document.getElementById('msg1').style.display="none";
        document.getElementById('msg2').style.display="block";
        document.getElementById('msg3').style.display="none";
    }
    else if (bmi >=25) {
        document.getElementById('msg1').style.display="none";
        document.getElementById('msg2').style.display="none";
        document.getElementById('msg3').style.display="block";
    }

}