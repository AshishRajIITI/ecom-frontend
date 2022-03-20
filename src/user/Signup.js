import React from 'react';
import Base from '../core/Base';

export default function Signup() {
    return (
        <Base>
            <div className="card col-4 offset-4 align-self-center" >
                <div className="card-body">
                    <h3 className="card-title mx-2">Sign Up Form</h3>
                    <form>
                        <div className="form-group m-2 p-2">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group m-2 p-2">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group m-2 p-2">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>

                        <div className="form-group m-2 p-2">
                            <button type="submit" style={{ width: "100%" }} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Base>
    )
}
