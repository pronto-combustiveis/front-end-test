import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/dd5c793b-c765-4986-ad3b-132141e11203'
})