import axios from  'axios'
import { TOKEN_KEY } from './App.js'

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class JoblyApi {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get")
            ? data
            : {};
        
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message: [message]
        }
    }
    // static async request(endpoint, params = {}, verb = "get") {

    //     //get the token from localStorage
    //     let _token = localStorage.getItem(TOKEN_KEY)

    //     console.debug("API Call:", endpoint, params, verb);

    //     let query;
    //     const headers = { Authorization: `Bearer ${_token}` };
    //     //set the correct data for the query to the API based on the verb
    //     if (verb === "get") {
    //         query = axios.get(
    //             `${BASE_URL}/${endpoint}`, {params: { _token, ...params } }, headers);
    //     } else if (verb === "post") {
    //         query = axios.post(
    //             `${BASE_URL}/${endpoint}`, { _token, ...params }, headers);
    //     } else if (verb === "patch") {
    //         query = axios.patch(
    //             `${BASE_URL}/${endpoint}`, { _token, ...params }, headers);
    //     }

    //     try {
    //         return (await query).data;
    //     } catch (err) {
    //         console.error("API Error:", err.response);
    //         let message = err.response.data.message;
    //         throw Array.isArray(message) ? message : [message];
    //     }
    // }
    
    //get a single company by its handle
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    //get a list of all companies
    static async getCompanies(search){
        let res = await this.request("companies", { search });
        return res.companies;
    }
    
    //get a list of all jobs
    static async getJobs(search){
        let res = await this.request("jobs", { search });
        return res.jobs;
    }

    //apply user with username to apply for job with jobId
    static async applyToJob(username, jobId) {
        let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
        return res.message
    }

     //unapply from a job given jobId and username
    static async unapplyToJob(username, jobId){
        let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "patch");
        return res.message
    }

    //login a user
    static async login(data){
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
    }

    //signup a user
    static async signup(data){
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    //get info on a user by username
    static async getUserInfo(username){
        let res = await this.request(`users/${username}`);
        return res.user;
    }

    //given an object where keys are profile keys and values are updated values, update those keys for the user
    static async updateUser(username, updates) {
        let res = await this.request(`users/${username}`, updates, "patch")
        return res.user;
    }
    
   

    
}

export default JoblyApi;