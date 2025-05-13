import { useState, useEffect } from 'react'

export default function UserList({ username }) {
  const [activeUsers, setActiveUsers] = useState([username])

  // activeUsers keeps track of everyone in the session 

  useEffect(() => {
    if (typeof window === 'undefined') return

    //create a channel named 'user-presence'
    const channel = new BroadcastChannel('user-presence')
    
    // Announce that I joined
    channel.postMessage({ type: 'join', user: username })
    
    const handleMessage = (e) => {
      if (e.data.type === 'join') {
        setActiveUsers(prev => [...new Set([...prev, e.data.user])])
        // set used to remove duplicates 
      }
    }
    
    channel.addEventListener('message', handleMessage)
    
    return () => {
      // sending leave message close the channel 
      channel.postMessage({ type: 'leave', user: username })
      channel.close()
    }
  }, [username])

  return (
    <div className="mb-4 space-y-2">
      <p className="text-sm">
        You are: <span className="font-bold text-blue-600">{username}</span>
      </p>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Active users:</span>
        {activeUsers.map((user, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-gray-200"
          >
            {user}
          </span>
        ))}
      </div>
    </div>
  )
}