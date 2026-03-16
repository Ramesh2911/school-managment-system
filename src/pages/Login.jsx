import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/loginImg.png";

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    { username: "admin", password: "123456", role: "admin" },
    { username: "teacher", password: "123456", role: "teacher" },
    { username: "student", password: "123456", role: "student" }
  ];

  const handleLogin = () => {

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {

      localStorage.setItem("token", "demo-token");
      localStorage.setItem("role", user.role);

      navigate("/dashboard");

    } else {

      alert("Invalid username or password");

    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "Segoe UI, sans-serif",
        flexDirection: window.innerWidth <= 768 ? "column-reverse" : "row"
      }}
    >

      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          background: "#d9efe4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          height: "100%",
          textAlign: "center"
        }}
      >
        <img
          src={loginImg}
          alt="illustration"
          style={{
            width: "280px",
            maxWidth: "100%",
            marginBottom: "30px"
          }}
        />

        <h2
          style={{
            fontWeight: "600",
            color: "#2f3e3e",
            marginBottom: "10px"
          }}
        >
          ABC
        </h2>

        <p
          style={{
            maxWidth: "300px",
            color: "#6b7b7b",
            fontSize: "14px"
          }}
        >
          Unleash your academic success with Exam Mastery Hub’s
          exam excellence platform.
        </p>
      </div>


      {/* RIGHT SIDE */}
      <div
        style={{
          flex: 1,
          background: "#f4f6f7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          height: "100%"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "380px"
          }}
        >

          <h2
            style={{
              textAlign: "center",
              marginBottom: "35px",
              fontWeight: "600",
              color: "#2f3e3e"
            }}
          >
            <span style={{ color: "#2f8f6b" }}>ABC</span>
          </h2>

          {/* Username */}
          <label style={{ fontSize: "14px", color: "#6b7b7b" }}>
            Username or email
          </label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              marginTop: "5px",
              marginBottom: "20px"
            }}
          />


          {/* Password */}
          <label style={{ fontSize: "14px", color: "#6b7b7b" }}>
            Password
          </label>

          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              marginTop: "5px"
            }}
          />

          <div
            style={{
              textAlign: "right",
              fontSize: "13px",
              marginTop: "6px",
              marginBottom: "20px",
              color: "#2f8f6b",
              cursor: "pointer"
            }}
          >
            Forgot password?
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              background: "#263238",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "15px",
              cursor: "pointer"
            }}
          >
            Sign in
          </button>


          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "25px 0"
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "#ddd" }}></div>

            <span
              style={{
                margin: "0 10px",
                color: "#999",
                fontSize: "13px"
              }}
            >
              or
            </span>

            <div style={{ flex: 1, height: "1px", background: "#ddd" }}></div>
          </div>


          <button
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: "white",
              cursor: "pointer"
            }}
          >
            Sign in with Google
          </button>


          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "14px",
              color: "#666"
            }}
          >
            Are you new?{" "}
            <span style={{ color: "#2f8f6b", cursor: "pointer" }}>
              Create an Account
            </span>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;