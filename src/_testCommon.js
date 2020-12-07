const jobPages = [[{
    companyHandle: "mejia-scott-ryan",
    companyName: "Mejia, Scott and Ryan",
    equity: null,
    id: 200,
    salary: 126000,
    title: "Accommodation manager"
}, {
    companyHandle: "stone-stewart",
    companyName: "Stone-Stewart",
    equity: "0",
    id: 36,
    salary: 175000,
        title: "Accountant, chartered certified"
    }, {
        companyHandle: "boyd-evans",
        companyName: "Boyd-Evans",
        equity: "0.070",
        id: 161,
        salary: 86000,
        title: "Accountant, chartered certified"}]];



const u1 = {user: {username: "testuser", firstName: "test", lastName: "testy", isAdmin: false, applications: [jobPages[0][0].id, jobPages[0][1].id]}}

// const companies = { companies: [{ handle: "test-company-1", name="testcompany1", description: "the first test company.", numEmployees: 50, logoUrl: "www.image.jpg" }, { handle: "test-company-2", name="testcompany2", description: "the second test company.", numEmployees: 100, logoUrl: "www.fake.com" }] }

export { jobPages, u1 }