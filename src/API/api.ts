import axios from "axios";
import {WorksResponse, WorksType} from "../mainTypes";

const instance = axios.create({
  baseURL: `http://localhost:4000`
})

export const userAPI = {
  async getWorks(page = 1, limit = 6, category?: string): Promise<WorksResponse> {
    return instance.get<WorksType>(`/works?${category}&_${page}&_${limit}`).then(res => {
      return {
        works: res.data,
        total: +res.headers['X-Total-Count']
      }
    })
  }
}