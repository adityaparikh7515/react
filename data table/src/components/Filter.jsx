// components/Filter.jsx
import React from "react";

const Filter = ({ roleFilter, setRoleFilter }) => {
  return (
    <select
      value={roleFilter}
      onChange={(e) => setRoleFilter(e.target.value)}
      className="filter-select"
    >
      <option value="All">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="User">User</option>
    </select>
  );
};

export default Filter;
