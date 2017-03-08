import css from "./style.css";
import * as d3 from "d3";

var song = require("file-loader!./lordeGreenLight.mp3");

console.log("index js from app.js?");

var audioSong = new Audio();
audioSong.src = song;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioSrc = audioCtx.createMediaElementSource(audioSong);

var analyser = audioCtx.createAnalyser();

var frequencyData = new Uint8Array(analyser.frequencyBinCount);
analyser.getByteFrequencyData(frequencyData);

console.log(frequencyData);
console.log(audioSrc);
