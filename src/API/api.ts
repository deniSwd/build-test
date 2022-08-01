import axios from "axios";
import {WorksType} from "../mainTypes";

const instance = axios.create({
  baseURL: `http://localhost:4000`
})

export const userAPI = {
  async getWorks(): Promise<WorksType> {
    return instance.get<WorksType>(`/works`).then(res => res.data)
  }
}