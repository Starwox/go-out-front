export const ADD_PLAYLISTS = 'ADD_PLAYLISTS';

export const addPlaylists = playlists => {
  return { type: ADD_PLAYLISTS, playlists: playlists };
};

export const addIdPlaylist = idPlaylists => {
  return { type: ADD_ID_PLAYLISTS, idPlaylists: idPlaylists };
};