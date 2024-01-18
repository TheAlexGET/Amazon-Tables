import axios from "axios";

export default class DataService{
  static async getAllAcounts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users", {
      params: {
        _limit: 10
      }
    })
    return response
  }

  static async getProfileById(id: any){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users" + '/' + id)
    return response
  }

  static async getCampaignById(id: any){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users" + '/' + id)
    return response
  }
}