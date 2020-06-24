import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "lvyzon41d963t8rnztrvk5w0s9fajo",
    Authorization: "Bearer gjqumxzm5rkzrl63anfgjrc3gykq5p",
  },
});
/*
    CLIENT_ID = 'lvyzon41d963t8rnztrvk5w0s9fajo';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=lvyzon41d963t8rnztrvk5w0s9fajo&redirect_uri=http://127.0.0.1/&response_type=token


*/
export default api;
