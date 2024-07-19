"use client"

import { useState, useEffect } from "react"

export default function Page({ params }) {
	const [users, setUsers] = useState([])
	const [servers, setServers] = useState([])
	const [serverId, setServerID] = useState("")

	const fetchUsers = async () => {
		const response = await fetch("/api/getUsers")

		if (response.ok) {
			const data = await response.json()
			setUsers(data)
			console.log(users)
		} else {
			alert("Failed to fetch data!")
			console.log(response)
		}
	}

	const fetchServers = async () => {
		const response = await fetch("/api/getServer")

		if (response.ok) {
			const data = await response.json()
			setServers(data)
			console.log(users)
		} else {
			alert("Failed to fetch data!")
			console.log(response)
		}
	}

	const slug = params.serverid

	useEffect(() => {
		fetchUsers()
		fetchServers()
	}, [])
	return (
		<main className="flex h-screen min-h-screen flex-col items-center justify-between gap-3 p-4">
			<div className="grid w-full grid-cols-3 gap-2 rounded-xl bg-slate-400 p-5">
				{users.map((user, i) => {
					console.log(user)
					console.log(servers)
					if (!user.servers) return
					if ((!slug) in user.servers) return

					let userName = user.username || "Missing cached usename"

					return (
						<div className="rounded-md bg-white p-4">
							<a key={i} className="text-black">
								{userName}
							</a>
							<h1 className="text-black">
								{/* Count: {user.servers[slug].count} */}
							</h1>
						</div>
					)

					// let sName
					// try {
					// 	sName = user.servers[slug]
					// } catch (error) {
					// 	sName = user.servers[slug]
					// }
					// return (
					// 	<a
					// 		// onClick={() => setServerID(server.serverId)}
					// 		key={i}
					// 		className="text-black"
					// 	>
					// 		{user.userName || "Unknown"}
					// 	</a>
					// )
				})}
			</div>
			{/* <div className="flex h-full w-full flex-col items-center rounded-xl bg-white p-5"></div> */}
		</main>
	)
}
