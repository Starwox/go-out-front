import { ADD_PLAYLISTS } from "../actions/playlist";

const initialState = {
  topSongs: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYLISTS:
      const playlists = action.playlists;

      return {
        playlists: playlists
      };
  }
  return state;
};