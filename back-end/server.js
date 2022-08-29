import pg from "pg";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
//const port = process.env.PORT;
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.static("front-end"));
app.use(cors());

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production"
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
});

//GET REQUESTS //////////////////////////////////////////////////////////////////////
//all exercises
app.get("/fj/exercises", (req, res) => {
  pool.query(`SELECT * FROM exercises`).then((data) => {
    res.send(data.rows);
  });
});

//show journal log
app.get("/fj/:user/:log", (req, res) => {
  const logid = req.params.log;
  const username = req.params.user;
  pool
    .query(`SELECT * FROM journal WHERE logid =$1 AND username =$2`, [
      logid,
      username,
    ])
    .then((data) => {
      res.send(data.rows);
    });
});

//show all user
app.get("/fj/all", (req, res) => {
  pool.query(`SELECT * FROM users;`).then((data) => {
    res.send(data.rows);
  });
});

//GET REQUESTS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//////////////////////////////////////////////////////////////////////////////////////

//POST REQUESTS //////////////////////////////////////////////////////////////////////

//create new user
app.post("/fj/:user", (req, res) => {
  const username = req.params["user"];
  pool
    .query(
      `INSERT INTO users (
        name
    ) VALUES (
        $1
    );`,
      [username]
    )
    .then((result) => {
      res.send(result.rows[0]);
    });
});

// send lift to journal
app.post("/fj/:user/:log", (req, res) => {
  const logid = req.params["log"];
  const username = req.params["user"];
  const { name, sets, reps, info } = req.body;
  pool
    .query(
      `
  INSERT INTO journal (
    username,
    name,
    sets,
    reps,
    info,
    logId)
    VALUES(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6
    );`,
      [username, name, sets, reps, info, logid]
    )
    .then((result) => {
      res.send(result.rows[0]);
    });
});

//POST REQUESTS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//////////////////////////////////////////////////////////////////////////////////////

//DELETE REQUESTS ////////////////////////////////////////////////////////////////////

//delete journal log
app.delete("/fj/:user/:log", (req, res) => {
  const logid = req.params["log"];
  const username = req.params["user"];
  pool
    .query(`DELETE FROM journal WHERE logid =$1 AND username =$2`, [
      logid,
      username,
    ])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//delete all user's logs
app.delete("/fj/:user/all", (req, res) => {
  const username = req.params["user"];
  pool
    .query(`DELETE FROM journal WHERE username =$1;`, [username])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//DELETE REQUESTS ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//////////////////////////////////////////////////////////////////////////////////////

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
