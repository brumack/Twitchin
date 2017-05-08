$("document").ready(function() {


  var getUserData = function(userName, userNumber) {
    var key = "n9w785u28g4g9thqa7qm7q0d9ee8qz";
    $.ajax({
      url:'https://api.twitch.tv/channels/' + userName +'?oauth_token=' + key + '&callback=?',
      dataType: "json",
      type: "GET",
      success: function(data) {
        console.log(data);
        /*if (data.video_banner != null) {
          $(".content").append(
            '<div class = "row"><span class = "user"><img id = "img' + userNumber + '" src="' +
              data.video_banner +
              '"><a href = "https://www.twitch.tv/' +
              data.name +
              '" target="_blank"><span class = "tray" id = "user' +
              userNumber +
              '"><H1>' + data.display_name + '</H1><H3>' + data.status + '</H3></span></a></span></div>'
          );*/

          if (data.video_banner != null) {
            $(".content").append(
              '<div class = "row"><span class = "user"><img id = "img' + userNumber + '" src="' +
                data.video_banner +
                '"><a href = "https://www.twitch.tv/' +
                data.name +
                '" target="_blank"><span class = "tray" id = "user' +
                userNumber +
                '"><H1>' + data.display_name + '</H1><H3>' + data.status + '</H3></span></a></span></div>'
            );

            $(".tray").css("height", $("img").height());

          if (data.game != null)
            $("#user" + userNumber).append(
              "<H5>Playing: " + data.game + "</H5>"
            );



          $.ajax({
            url:'https://api.twitch.tv/kraken/streams/' + userName + '?oauth_token=' + key + '&callback=?',
            dataType: "json",
            type: "GET",
            success: function(data) {

            if (data.stream === null)
              $("#img" + userNumber).css("box-shadow", "0px 0px 54px red" );
            else
              $("#img" + userNumber).css("box-shadow", "0px 0px 40px green" );
            }

});




        }
      }
    });
  };

  var userArray = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];
  $(".tray").css("background", "#0e9dd9");
  $(window).load(function () {
    $('#mask').fadeOut('slow');
});



  for (var i = 0; i < userArray.length; i++) getUserData(userArray[i], i);
  window.onresize = function(){ location.reload(); }


});
