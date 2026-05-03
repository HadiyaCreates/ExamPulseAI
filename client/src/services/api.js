import axios from "axios";

export const uploadPDF = (formData) =>
  axios.post("http://localhost:5000/api/upload", formData);