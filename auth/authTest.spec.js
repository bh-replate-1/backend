const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");


describe("Auth Router Testing", () => {
  beforeAll(async () => {
    await db("users").truncate();
  });
  it("Successful register returns a token and correct status code", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ email: "Replate29990", password: "Test" });
    expect(res.body).toHaveProperty("token");
    expect(res.status).toBe(201);
  });

  
  it("Invalid credentials return correct status code", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "Badlogin", password: "Test" });
    expect(res.status).toBe(401);
  });

  it("Successful login returns correct status code", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    expect(res.status).toBe(200);
  });

});
