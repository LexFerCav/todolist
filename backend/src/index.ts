import express from "express";
import cors from "cors";
import routes from "./router";
import { setupDatabases } from "./db";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
routes(app);
setupDatabases();
// CRUD TODO

// PROTECTED ROUTES (jwt)
// app
//   .post("/", (req, res) => {
//     const content = req.body;
//     res.json({ content });
//   })
//   .get("/todo", (req, res) => {
//     // get all todos from DB
//   })
//   .get("/todo/deletes", (req, res) => {
//     // get all soft deleted todos from DB
//   })
//   .get("/todo/all-count", (req, res) => {
//     // get all todos count from DB
//   })
//   .get("/todo/all-deletes-count", (req, res) => {
//     // get all soft deleted todos count from DB
//   })
//   .post("/todo", (req, res) => {
//     const { headers, body, query, params } = req;
//     res.json({ headers, body, query, params });
//     // 1 - validate the request (validate the request body)
//     // 2 - create a new todo on DB
//     // 3 - return the new todo
//   })
//   .put("/todo/:id", (req, res) => {
//     // 1 - validate the request (valid TODO ID/existence)
//     // 2 - update the todo on DB
//     // 3 - return the updated todo
//   })
//   .delete("/todo/:id", (req, res) => {
//     // 1 - validate the request (valid TODO ID/existence)
//     // 2 - soft delete the todo on DB
//     // 3 - return success message
//   })
//   .delete("/todo/:id/hard", (req, res) => {
//     // 1 - validate the request (valid TODO ID/existence)
//     // 2 - hard delete the todo on DB
//     // 3 - return success message
//   });

// // Sign In
// // PROTECTED ROUTE (jwt)
// app.post("/signin", (req, res) => {
//   // 1 - validate the request (validate the request body)
//   // 2 - check if the user exists
//   // 3 - check if the password is correct
//   // 4 - return the user
// });

// // Sign Up
// app.post("/signup", (req, res) => {
//   // 1 - validate the request (validate the request body)
//   // 2 - create a new user on DB (password should be hashed with bcrypt)
//   // 3 - return the new user
// });

// // Forgot Password
// app.post("/forgot-password", (req, res) => {
//   // 1 - validate the request (validate the request body)
//   // 2 - check if the user exists
//   // 3 - send an email with a link to reset the password
// });

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
