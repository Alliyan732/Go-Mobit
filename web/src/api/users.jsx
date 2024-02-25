import axios from "../config/axiosConfig";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

// add user
export const addUser = async (data) => {
  try {
    const response = await axios.post("/users/add", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
