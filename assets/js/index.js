var gKeys = [
  'Q2HAVS',
  'O8R086',
  'M45YVG',
  '1RIYP4',
  '7LI55T',
  'HF8BVT',
  'DW7E1T',
  '2T8W7E',
  'T72D1W',
];

var availableStrings = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var wordCount = { min: 50, max: 200 };
var playStatus = false;

var selectedKey = '';

$(function () {
  $('#start').click(function () {
    if (playStatus === false) {
      playStatus = true;
      var audio = new Audio('./assets/audio/1.mpeg');
      audio.play();
      $('.box-content div').html('');
      $('.result').html('');
      selectedKey = getRandomKey();
      var maxTimeIndex = parseInt(Math.random() * 6);

      for (var i = 0; i < 6; i++) {
        var str = selectedKey[i] + getRandomString() + ' ';
        var html = '';

        var animationTime = 0;
        animationTime = Math.floor(Math.random() * 5) + 5;
        if (i === maxTimeIndex) {
          animationTime = 9;
        }

        html += '<div class="number-list" style="transition: ' + animationTime + 's">';
        for (var j = 0; j < str.length; j++) {
          html += '<div>' + str[j] + '</div>';
        }
        html += '</div>';

        $('.box-content').children().eq(i).append(html);
      }

      $('.number-list div').css('height', $('.box-content').css('height'));
      setTimeout(function () {
        $('.number-list').each(function () {
          var height = (parseFloat($(this).css('height')) - parseFloat($('.box-content').css('height'))) * -1 + 'px';
          $(this).css('bottom', height);
        });
      }, 1000);
      setTimeout(function () {
        playStatus = false;
      }, 10500);
    }
  });
});

function getRandomKey() {
  var key = '';
  if (gKeys.length > 0) {
    var index = Math.floor(Math.random() * gKeys.length);
    key = gKeys[index];
    gKeys.splice(index, 1);
  }
  return key;
}

function getRandomString() {
  var str = '';
  var index = 0;
  var loopCount = 0;
  loopCount = Math.floor(Math.random() * (wordCount.max - wordCount.min)) + wordCount.min;
  for (var i = 0; i < loopCount; i++) {
    index = Math.floor(Math.random() * availableStrings.length);
    str += availableStrings[index];
  }

  return str;
}