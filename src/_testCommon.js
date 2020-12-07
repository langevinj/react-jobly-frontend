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
        title: "Accountant, chartered certified"}]]

const u1 = {user: {username: "testuser", firstName: "test", lastName: "testy", isAdmin: false, applications: [jobPages[0][0].id, jobPages[0][1].id]}}

export { jobPages, u1 }