import React, { useEffect, useState } from "react";
import DataService from "./API/DataService";
import { IAcount } from "./types/types";
import { useNavigate } from "react-router-dom";
import { useSortedBy } from "./hooks/useSortedArray";

interface ComponentParams {
  filter: string;
}

const FetchAcounts: React.FC<ComponentParams> = ({ filter }) => {
  const [accounts, setAccounts] = useState<IAcount[]>([]);
  const sortedAccounts = useSortedBy(accounts, filter)
  const navigate = useNavigate();

  async function fetchAccounts() {
    try {
      const response = await DataService.getAllAcounts();
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].authToken = getRandomAuthToken();
        response.data[i].creationDate = getRandomCreationDate();
      }
      setAccounts(response.data);
    } catch (e) {
      console.log("Error while fetching");
    }
  }

  useEffect(() => {
      fetchAccounts();
  }, []);


  //Imitating Real Data
  function getRandomAuthToken() {
    return (Math.random() * 1000000 + Math.random() * 1000000).toFixed();
  }

  function getRandomCreationDate() {
    const fromTime = new Date(2000, 0, 1).getTime();
    const toTime = new Date().getTime();
    return String(
      new Date(fromTime + Math.random() * (toTime - fromTime)).getTime()
    );
  }

  return (
    <>
      {sortedAccounts.map((account) => (
        <tr
          key={account.id}
          onClick={() => {
            navigate("/accounts/" + account.id);
          }}
        >
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.authToken}</td>
          <td>{new Date(+account.creationDate).toLocaleDateString()}</td>
        </tr>
      ))}
    </>
  );
};

export default FetchAcounts;
