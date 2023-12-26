import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm'

const projectID = "cff24502-11c8-4682-b86a-0800a08988cc";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  
  return (
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}   
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;