import { useState } from "react"
import axios from "axios";
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const authObject = {'Project-ID':"cff24502-11c8-4682-b86a-0800a08988cc", 'User-Name':username,'User-Secret':password}

    try {
      await axios.get('https://api.chatengine.io/chats', {headers: authObject});
    
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      
      window.location.reload();
    } catch(error) {
      setError('糟糕，錯誤的賬號密碼')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">說約</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
          <div align="center">
            <button type="submit" className="button">
              <span>開始聊天</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;