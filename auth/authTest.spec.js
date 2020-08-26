const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");



//beforeEach?  Does that rollback the db on heroku?  or just locally?  does a test db get recognized by heroku?  
//beforeEach(async () => {
    //await db("users").truncate();
//})


describe("Auth Router Testing", () => {
    it("Successful register returns a token", async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "Replate15", password: "Test" })
        expect(res.body).toHaveProperty("token");
    });

    it("Successful register returns correct status code", async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "Replate16", password: "Test" })
        expect(res.status).toBe(201);
    })

    it("Successful login returns a token", async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ email: "Replate5", password: "Test" })
        expect(res.body).toHaveProperty("token");
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
        .send({ email: "Replate5", password: "Test" })
        expect(res.status).toBe(200);
    })
})

