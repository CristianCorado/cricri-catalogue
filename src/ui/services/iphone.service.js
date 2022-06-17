import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, IPHONE } from "../utils/constants";

const options = {
};

export const getAll = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL + IPHONE, options)
        .then((respose) => {
            console.log("🚀 ~ file: iphone.service.js ~ line 14 ~ .then ~ respose", respose);
            setData(respose.data.data);
        })
        .catch((error) => {
            console.log("🚀 ~ file: iphone.service.js ~ line 17 ~ useEffect ~ error", error)
        });
    }, [setData]);

    return { data }
}

export const getById = (id) => {
    return axios.get(API_URL + IPHONE + id, options);
}