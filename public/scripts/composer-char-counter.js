// let textArea = document.querySelector("#tweet-text");
// let characterCounter = document.querySelector(".counter");
const maxNumberOfChar = 140;

$(document).ready(() => {
  $(function() {
    let numberOfText = $('textArea').text().value.length;
    let counter = maxNumberOfChar - numberOfText;
    $('.counter').text() = counter;
    $('textArea').on('change', characterCounter);
    if (counter < 0) {
      $('.counter').style.color = 'red';
    }
  });
})


  



