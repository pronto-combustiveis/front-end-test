import axios from 'axios';


const timestamp = '1624044400';
const API = 'aca8840f0ce7810a27037526b301ea70';
const md5 = '2840d69d34b3c0f884f9fe4013ff7535';

export const api = axios.create({

    baseURL: "https://gateway.marvel.com/v1/public/comics?hasDigitalIssue=true&format=comic&limit=21&apikey=" + API + "&ts=" + timestamp + "&hash=" + md5,

})

export const apitest = axios.create({

    baseURL: "http://localhost:3333/cupoms"

})