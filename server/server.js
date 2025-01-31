//import our packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const dbConnectionString = process.env.DATABASE_URL;

const db = new pg.Pool({
  connectionString: dbConnectionString,
});
console.log("DATABASE_URL:", process.env.DATABASE_URL); // lets check if it see my db URL? It does(
//Initialise our express server
const app = express();

//Tell the server to manipulate data in JSON format
app.use(express.json());

//Tell our server to share resources
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
app.get("/", function (req, res) {
  res.json({ message: "This is the root route. I am alive!" });
});

////Will use try and catch to display error message if server is not respondinf
// Route to READ all client info from the database
app.get("/clients", async (req, res) => {
  try {
    // Query the database
    const result = await db.query(`SELECT * FROM clients`);

    // Parse the values into JSON and send response
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Server does not want to talk to you" });
  }
});

//I want to CREATE a new entry in the clients table
app.post("/add-client", (req, res) => {
  //we need an element that stores the new data we are adding to the database
  //Our request parameter has a body object to store this new data
  const newData = req.body;
  //I query the database
  const query = db.query(
    `INSERT INTO clients (client_name, comment) VALUES($1, $2);`,
    [newData.client_name, newData.comment]
  );

  res.json({ message: "Data sent to the database!" });
});
