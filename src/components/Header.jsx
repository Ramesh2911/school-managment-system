import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell, FaUser, FaSignOutAlt } from "react-icons/fa";

const Header = () => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "#0f4c81",
        padding: "12px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      {/* TITLE */}
      <h4 style={{ margin: 0, fontWeight: "600" }}>
        School Management System
      </h4>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative"
        }}
      >
        {/* Notification */}
        <div style={{ cursor: "pointer", position: "relative" }}>
          <FaBell size={20} />
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              fontSize: "10px",
              padding: "2px 5px"
            }}
          >
            3
          </span>
        </div>

        {/* Profile Icon */}
        <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
          <FaUserCircle size={28} />
        </div>

        {/* Dropdown */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "45px",
              right: "0",
              background: "white",
              color: "#333",
              width: "150px",
              borderRadius: "6px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            {/* Profile */}
            <div
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
            >
              <FaUser />
              Profile
            </div>

            {/* Logout */}
            <div
              onClick={logout}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}
            >
              <FaSignOutAlt />
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;