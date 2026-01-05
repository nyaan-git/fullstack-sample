import { useState, useEffect } from 'react'

type Message = {
  id: number
  content: string
}

function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')

  // メッセージ一覧を取得
  const fetchMessages = async () => {
    const response = await fetch('http://localhost:8080/api/messages')
    const data = await response.json()
    setMessages(data)
  }

  // 初回読み込み時に取得
  useEffect(() => {
    fetchMessages()
  }, [])

  // メッセージを追加
  const addMessage = async () => {
    if (!newMessage) return

    await fetch('http://localhost:8080/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newMessage })
    })

    setNewMessage('')
    fetchMessages()
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>メッセージアプリ</h1>

      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button onClick={addMessage}>送信</button>
      </div>

      <h2>メッセージ一覧</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default App