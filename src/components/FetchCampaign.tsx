import React, { useEffect, useState } from "react";
import DataService from "./API/DataService";
import { ICampaign } from "./types/types";
import { useParams } from "react-router-dom";

type CampaignPageParams = {
  id: string;
};

const FetchCampaign: React.FC = () => {
  const [campaign, setCampaign] = useState<ICampaign>();
  const params = useParams<CampaignPageParams>();

  async function fetchAccounts() {
    try {
      const response = await DataService.getCampaignById(params.id);
      response.data.clicks = getRandomClicks();
      response.data.cost = getRandomCost();
      response.data.date = getRandomDate();
      setCampaign(response.data);
    } catch (e) {
      console.log("Error while fetching");
    }
  }

  //Imitating Real Data
  function getRandomClicks() {
    return (Math.random() * 10000).toFixed();
  }

  function getRandomCost() {
    return (Math.random() * 2000).toFixed() + "€";
  }

  function getRandomDate() {
    const fromTime = new Date(2020, 0, 1).getTime();
    const toTime = new Date().getTime();
    return new Date(
      fromTime + Math.random() * (toTime - fromTime)
    ).toLocaleDateString();
  }

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <tr key={campaign?.id}>
      <td>{campaign?.id}</td>
      <td>{campaign?.clicks}</td>
      <td>{campaign?.cost}</td>
      <td>{campaign?.date}</td>
    </tr>
  );
};

export default FetchCampaign;
