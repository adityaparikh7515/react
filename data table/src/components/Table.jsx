
// components/Table.jsx
import React from "react";

const Table = ({ data, onSort }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th onClick={() => onSort("id")}>ID</th>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("email")}>Email</th>
          <th onClick={() => onSort("role")}>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
