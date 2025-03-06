import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const INITIAL_LOGIN_OBJ = {
    username: "2025_Batch_Training",
    password: "2025_Batch_Training",
    month: "JANUARY",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (localStorage.getItem("userId")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const storedMonth = localStorage.getItem("month");
    if (storedMonth) {
      setLoginObj((prev) => ({ ...prev, month: storedMonth }));
    }
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { username, password, month } = loginObj;
    const upperCaseMonth = month.toUpperCase();

    if (!username.trim()) return setErrorMessage("Username is required!");
    if (!password.trim()) return setErrorMessage("Password is required!");

    setLoading(true);

    try {
      const response = await axios.post(
        "https://backenddesiqna-1.onrender.com/course/login",
        { username, password, month: upperCaseMonth }
      );

      if (response.status === 200) {
        const { userId } = response.data;
        localStorage.setItem("userId", userId);
        localStorage.setItem("month", upperCaseMonth);
        navigate("/app/dashboard", { replace: true });
      } else {
        setErrorMessage(response.data.message || "Login failed! Please try again.");
      }
    } catch (error) {
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
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          {/* Left Side: Login Form */}
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
                    updateFormValue({ updateType: "month", value: e.target.value.toUpperCase() })
                  }
                >
                  {[...Array(12)].map((_, i) => {
                    const month = new Date(0, i).toLocaleString("default", { month: "long" }).toUpperCase();
                    return <option key={month} value={month}>{month}</option>;
                  })}
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

          {/* Right Side: Image */}
          <div className="hidden md:block">
            <img
              src="desiqna.png"
              alt="Login Illustration"
              className="w-full h-full rounded-r-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
