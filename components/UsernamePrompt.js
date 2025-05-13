import { useState, useEffect } from 'react'

export default function UsernamePrompt({ setUsername }) {
  const [localName, setLocalName] = useState('')

  useEffect(() => {
    const name = prompt("Enter your name:")
    setUsername(name || 'Guest')
    setLocalName(name || 'Guest')
  }, [])

  return (
    <div className="text-sm text-gray-500 mt-2">Logged in as: <span className="font-semibold">{localName}</span></div>
  )
}
