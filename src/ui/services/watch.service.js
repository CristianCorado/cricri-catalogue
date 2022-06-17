import axios from "axios";
import { API_URL, WATCH } from "../utils/constants";

const options = {
};

export const GetAll = () => {
    axios.get(API_URL + WATCH, options);
}

export const GetById = (id) => {
    axios.get(API_URL + WATCH + id, options);
}