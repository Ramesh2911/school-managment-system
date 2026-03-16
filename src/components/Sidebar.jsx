import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaMoneyBill,
  FaBell,
  FaBookOpen,
  FaChartBar,
  FaCog
} from "react-icons/fa";

import logo from "../assets/slogo.png";

const Sidebar = ({ open }) => {

  const role = localStorage.getItem("role");

  const adminMenu = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Teacher", icon: <FaChalkboardTeacher />, path: "/teacher" },
    { name: "Student", icon: <FaUsers />, path: "/student" },
    { name: "Class & Subject", icon: <FaBook />, path: "#" },
    { name: "Attendance", icon: <FaClipboardList />, path: "#" },
    { name: "Exams", icon: <FaChartBar />, path: "#" },
    { name: "Fees", icon: <FaMoneyBill />, path: "#" },
    { name: "Notice Board", icon: <FaBell />, path: "#" },
    { name: "Library", icon: <FaBookOpen />, path: "#" },
    { name: "Reports", icon: <FaChartBar />, path: "#" },
    { name: "Settings", icon: <FaCog />, path: "#" }
  ];

  const teacherMenu = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "My Classes", icon: <FaBook />, path: "#" },
    { name: "Students", icon: <FaUsers />, path: "#" },
    { name: "Attendance", icon: <FaClipboardList />, path: "#" },
    { name: "Marks / Exams", icon: <FaChartBar />, path: "#" },
    { name: "Assignments", icon: <FaBookOpen />, path: "#" },
    { name: "Notice Board", icon: <FaBell />, path: "#" }
  ];

  const studentMenu = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Classes", icon: <FaBook />, path: "#" },
    { name: "Attendance", icon: <FaClipboardList />, path: "#" },
    { name: "Exams & Results", icon: <FaChartBar />, path: "#" },
    { name: "Assignments", icon: <FaBookOpen />, path: "#" },
    { name: "Fees", icon: <FaMoneyBill />, path: "#" },
    { name: "Notice Board", icon: <FaBell />, path: "#" }
  ];

  let menu = [];

  if (role === "admin") menu = adminMenu;
  if (role === "teacher") menu = teacherMenu;
  if (role === "student") menu = studentMenu;

  const roleColor =
    role === "admin"
      ? "#0f4c81"
      : role === "teacher"
        ? "#2f8f6b"
        : "#7a4dd8";

  return (
    <div
      style={{
        width: "240px",
        background: roleColor,
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        position: window.innerWidth <= 768 ? "fixed" : "relative",
        left: window.innerWidth <= 768 ? (open ? "0" : "-240px") : "0",
        top: "0",
        zIndex: "1000",
        transition: "0.3s"
      }}
    >

      {/* LOGO */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img src={logo} alt="logo" style={{ width: "100px" }} />
      </div>

      {/* MENU */}
      <ul style={{ listStyle: "none", padding: 0 }}>

        {menu.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <Link
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                borderRadius: "6px",
                color: "white",
                textDecoration: "none"
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item.icon} {item.name}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
};

export default Sidebar;