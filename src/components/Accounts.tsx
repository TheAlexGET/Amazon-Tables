import React, { useState } from "react";
import { Table } from "react-bootstrap";
import FetchAcounts from "./FetchAcounts";

const Accounts: React.FC = () => {
  const [filter, setFilter] = useState('')
  return (
    <div style={{width: '80%'}}>
      <select name="Filter" id="" onChange={(e) => setFilter(e.target.value)}>
        <option value="filter">Filter</option>
        <option value="date">By Date</option>
        <option value="token">By Token</option>
        <option value="id">By Id</option>
      </select>
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Email</th>
            <th>Auth Token</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          <FetchAcounts filter={filter}></FetchAcounts>
        </tbody>
      </Table>
    </div>
  );
};

export default Accounts;
