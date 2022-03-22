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