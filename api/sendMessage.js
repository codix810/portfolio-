import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
console.log("📦 MONGO_URI = ", uri); // مهم

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidCertificates: true,
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

    const result = await db.collection("messages").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    console.log("✅ Insert result:", result.insertedId);
    return res.status(200).json({ message: "Message stored successfully!" });
  } catch (error) {
    console.error("🔥🔥🔥 REAL ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
}
