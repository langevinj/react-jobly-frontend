import axios from  'axios'
const BASE_URL = "" || "http://localhost:3001/";
// const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get", t_required=false, headers=false) {
        let token = JSON.parse(localStorage.getItem("token"))
        if(token){
            if(t_required){
                paramsOrData._token = (token); 
            } 

            if(headers){
                headers = {Authorization: (token)}
            } else {
                headers = {}
            }
        }

        console.debug("API Call:", endpoint, paramsOrData, verb);

        try {
            return (await axios({
                method: verb,
                url: `${BASE_URL}${endpoint}`,
                [verb === "get" ? "params" : "data"]: paramsOrData,
                headers: headers
            })).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        }

        catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    //get a single company by its handle
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    //get a list of all companies
    static async getCompanies(){
        let res = await this.request(`companies/`);
        console.log(process.env.BASE_URL)
        return res.companies;
    }

    //filter companies by search term
    static async filterCompanies(searchTerm) {
        let res = await this.request(`companies/`, { name: searchTerm })
        return res.companies;
    }

    //apply for job with given id
    // static async applyForJob(id) {
    //     let res = await this.request(`/testuser/jobs/${id}`, {}, "post", true);
    //     return res.applied
    // }

    //get a list of all jobs
    static async getJobs(){
        let res = await this.request(`jobs/`);
        return res.jobs;
    }

    //filter jobs by search term
    static async filterJobs(searchTerm){
        let res = await this.request(`jobs/`, {title: searchTerm})
        return res.jobs;
    }

    //login a user
    static async login(data){
        let res = await this.request(`auth/token`, {username: data.username, password: data.password}, "post");
        return res.token;
    }

    //signup a user
    static async signup(data){
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    //get info on a user by username
    static async getUserInfo(username){
        let res = await this.request(`users/${username}`, {username: username}, "get", true, true);
        return res
    }

    //apply user with username to apply for job with jobId
    static async applyToJob(username, jobId){
        let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post", true, true);
        return res
    }

    //unapply from a job given jobId and username
    static async unapplyToJob(username, jobId){
        let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "patch", true, true);
        return res
    }

    //given an object where keys are profile keys and values are updated values, update those keys for the user
    static async updateUser(username, updates){
        let res = await this.request(`users/${username}`, updates, "patch", false, true)
        return res
    }
}

export default JoblyApi;