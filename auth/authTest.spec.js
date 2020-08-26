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
        .send({ email: "Replate1", password: "Test" })
        expect(res.body).toHaveProperty("message");
    });

    it("Successful register returns correct status code", async () => {
        const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "Replate2", password: "Test" })
        expect(res.status).toBe(200);
    })

    it("Successful login returns a token", async () => {
        const res = await request(server)
        .post('/api/auth/login')
        .send({ email: "Replate1", password: "Test" })
        expect(res.body).toHaveProperty("message");
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
        .send({ email: "Replate2", password: "Test" })
        expect(res.status).toBe(200);
    })
})

