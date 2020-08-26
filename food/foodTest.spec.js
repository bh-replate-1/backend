const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

//get
//getById
//put .. id
//delete .. id 


// let token;
// beforeAll((done) => {
//     request(server)
//       .post('/api/auth/login')
//       .send({ email: "Replate15", password: "Test" })
//       .end((err, response) => {
//         token = response.body.token; // save the token!
//         done();
//       });
//   });

    






describe("Food Router Testing", () => {
    it("Returns correct unauthorized status code", () => {
        return request(server).get('/api/food')
        .then(data => {
            expect(data.status).toEqual(401)
        })
    });

    it("It responds with JSON", async () => {
        const login = await request(server)
        .post("/api/auth/login")
        .send({ email: "Replate5", password: "Test" })
        const res = await request(server)
        .get('/api/food')
        .set('Authorization', login.body.token)
        expect(res.status).toEqual(200)
        
    })
})
