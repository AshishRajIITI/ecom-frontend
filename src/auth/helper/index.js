import { API } from "../../Backend";


export const signup = (data) => {
    return fetch(`${API}/signup`, {
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then((response) => {
            console.log("fdjgkvfd", response)
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        })
}

export const signin = (data) => {
    return fetch(`${API}/signin`, {
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        })
}


export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

export const signout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();

        return fetch(`${API}/signout`, {
            method: "GET"
        })
            .then(response => console.log("signout success"))
            .catch(err => console.log(err));
    }
}


export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else {
        return false;
    }
}
