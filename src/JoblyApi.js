import axios from  'axios'

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class JoblyApi {
    //where the local token gets saved
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
    
    //get a single company by its handle
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    //get a list of all companies
    static async getCompanies(name){
        let res = await this.request("companies", name ? { name } : null);
        return res.companies;
    }
    
    //get a list of all jobs
    static async getJobs(title){
        let res = await this.request("jobs", title ? { title } : null);
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