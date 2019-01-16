import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'GET') {
    console.debug('API Call:', endpoint, params, verb);
    // If not GET request pass the data as the 4th argument

    params._token = // for now, hardcode token for "testuser"
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6' +
      'InRlc3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1N' +
      'jQ2Nzl9.LYDHSkl81gEm7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';
    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === 'GET' ? 'params' : 'data']: params,
        params
      })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }
  static async signUpUser(data) {
    let res = await this.request(`users`, data, 'POST');
    return res.token;
  }
}

export default JoblyApi;