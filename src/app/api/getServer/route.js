import { MongoClient } from "mongodb"

export async function GET(req) {
	const client = new MongoClient(process.env.MONGODB_URI)

	await client.connect()

	// Choose a name for your database
	const database = client.db("gomo")

	// Choose a name for your collection
	const collection = database.collection("serverInfo")
	const allData = await collection.find({}).toArray()

	return Response.json(allData)
}
