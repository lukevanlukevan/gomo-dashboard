"use client"

import { useState, useEffect } from "react"

export default function Home() {
	const [allData, setAllData] = useState([])
	const [users, setUsers] = useState()
	const [serverId, setServerID] = useState("")

	const fetchAllData = async () => {
		const response = await fetch("/api/getServer")

		if (response.ok) {
			const data = await response.json()
			setAllData(data)
			console.log(allData)
		} else {
			alert("Failed to fetch data!")
			console.log(response)
		}
	}

	useEffect(() => {
		fetchAllData()
		console.log(allData)
	}, [])

	return (
		<main className="flex h-screen min-h-screen flex-row items-center justify-between gap-3 p-4">
			<div className="flex h-full w-full basis-1/4 flex-col items-start gap-2 rounded-xl bg-white p-5">
				{allData.map((server, i) => {
					console.dir(server)
					return (
						<a
							key={i}
							className="text-black"
							href={"/" + server.serverId}
						>
							{server.serverName || "Missing Name"}
						</a>
					)
				})}
			</div>
			<div className="flex h-full w-full flex-col items-center rounded-xl bg-white p-5"></div>
		</main>
	)
}
