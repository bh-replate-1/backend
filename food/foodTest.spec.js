const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

//get
//post
//delete .. id

describe("Food Router Testing", () => {
  beforeAll(async () => {
    await db("food").truncate();
  });
  it("Returns correct unauthorized status code", () => {
    return request(server)
      .get("/api/food")
      .then((res) => {
        expect(res.status).toEqual(401);
      });
  });

  it("Posts a new food item", async () => {
    const login = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    const res = await request(server)
      .post("/api/food")
      .send({
        food_item: "TEST!",
        quantity: 1,
        use_by_date: "8/30/20",
        refrigerate: 1,
        completed: 0,
        user_id: 1,
      })
      .set("Authorization", login.body.token);
    expect(res.status).toEqual(201);
  });

  it("Gets access to food list", async () => {
    const login = await request(server)
      .post("/api/auth/login")
      .send({ email: "Replate29990", password: "Test" });
    const res = await request(server)
      .get("/api/food")
      .set("Authorization", login.body.token);
    expect(res.status).toEqual(200);
    expect(res.type).toBe("application/json");
    const foodItems = await db("food");
    expect(foodItems[0]).toHaveProperty("food_item", "TEST!");
  });

  //Delete test assumes the previously posted item is id: 1; so beforeall truncate for this (and all) test suite would be good

  //OUTDATED TEST .. checks for toggle complete

  // it("Toggles a food item as completed", async () => {
  //   const login = await request(server)
  //     .post("/api/auth/login")
  //     .send({ email: "Replate29990", password: "Test" });
  //   const res = await request(server)
  //     .delete("/api/food/6")
  //     .send({
  //       food_item: "Salad",
  //       use_by_date: "8/30/20",
  //       user_id: 1,
  //     })
  //     .set("Authorization", login.body.token);
  //   expect(res.body.completed).toBe(1);
  // });
});
