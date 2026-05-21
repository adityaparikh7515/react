import { useState } from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  loginUser,
  logout,
  resetState,
} from "./authSlice";

const AuthPage = () => {
  const dispatch = useDispatch();

  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetState());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Redux Authentication
        </h2>

        {isError && (
          <p
            style={{
              background: "#ffe5e5",
              color: "red",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "15px",
            }}
          >
            {message}
          </p>
        )}

        {isSuccess && user && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#28a745",
              }}
            >
              Welcome {user.name}
            </h3>

            <p
              style={{
                color: "#555",
              }}
            >
              {user.email}
            </p>

            <button
              onClick={handleLogout}
              style={{
                width: "100%",
                padding: "12px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              Logout
            </button>
          </div>
        )}

        {!user && (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
            </div>

            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  outline: "none",
                  fontSize: "14px",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "12px",
                background: isLoading
                  ? "#999"
                  : "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "0.3s",
              }}
            >
              {isLoading
                ? "Loading..."
                : "Login"}
            </button>
          </form>
        )}

        {!user && (
          <>
            <hr
              style={{
                margin: "25px 0",
                border: "0.5px solid #ddd",
              }}
            />

            <div
              style={{
                background: "#f8f9fa",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              <strong>Demo Login</strong>

              <p
                style={{
                  margin: "10px 0 5px",
                }}
              >
                Email: admin@gmail.com
              </p>

              <p>Password: 123456</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;