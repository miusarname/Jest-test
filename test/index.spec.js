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
