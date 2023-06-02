import Axios from "axios";
const API = "https://btpv.onrender.com/v1/auth";

export class UserService {
  Login(user) {
    return Axios.post(`${API}/login`, user);
  }
}
