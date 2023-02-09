import app from "../src/app.js";
import request from "supertest";

describe("GET /task", () => {
  test("should respond with a 200 status code", async () => {
    const resp = await request(app).get("/task").send();
    expect(resp.statusCode).toBe(200);
  });

  test("should response with an array", async () => {
    const resp = await request(app).get("/jeson").send();
    expect(resp.body).toBeInstanceOf(Array);
  });
});

describe("POST /task", () => {
  //Acordandome los test proximos por aca

  test("should responde with a 200 status code", async () => {
    const response = await request(app).post("/task").send();
    expect(response.statusCode).toBe(200);
  });

  //Por arreglar ...
  test("should have a content-type :application/json in header", async () => {
    const responde = await request(app).post("/jeson").send();
    expect(responde.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  }); 

  //Expect respond a ≈id
  
  //Por arreglar **
  /* test('should respond with an task ID', async() => {
    const response = await request(app).post("/task").send({
        title:"title",
        description:"description"
    })
    expect(response.body.id).toBeDefined();
  }) */

  
});
