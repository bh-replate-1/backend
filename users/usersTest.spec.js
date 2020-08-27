const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

//get
//getid
//put .. :/id


//These tests assume there is atleast one user in the DB 

describe("User Router Testing", () => {
    it("Returns correct unauthorized status code", () => {
        return request(server)
            .get('/api/users')
            .then(res => {
                expect(res.status).toEqual(401)
            })
    });

    it("Gets access to users list", async () => {
        const login = await request(server)
            .post("/api/auth/login")
            .send({ email: "Replate5", password: "Test" })
        const res = await request(server)
            .get('/api/users')
            .set('Authorization', login.body.token)
        expect(res.status).toEqual(200)
        expect(res.type).toBe("application/json")
    })

    it("Displays User 1's information", async () => {
        const login = await request(server)
            .post("/api/auth/login")
            .send({ email: "Replate5", password: "Test" })
        const res = await request(server)
            .get('/api/users/1')
            .set('Authorization', login.body.token)
        expect(res.status).toEqual(200)
        expect(res.body.id).toBe(1)
    })

    it("Edit User 1's information", async () => {
        const login = await request(server)
            .post("/api/auth/login")
            .send({ email: "Replate5", password: "Test" })
        const res = await request(server)
            .put('/api/users/1')
            .send({
                "name": "Rohith",
                "email": "RohithisCool11!!",
                "address": "Hello",
                "phone": null,
                "company": null
            })
            .set('Authorization', login.body.token)
        expect(res.status).toEqual(200)
        expect(res.body.id).toBe(1)
        expect(res.body.name).toBe("Rohith")
    })
})

