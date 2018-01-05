require("dotenv").config();
var keys=require("./keys.js");
var tweet= require('twitter');
var spotify= require('spotify');
var request= require('request');

var theKeys= new tweet(keys.twitterKeys);

var start= process.argv[2];
var song= process.argv[3];

function userPicks (){

