const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");


//Use two different sets of credentials for first 2 tests (Create two new accounts which show successful registration and token response);  Use same pair of credentials for last 2 tests (These show successful login and token response)

//First two and last two tests can be condensed into single tests... 

//We can add a beforeall truncate feature to clear the DB ... so no need for two different sets of credentials when running a test suite OR condense .. will play around with that tomorrow 

describe("Auth Router Testing", () => {
    it("Successful register returns a token", async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "Replate29990", password: "Test" })
        expect(res.body).toHaveProperty("token");
    });

    it("Successful register returns correct status code", async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "Replate30000", password: "Test" })
        expect(res.status).toBe(201);
    })

    it("Invalid credentials return correct status code", async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ email: "Badlogin", password: "Test" })
        expect(res.status).toBe(401);
    })

    it("Successful login returns correct status code", async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ email: "Replate29990", password: "Test" })
        expect(res.status).toBe(200);
    })

    it("Successful login returns a token", async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ email: "Replate30000", password: "Test" })
        expect(res.body).toHaveProperty("token");
    })
})


