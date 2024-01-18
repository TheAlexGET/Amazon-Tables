import React from "react";
import { Button, Table } from "react-bootstrap";
import FetchProfile from "./FetchProfile";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "80%" }}>
      <Button onClick={() => navigate("/accounts")}>Go Back</Button>
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>Country</th>
            <th>Marketplace</th>
          </tr>
        </thead>
        <tbody>
          <FetchProfile></FetchProfile>
        </tbody>
      </Table>
    </div>
  );
};

export default Profile;
