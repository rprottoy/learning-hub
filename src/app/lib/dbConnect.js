const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
console.log(uri);
const dbName = process.env.DBNAME;

// export const collections = {
//   COURSES: "courses",
//   USERS: "users",
// };

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  console.log(dbName);
  try {
    const db = client.db(dbName);
    return db.collection(collectionName);
  } catch (e) {
    console.log(e);
  }
};
