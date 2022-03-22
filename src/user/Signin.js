import React, { useState } from 'react';
import { authenticate, isAuthenticated, signin } from '../auth/helper';
import Base from '../core/Base';
import { Link, Navigate } from 'react-router-dom';

export default function Signin() {

    const [values, setValues] = useState({
        email: "q@wre.com",
        password: "12345",
        errorMessage: "",
        isSuccess: false
    })
    const { email, password, errorMessage, isSuccess } = values;
    //TODO:

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
        signin({ email, password })
            .then((response) => {
                if (response.errors) {
                    setValues(...values, {
                        errorMessage: response.errors,
                        isSuccess: false
                    })
                }
                else {
                    authenticate(response, () => {
                        setValues({
                            ...values,
                            isSuccess: true
                        });
                    })
                }
            })

    }

    const redirecting = () => {
        if (isSuccess) {
            if (isAuthenticated()) {
                return <Navigate to="/" />
            }
        }
        if (isAuthenticated()) {
            return <Navigate to="/" />
        }

    }

    const displayErrorMessage = () => {
        return (
            <div style={{ display: errorMessage ? "" : "none" }} className="col-4 offset-4 align-self-center" >
                <div className='alert alert-danger'>
                    <div> {errorMessage} <Link to="/signup">Signup here</Link></div>
                </div>
            </div >
        )
    }

    const displaySuccessMessage = () => {
        return (
            <div style={{ display: isSuccess ? "" : "none" }} className="col-4 offset-4 align-self-center" >
                <div className="card-body"></div>
                <div className='alert alert-success'>
                    <div
                    > Signed in succesfully, </div>
                </div>
            </div>
        )
    }

    const signInForm = () => {
        return (
            <div className="card col-4 offset-4 align-self-center" >
                <div className="card-body">
                    {/* <h3 className="card-title mx-2"></h3> */}
                    <form>
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
        <Base title='Sign In Form' description='Please signin int the web app'>
            {displayErrorMessage()}
            {displaySuccessMessage()}
            {signInForm()}
            {redirecting()}
        </Base>
    )
}
