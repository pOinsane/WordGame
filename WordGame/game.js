//SHUFFLE FUNCTION

const shuffleButton = $("#shuffle");
let letters1 = ["S", "E", "R", "V", "D"];
let letters2 = [];

shuffleButton.click(function(event) {
  if(answer == "")
  {
  event.preventDefault();
  shuffleLetters();
  }
  event.preventDefault();
});

function shuffleLetters() {
  if (letters1.length === 0 || letters2.length === 0) {
    letters1 = ["S", "E", "R", "V", "D"];
    letters2 = [];
  }
  $(".letters").each(function(index) {
    let randomIndex = Math.floor(Math.random() * letters1.length);
    $(this).text(letters1[randomIndex]);
    letters2.push(letters1[randomIndex]);
    letters1.splice(randomIndex, 1);
  });
}

//-----------------------------------------------------------------------------------//


let answers = ["SERVED", "SERVE", "EVER", "SEVERE", "SEE"];
let answer = "";

//INPUTANSWER FUNCTION

$(".letters").click(function(event) {
  let letter = $(this).text();
  answer += letter;
  $(inputanswer).text(answer);
});


// RIGHT CLICK FUNCTION 

$(document).contextmenu(function(event) {
  event.preventDefault(); 
  let foundboolean = false;
  for (let i = 0; i < answers.length; i++) {
    if (answer === answers[i]) {
      if (!$(`.${answers[i].toLowerCase()}`).hasClass(`found-${answers[i].toLowerCase()}`)) {
        $(`.${answers[i].toLowerCase()}`).addClass(`found-${answers[i].toLowerCase()}`);
        $(`.${answers[i].toLowerCase()}`).animate({
          "background-color": "red",
          "font-size": "36px"
          }, 1000);
        $(`.${answers[i].toLowerCase()}`).css({"background-color": "red","color": "white","font-size": "36px" });
        foundboolean = true;
      } else {
        $(inputanswer).animate({
          "margin-left": "-=5px",
        }, 50).animate({
          "margin-left": "+=10px",
        }, 50).animate({
          "margin-left": "-=5px",
        }, 50);
      }
      answer = "";
      $(inputanswer).text(answer);
    }
  }

  if(foundboolean == false) {
    $(inputanswer).animate({
      "margin-left": "-=5px",
    }, 50).animate({
      "margin-left": "+=10px",
    }, 50).animate({
      "margin-left": "-=5px",
    }, 50);
    answer = "";
    $(inputanswer).text(answer);
  }
});


// BULB CLICK FUNCTION
$("#bulb img").click(function() {
    if ($("td").css("font-size") === "0px") {
      $("td").css("font-size", "36px");
    } else {
      $("td:not( [class *= 'found'] )").css("font-size", "0px");
    }
  });

/* THE CODE DOWN BELOW IS NOT WORKING HOCAM JUST TRIED TO ADD A CONGRATULATIONS WINDOW BUT FAILED :(
const totalAnswers = $('td').length;
const foundAnswers = $('td').filter(':contains("found")').length;

if (foundAnswers === totalAnswers) {
  window.alert("Congratulations! You've finished the game!");
}
*/