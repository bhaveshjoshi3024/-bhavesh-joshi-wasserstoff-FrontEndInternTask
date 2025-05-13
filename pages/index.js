// useState,useEffect react hooks to store and react to data like username 
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// dynamic use to load component only on browser not during server-side rendering 
const UserList = dynamic(() => import('../components/UserList'), { ssr: false })
const Editor = dynamic(() => import('../components/Editor'), { ssr: false })
// userlist and editor component only on clientside bcz broadcastChannel doesn't work on server  

export default function Home() {
  const [username, setUsername] = useState(null)
  const [isClient, setIsClient] = useState(false)

  // isClient and typeof window ensures that code runs only on browser 

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined' && !username) {
      const name = prompt("Enter your username:") || 'Anonymous'
     
      setUsername(`${name}`)
    }
  }, [])

  if (!isClient) {
    return <div className="max-w-2xl mx-auto p-6">Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Real-Time Collaborative Editor</h1>
      {username && (
        <>
          <UserList username={username} />
          <Editor username={username} />
        </>
      )}
    </div>
  )
}


