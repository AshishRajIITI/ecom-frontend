import { API } from "../../Backend";


export const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getPhoto = (productId) => {
    return fetch(`${API}/product/photo/${productId}`, {
        method: "GET",
    })
        .then((response) => {
            console.log("dsca", response);
            return response;
        })
        .catch((err) => {
            console.log(err);
        })
}