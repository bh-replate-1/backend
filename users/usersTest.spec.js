const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

describe("User Router Testing", () => {
  it.skip("Returns correct unauthorized status code", () => {
    return request(server)
      .get("/api/users")
      .then((res) => {
        expect(res.status).toEqual(401);
      });
  });

  it.skip("Gets access to users list", async () => {
    const login = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    const res = await request(server)
      .get("/api/users")
      .set("Authorization", login.body.token);
    expect(res.status).toEqual(200);
    expect(res.type).toBe("application/json");
  });

  it.skip("Displays User 1's information", async () => {
    const login = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    const res = await request(server)
      .get("/api/users/1")
      .set("Authorization", login.body.token);
    expect(res.status).toEqual(200);
    expect(res.body.id).toBe(1);
    expect(res.body).toHaveProperty("email", "Replate29990");
  });

  it.skip("Edit User 1's information", async () => {
    const login = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    const res = await request(server)
      .put("/api/users/1")
      .send({
        name: "Rohith",
        email: "RohithisCool11!!",
        address: "Hello",
      })
      .set("Authorization", login.body.token);
    expect(res.status).toEqual(200);
    expect(res.body.id).toBe(1);
    expect(res.body.name).toBe("Rohith");
    expect(res.body).toHaveProperty("email", "RohithisCool11!!");
  });
});
