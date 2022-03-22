import React, { useState } from 'react';
import { signup } from '../auth/helper';
import Base from '../core/Base';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        errorMessage: "",
        isSuccess: false
    })
    const { name, email, password, errorMessage, isSuccess } = values;

    // const handleChange = (e) => {
    //     console.log(e.target.name, e.target.value);
    //     setValues({
    //         [e.target.name]: e.target.value
    //     })
    // }
    const handleChange = name => event => {
        setValues({ ...values, errorMessage: false, [name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup({ name, email, password })
            .then((response) => {
                if (response.errors) {
                    setValues(...values, {
                        errorMessage: response.errors,
                        isSuccess: false
                    })
                }
                else {
                    setValues(...values, {
                        name: "",
                        email: "",
                        password: "",
                        errorMessage: "",
                        isSuccess: true
                    })
                }
            })
            .catch((err) => {
                console.log("some error in signup", err);
            })
    }

    const displayErrorMessage = () => {
        return (
            <div style={{ display: errorMessage ? "" : "none" }} className="col-4 offset-4 align-self-center" >

                <div className='alert alert-danger'>
                    <div> {errorMessage}</div>
                </div>
            </div>
        )
    }

    const displaySuccessMessage = () => {
        return (
            <div style={{ display: isSuccess ? "" : "none" }} className="col-4 offset-4 align-self-center" >
                <div className="card-body"></div>
                <div className='alert alert-success'>
                    <div
                    > Account created succesfully, <Link to="/signin">login here</Link></div>
                </div>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <div className="card col-4 offset-4 align-self-center" >
                <div className="card-body">
                    {/* <h3 className="card-title mx-2">Sign Up Form</h3> */}
                    <form>
                        <div className="form-group m-2 p-2">
                            <label for="name">Name</label>
                            <input onChange={handleChange("name")} type="text" className="form-control" name="name" value={values.name} />
                        </div>
                        <div className="form-group m-2 p-2">
                            <label for="email">Email address</label>
                            <input onChange={handleChange("email")} type="email" className="form-control" name="email" value={values.email} />
                        </div>
                        <div className="form-group m-2 p-2">
                            <label for="password">Password</label>
                            <input onChange={handleChange("password")} type="password" className="form-control" name="password" value={values.password} />
                        </div>

                        <div className="form-group m-2 p-2">
                            <button onClick={handleSubmit} type="submit" style={{ width: "100%" }} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <Base title='Sign Up Form' description='Please signup int the web app'>
            {displayErrorMessage()}
            {displaySuccessMessage()}
            {signUpForm()}
        </Base>
    )
}
