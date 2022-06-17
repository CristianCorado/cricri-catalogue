import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL, WATCH } from "../utils/constants";

const options = {
};

export const getAll = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(API_URL + WATCH, options)
        .then((respose) => {
            setData(respose.data.data);
        })
        .catch((error) => {
            setError(error)
        });
    }, [setData]);

    return { data, error }
}