require("dotenv").config();
var keys=require("./keys.js");
var tweet= require('twitter');
var spotify= require('spotify');
var request= require('request');
var inquirer= require('inquirer');

var theKeys= new tweet(keys.twitterKeys);

var start= process.argv[2];
var song= process.argv[3];

function userPicks (){

var params = {screen_name: 'Danse Macabre'};
var theKeys= new tweet(keys.twitterKeys);
twitterKeys.get('statuses/user_timeline', params, function(error, tweets, response) {
        if(!error) {
            for(var t = 0; t < tweets.length; t++) {
                output = ('\n' + '@' + params.screen_name + ' said ' + tweets[t].text + ' at ' + tweets[t].created_at +'\n');
                console.log(output);
                append();
            }
        } else {
            console.log('twitter error');
        }
    });
}

  } else if (user.commands === "spotify-this-song") {

                spotifyPrompt([{
                        type: "input",
                        message: "What song should I look up?",
                        name: "song",
                        default: "The Sign Ace of Base"
                    }


                ]).then(function(response) {

                    spotify.search({
                        type: 'track',
                        query: response.song,
                        limit: 1
                    }, function(err, data) {
                        if (err) {
                            console.log('Error: ' + err);
                            return;


                        }else {
                            var trackName = data.tracks.items;


                            for (var i = 0; i < 1; i++) {

                                var trackData = trackName[i];

                                var artists = trackData.artists[0].name;
                                var song = trackData.name;
                                var preview = trackData.preview_url;
                                var album = trackData.album.name;


                                console.log("============================================");
                                console.log("");
                                console.log("Artist: " + artists);
                                console.log("~~~~~~~~~~~~~~~~~~~~~");
                                console.log("Song Title: " + song);
                                console.log("~~~~~~~~~~~~~~~~~~~~~");
                                console.log("Album: " + album);
                                console.log("~~~~~~~~~~~~~~~~~~~~~");
                                console.log("Song Preview: " + preview);
                                console.log("");
                                console.log("============================================");
                            }
                        }
                    });
                });