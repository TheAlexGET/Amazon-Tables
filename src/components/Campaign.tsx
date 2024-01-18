import React from 'react'
import { Button, Table } from 'react-bootstrap'
import FetchCampaign from './FetchCampaign'
import { useNavigate, useParams } from 'react-router-dom'

type CampaignPageParams = {
  id: string;
};

const Campaign: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams<CampaignPageParams>();
  return (
    <div style={{width: '80%'}}>
      <Button onClick={() => navigate("/accounts/" + params.id)}>Go Back</Button>
      <Table bordered hover variant="light">
        <thead>
          <tr>
            <th>Campaign ID</th>
            <th>Clicks</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <FetchCampaign></FetchCampaign>
        </tbody>
      </Table>
    </div>
  )
}

export default Campaign