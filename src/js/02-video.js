import Player from "@vimeo/player";
import throttle from "lodash.throttle";
import storageFunctions from "./storage";

const currentTime = "videoplayer-current-time";
const playerRef = document.querySelector("#vimeo-player");

const player = new Player(playerRef);

function PlayTimeSaver(data) {
  storageFunctions.save(currentTime, Math.floor(data.seconds));
}

player.on("timeupdate", throttle(PlayTimeSaver, 1000));

let loadedTime = storageFunctions.load(currentTime);
if (loadedTime) {
  player.setCurrentTime(loadedTime);
}
