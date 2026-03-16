import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Student = () => {

  const students = [
    { id: 1, name: "Amit Das", class: "10", email: "amit@gmail.com", phone: "9000000001" },
    { id: 2, name: "Rahul Roy", class: "9", email: "rahul@gmail.com", phone: "9000000002" },
    { id: 3, name: "Priya Sharma", class: "8", email: "priya@gmail.com", phone: "9000000003" },
    { id: 4, name: "Ankit Singh", class: "10", email: "ankit@gmail.com", phone: "9000000004" },
    { id: 5, name: "Sneha Paul", class: "7", email: "sneha@gmail.com", phone: "9000000005" },
    { id: 6, name: "Riya Gupta", class: "6", email: "riya@gmail.com", phone: "9000000006" },
    { id: 7, name: "Arjun Verma", class: "8", email: "arjun@gmail.com", phone: "9000000007" },
    { id: 8, name: "Suman Das", class: "9", email: "suman@gmail.com", phone: "9000000008" }
  ];

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
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

        <h3 style={{ margin: 0 }}>Student List</h3>

        <div style={{ display: "flex", gap: "10px" }}>

          <input
            type="text"
            placeholder="Search student..."
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
            <th style={th}>Student Name</th>
            <th style={th}>Class</th>
            <th style={th}>Email</th>
            <th style={th}>Phone</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>

          {selectedRows.map((s) => (
            <tr key={s.id} style={{ borderBottom: "1px solid #eee" }}>

              {/* <td style={td}>{s.id}</td> */}
              <td style={td}>{s.name}</td>
              <td style={td}>{s.class}</td>
              <td style={td}>{s.email}</td>
              <td style={td}>{s.phone}</td>

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

export default Student;