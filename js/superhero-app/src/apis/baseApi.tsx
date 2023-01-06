import React from 'react';
import axios from 'axios';

const API_HOST = "/api";
const PROJECT_HOST = "/superhero-api@0.3.0"
const SERVICE_REST = 'https://cdn.jsdelivr.net/gh/akabab' + PROJECT_HOST + API_HOST;

console.log(SERVICE_REST);

const baseApi = axios.create({ baseURL: SERVICE_REST });

export default baseApi;
