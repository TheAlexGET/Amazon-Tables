import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataService from "./API/DataService";
import { IProfile } from "./types/types";

type ProfilePageParams = {
  id: string,
}

const FetchProfile: React.FC = () => {
  const [profile, setProfile] = useState<IProfile>();
  const params = useParams<ProfilePageParams>();
  const navigate = useNavigate()
  
  async function fetchProfile() {
    try {
      const response = await DataService.getProfileById(params.id)
      response.data.country = getRandomCountry()
      response.data.marketplace = getRandomMarketplace()
      
      setProfile(response.data)
    } catch (e) {
      console.log("Error while fetching");
    }
  }

  //Imitating Real Data
  function getRandomCountry(){
    const countries = ['Ukraine', 'USA', 'Canada', 'China', 'Moldova', 'Romania', 'France', 'Italy']

    return countries[Number((Math.random() * (countries.length - 1)).toFixed())]
  }

  function getRandomMarketplace() {
    const marketplaces = ['Amazon', 'Ebay', 'Ozon', 'Aliexpress']

    return marketplaces[Number((Math.random() * 3).toFixed())]
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <tr key={profile?.id} onClick={() => {navigate('/accounts/' + profile?.id + '/campaign')}}>
      <td>{profile?.id}</td>
      <td>{profile?.country}</td>
      <td>{profile?.marketplace}</td>
    </tr>
  );
};

export default FetchProfile;
