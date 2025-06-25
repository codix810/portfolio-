import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("❌ MONGO_URI is undefined!");
  return res.status(500).json({ message: "MONGO_URI is not set!" });
}

const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const client = await clientPromise;
    const db = client.db("houdaDB");

    await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return res.status(200).json({ message: "Message stored successfully!" });
  } catch (error) {
    console.error("🔥 REAL ERROR:", error);
    return res.status(500).send("A server error has occurred");
  }
}
