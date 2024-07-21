"use client"

import { useState, useEffect } from "react"

export default function Page({ params }) {
	const [users, setUsers] = useState([])
	const [servers, setServers] = useState([])
	const [serverId, setServerID] = useState("")

	const fetchUsers = async () => {
		const response = await fetch(`/api/getUsers/${slug}`)

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
		// fetchServers()
		console.log(users)
	}, [])
	return (
		<main className="flex h-screen min-h-screen flex-col items-center justify-between gap-3 p-4">
			<div className="grid w-full grid-cols-3 gap-4 rounded-3xl bg-slate-400 p-4">
				{users.map((user, i) => {
					return (
						<div className="rounded-xl bg-white p-4">
							<p
								key={i}
								className="w-full text-center text-black"
							>
								{user.username || user.userId}
							</p>
							<h1 className="text-black">Count: {user.count}</h1>
							<h1 className="text-black">
								Streak: {user.streak}
							</h1>
							<h1 className="text-black">Firsts: {user.first}</h1>
						</div>
					)
				})}
			</div>
			{/* <div className="flex h-full w-full flex-col items-center rounded-xl bg-white p-5"></div> */}
		</main>
	)
}
