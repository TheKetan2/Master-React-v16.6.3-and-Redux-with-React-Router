import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Hero", duration: "4:05" },
    { title: "Baby", duration: "3:05" },
    { title: "Boomerang", duration: "2:25" },
    { title: "I want it that way", duration: "4:20" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
