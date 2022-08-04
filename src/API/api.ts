import axios from "axios";
import {WorksResponse, WorksType} from "../mainTypes";

const instance = axios.create({
  baseURL: `http://localhost:4000`
})

export const userAPI = {
  async getWorks(page = 0, limit = 9, category: string = 'all'): Promise<WorksResponse> {
    const params: Record<string, any> = {}
    params._page = page
    params._limit = limit
    if(category !== 'all') params.category = category
    return instance.get<WorksType>(`/works`, { params }).then(res => {
      return {
        works: res.data,
        total: +res.headers['x-total-count']
      }
    })
  }
}