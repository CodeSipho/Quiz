let score = 0;
function selectAnswer() {

    if (document.getElementById("1c").checked) {
        score++;
    }

    if (document.getElementById("2c").checked) {
        score++;
    }

    if (document.getElementById("3c").checked) {
        score++;
    }

    if (document.getElementById("4c").checked) {
        score++;
    }

    if (document.getElementById("5c").checked) {
        score++;
    }

    if (document.getElementById("6c").checked) {
        score++;
    }

    if (document.getElementById("7c").checked) {
        score++;
    }

    if (score< 3.5 && score!=0) {
      alert("You scored " + score + " out of 7. This is " + Math.round(score/7*100) + "%. You have failed.")
    }else if (score > 3.5){
      alert("You scored " + score + " out of 7. This is " + Math.round(score/7*100) + "%. You have passed.")
    }else if (score == 0) {
        alert("You scored " + score + " out of 7. You need Jesus in your life. ")
    }
}
