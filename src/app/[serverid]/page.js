"use client"

import { useState, useEffect } from "react"

export default function Page({ params }) {
	const [users, setUsers] = useState([])
	const [servers, setServers] = useState([])
	const [serverName, setServerName] = useState("")

	const fetchUsers = async () => {
		const response = await fetch(`/api/getUsers/${slug}`)

		if (response.ok) {
			const data = await response.json()
			setUsers(data)
		} else {
			alert("Failed to fetch data!")
			console.log(response)
		}
	}

	const fetchServers = async () => {
		const serverResponse = await fetch("/api/getServer")

		if (serverResponse.ok) {
			const data = await serverResponse.json()
			data.map((server, index) => {
				console.log(server)
				if (server.serverId == slug) {
					setServerName(server.serverName)
				}
			})
			setServers(data)
		} else {
			alert("Failed to fetch data!")
			console.log(serverResponse)
		}
	}

	const slug = params.serverid

	useEffect(() => {
		fetchServers()
		fetchUsers()
	}, [])
	return (
		<main className="flex h-screen flex-col items-center justify-start gap-2 bg-gray-50 p-2">
			{/* <div className="grid h-full w-full auto-rows-min grid-cols-4 gap-4 rounded-3xl bg-slate-400 p-4"> */}
			<div className="flex w-full flex-col gap-2 rounded-xl bg-gray-200 p-4 text-black">
				<h1 className="text-2xl font-bold"> {serverName}</h1>
			</div>

			<div className="flex w-full flex-col gap-2 rounded-xl bg-gray-200 p-2 text-black">
				{users
					.sort((a, b) => b.count - a.count)
					.map((user, i) => {
						return (
							<div className="max-h-32 min-w-max rounded-md border bg-white p-4 shadow-sm">
								<p key={i} className="text-l font-bold">
									{user.username ||
										user.userId +
											" (send a gm to update name)"}
								</p>
								<h1 className="">
									Greet count: {user.count || 0}
								</h1>
								<h1 className="">Streak: {user.streak || 0}</h1>
								<h1 className="">
									First of the day: {user.first || 0}
								</h1>
							</div>
						)
					})}
			</div>
			{/* <div className="flex h-full w-full flex-col items-center rounded-xl bg-white p-5"></div> */}
		</main>
	)
}
