import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Signup = () => {
  const [state, setState] = useState({
    account: { username: "", password: "" },
  });
  const handelChange = (e) => {
    console.log(e.target);
    const account = { ...state.account };
    account[e.target.id] = e.target.value;
    setState({ account });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="m-auto w-50 mt-4 border border-success "
    >
      <div className="bg-success">
        <h2 className="text-light text-center p-4">Sign up form</h2>
      </div>
      <div className="m-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          value={state.account.username}
          onChange={handelChange}
          type="text"
          className="form-control"
          id="username"
        />
      </div>
      <div className="m-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={state.account.password}
          onChange={handelChange}
          type="text"
          className="form-control"
          id="password"
        />
      </div>
      <div className="m-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary m-3">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
