import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Signup = () => {
  const [state, setState] = useState({
    account: { username: "", password: "" },
  });
  const handelChange = (e) => {
    const account = { ...state.account };
    account[e.target.id] = e.target.value;
    setState({ account });
  };
  return (
    <form className="m-auto w-50 mt-4 border border-success ">
      <div className="bg-success">
        <h2 className="text-light text-center p-4">Sign up form</h2>
      </div>
      <div class="m-3">
        <label htmlFor="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
          value={state.account.username}
          onChange={handelChange}
          type="text"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <div class="m-3">
        <label htmlFor="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          value={state.account.password}
          onChange={handelChange}
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="m-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" class="btn btn-primary m-3">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
