import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
  const INITIAL_LOGIN_OBJ = {
    username: "2025_Batch_Training",
    password: "2025_Batch_Training",
    month: "January",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log("Form submitted");

    const { username, password, month } = loginObj;

    if (username.trim() === "") return setErrorMessage("Username is required!");
    if (password.trim() === "") return setErrorMessage("Password is required!");

    setLoading(true);


    try {
      console.log("Making API call");
      console.log(month)
      const response = await axios.post("http://localhost:8000/course/login", {
        username,
        password,
        month
      });

      console.log("API Response:", response);
      const { data } = response;
      console.log(response)
      if (response.status===200) {
        console.log("Login successful, attempting navigation");

        // Set authenticated state (no need to store token)
        // setIsAuthenticated(true);                                                                                // what does this doo fix it

        // Navigate to dashboard
        navigate("app/dashboard", { replace: true });
        console.log("Navigation called");
      } else {
        setErrorMessage(data.message || "Login failed! Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred during login!"
      );
    } finally {
      setLoading(false);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={submitForm}>
              <div className="mb-4">
                <input
                  type="text"
                  className="input input-bordered w-full mt-4"
                  placeholder="Username"
                  value={loginObj.username}
                  onChange={(e) =>
                    updateFormValue({ updateType: "username", value: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="input input-bordered w-full mt-4"
                  placeholder="Password"
                  value={loginObj.password}
                  onChange={(e) =>
                    updateFormValue({ updateType: "password", value: e.target.value })
                  }
                />
                <select
                  className="select select-bordered w-full mt-4"
                  value={loginObj.month}
                  onChange={(e) =>
                    updateFormValue({ updateType: "month", value: e.target.value })
                  }
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              
              <button
                type="submit"
                className={`btn mt-2 w-full btn-primary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
