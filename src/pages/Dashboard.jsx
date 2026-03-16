import {
  FaUsers,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaMoneyBill,
  FaChartBar
} from "react-icons/fa";

const Dashboard = () => {

  const role = localStorage.getItem("role")?.toLowerCase().trim();
  console.log(role, 'll');


  const adminCards = [
    { title: "Students", count: 1200, icon: <FaUsers />, color: "#3498db" },
    { title: "Teachers", count: 80, icon: <FaChalkboardTeacher />, color: "#2ecc71" },
    { title: "Classes", count: 30, icon: <FaBook />, color: "#9b59b6" },
    { title: "Attendance", count: 95, icon: <FaClipboardList />, color: "#f39c12" },
    { title: "Fees Collected", count: "₹3.5L", icon: <FaMoneyBill />, color: "#e74c3c" },
    { title: "Exams", count: 12, icon: <FaChartBar />, color: "#1abc9c" }
  ];

  const teacherCards = [
    { title: "My Classes", count: 5, icon: <FaBook />, color: "#2ecc71" },
    { title: "Students", count: 150, icon: <FaUsers />, color: "#3498db" },
    { title: "Attendance", count: 92, icon: <FaClipboardList />, color: "#f39c12" },
    { title: "Exams", count: 4, icon: <FaChartBar />, color: "#9b59b6" }
  ];

  const studentCards = [
    { title: "Classes", count: 6, icon: <FaBook />, color: "#2ecc71" },
    { title: "Attendance", count: "90%", icon: <FaClipboardList />, color: "#f39c12" },
    { title: "Assignments", count: 8, icon: <FaChartBar />, color: "#9b59b6" },
    { title: "Fees Due", count: "₹5000", icon: <FaMoneyBill />, color: "#e74c3c" }
  ];

  let cards = [];

  if (role === "admin") cards = adminCards;
  if (role === "teacher") cards = teacherCards;
  if (role === "student") cards = studentCards;

  return (
    <div>

      <h2 style={{ marginBottom: "25px" }}>Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}
      >

        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "white",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderLeft: `5px solid ${card.color}`
            }}
          >

            <div>
              <h4 style={{ margin: 0 }}>{card.title}</h4>
              <h2 style={{ margin: "5px 0", color: card.color }}>{card.count}</h2>
            </div>

            <div
              style={{
                fontSize: "28px",
                color: card.color
              }}
            >
              {card.icon}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Dashboard;