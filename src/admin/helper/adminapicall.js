import { API } from "../../Backend";

export const addCategory = (token, _id, name) => {
    console.log(token);
    console.log(_id);
    console.log(name);
    return fetch(`${API}/category/create/${_id}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(name)
    })
        .then((response) => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const getAllCategories = () => {
    return fetch(`${API}/category`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err))
}

export const createProduct = (token, formData, userId) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,

        },
        body: formData
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err))
}


export const getAllProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err))
}


export const deleteProduct = (userId, productId, token) => {
    return fetch(`${API}/product/${userId}/${productId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        }
    })
        .then((response) => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const getProduct = (productId) => {

    return fetch(`${API}/product/${productId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    })
        .then((response) => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const updateProduct = (token, formData, userId, productId) => {
    console.log("123", formData)
    return fetch(`${API}/product/${userId}/${productId}`, {
        method: "PUT",
        headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        },
        body: formData
    })
        .then((response) => {
            return response.json();
        })
        .catch(err => console.log(err))
}
