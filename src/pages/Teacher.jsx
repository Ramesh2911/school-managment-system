import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Teacher = () => {

  const teachers = [
    { id: 1, name: "Rahul Sharma", subject: "Mathematics", email: "rahul@gmail.com", phone: "9876543210" },
    { id: 2, name: "Anita Das", subject: "English", email: "anita@gmail.com", phone: "9876543211" },
    { id: 3, name: "Ravi Kumar", subject: "Physics", email: "ravi@gmail.com", phone: "9876543212" },
    { id: 4, name: "Priya Singh", subject: "Chemistry", email: "priya@gmail.com", phone: "9876543213" },
    { id: 5, name: "Suman Roy", subject: "Biology", email: "suman@gmail.com", phone: "9876543214" },
    { id: 6, name: "Amit Paul", subject: "History", email: "amit@gmail.com", phone: "9876543215" },
    { id: 7, name: "Neha Kapoor", subject: "Geography", email: "neha@gmail.com", phone: "9876543216" },
    { id: 8, name: "Arjun Das", subject: "Computer", email: "arjun@gmail.com", phone: "9876543217" }
  ];

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const filtered = teachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * rowsPerPage;
  const selectedRows = filtered.slice(start, start + rowsPerPage);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);

  return (
    <div>

      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >

        <h3 style={{ margin: 0 }}>Teacher List</h3>

        <div style={{ display: "flex", gap: "10px" }}>

          <input
            type="text"
            placeholder="Search teacher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: "25px",
              border: "1px solid #ccc"
            }}
          />

          <button
            style={{
              padding: "8px 16px",
              borderRadius: "25px",
              border: "none",
              background: "#0f4c81",
              color: "white",
              cursor: "pointer"
            }}
          >
            + Add
          </button>

        </div>

      </div>


      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white"
        }}
      >

        <thead style={{ background: "#f1f5f9" }}>
          <tr>
            {/* <th style={th}>ID</th> */}
            <th style={th}>Teacher Name</th>
            <th style={th}>Subject</th>
            <th style={th}>Email</th>
            <th style={th}>Phone</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>

          {selectedRows.map((t) => (
            <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>

              {/* <td style={td}>{t.id}</td> */}
              <td style={td}>{t.name}</td>
              <td style={td}>{t.subject}</td>
              <td style={td}>{t.email}</td>
              <td style={td}>{t.phone}</td>

              <td style={td}>

                <FaEdit
                  style={{
                    color: "#2ecc71",
                    cursor: "pointer",
                    marginRight: "10px"
                  }}
                />

                <FaTrash
                  style={{
                    color: "#e74c3c",
                    cursor: "pointer"
                  }}
                />

              </td>

            </tr>
          ))}

        </tbody>

      </table>


      {/* Pagination */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        <div>
          Show
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            style={{ margin: "0 10px", padding: "5px" }}
          >
            <option>5</option>
            <option>15</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          entries
        </div>

        <div>

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          <span style={{ margin: "0 10px" }}>
            Page {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

const th = {
  textAlign: "left",
  padding: "10px",
  fontWeight: "600"
};

const td = {
  padding: "10px"
};

export default Teacher;