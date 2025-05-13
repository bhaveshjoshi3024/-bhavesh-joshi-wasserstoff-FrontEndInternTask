import { useRef } from 'react'
import useBroadcast from '../utils/useBroadcast'

// useRef gives us way to directly access Dom Element
// useBroadcast for syncing across tabs

export default function Editor({ username }) {
  const editorRef = useRef(null)
  const { lastEditedBy } = useBroadcast(editorRef, username)

  return (
    <div className="space-y-4">
      <div
        ref={editorRef}
        contentEditable
        className="w-full h-64 p-4 border rounded-lg focus:outline-none bg-white"
        placeholder="Start typing..."
      />
      {lastEditedBy && (
        <p className="text-xs text-gray-500">
          Last edited by: <span className="font-semibold">{lastEditedBy}</span>
        </p>
      )}
    </div>
  )
}


