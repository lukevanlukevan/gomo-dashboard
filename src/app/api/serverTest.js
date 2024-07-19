const { MongoClient } = require("mongodb")

async function getServer() {
	const client = new MongoClient(
		"mongodb+srv://lukevrensburg:uD2SioSpRaKppA0b@g0m0.wllquzk.mongodb.net/"
	)

	await client.connect()

	// Choose a name for your database
	const database = client.db("gomo")

	// Choose a name for your collection
	const collection = database.collection("serverInfo")
	const allData = await collection.find({}).toArray()

	console.log(allData)
}
getServer()
