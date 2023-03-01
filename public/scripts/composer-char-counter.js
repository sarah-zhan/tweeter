const maxNumberOfChar = 140;

$(function() {
  $('textarea').on('input', () => {
    const $textArea = $("#tweet-text").val();
    const $numberOfText = $textArea.length;
    const $counter = maxNumberOfChar - $numberOfText;
    $('.counter').text($counter);
    if ($counter < 0) {
      $('.counter').addClass('red');
    } else {
      $('.counter').removeClass('red');
    }
  });
});



  



