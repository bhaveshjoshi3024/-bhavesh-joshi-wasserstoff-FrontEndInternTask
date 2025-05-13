import { useEffect, useState } from 'react'

export default function useBroadcast(editorRef, username) {
  const [lastEditedBy, setLastEditedBy] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined' || !editorRef.current) return

    const channel = new BroadcastChannel('collab-editor')
    // user types and updated text are typed through collab editor channel 

    const handleInput = () => {
      channel.postMessage({
        content: editorRef.current.innerHTML,
        user: username,
        timestamp: new Date().toLocaleTimeString()
      })
    }

    const handleMessage = (e) => {
      if (e.data.user !== username) {
        editorRef.current.innerHTML = e.data.content
        setLastEditedBy(`${e.data.user} at ${e.data.timestamp}`)
        // update your editor with their content 
      }
    }

    const editor = editorRef.current
    editor.addEventListener('input', handleInput)
    channel.addEventListener('message', handleMessage)

    return () => {
      editor.removeEventListener('input', handleInput)
      channel.close()
      // clean to avoid memory leaks 
    }
  }, [username])

  return { lastEditedBy }
}
