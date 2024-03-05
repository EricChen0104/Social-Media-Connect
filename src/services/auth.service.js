import axios from "axios";
const API_URL = "http://localhost:8081/api/user";
const API_URLOther = "http://localhost:8081/api/other";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  editProfile(_id, username, bio, token) {
    return axios.patch(API_URL + "/" + _id, {
      username,
      bio,
      token,
    });
  }

  getOtherProfile(_id) {
    return axios.get(API_URLOther + "/" + _id, {});
  }
}

export default new AuthService();
