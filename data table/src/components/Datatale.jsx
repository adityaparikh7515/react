import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Table from "./Table";
import usersData from "./Userdata";

const DataTable = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const filteredData = useMemo(() => {
    let data = [...usersData];

    if (search) {
      data = data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (roleFilter !== "All") {
      data = data.filter((user) => user.role === roleFilter);
    }

    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [search, roleFilter, sortConfig]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="table-wrapper">
      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <Filter roleFilter={roleFilter} setRoleFilter={setRoleFilter} />
      </div>
      <Table data={filteredData} onSort={handleSort} />
    </div>
  );
};

export default DataTable;
