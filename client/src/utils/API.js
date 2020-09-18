import axios from "axios";
const baseURL = process.env.API_PATH;

export default {
  getContacts: (type) => {
    const query = type ? "type=" + type : "";
    return axios.get(`${baseURL}/api/contacts?${query}`);
  },
  deleteContact: (id) => {
    return axios.delete(`${baseURL}/api/contacts/${id}`);
  },
  addContact: (contact) => {
    return axios.post(`${baseURL}/api/contacts`, contact);
  },
};
