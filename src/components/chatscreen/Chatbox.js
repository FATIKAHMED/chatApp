
import {useState, useRef, useEffect} from 'react'
import './Chat.css'
import GIF from '../../Assets/gif.png'
import attachment from '../../Assets/attachment.png'

function Chat() {
  const [chat, setChat] = useState(['sample chat'])
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);
  const chatList = chat.map((chat) => <li className='chatbubble'>{chat} </li>)
 

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      if(event.target.value){
      setChat ([...chat, event.target.value ])
     
      // console.log(chatList)
      event.target.value = ''
    }
    }
  }

  
  return (
    <div className="App">
      <div className =  'Screen'> 
           
          <div className = 'Chat'>
     
         
          
          <ul>
         
            {chatList}
          </ul>
           </div>
           <div ref={listRef}/>
      
     </div>
          <input type = 'text' placeholder = 'Type an email respose' className = 'input' onKeyPress= {handleKeyDown}/>
            <div className='below-input'>
              <img className='gif' src = {GIF} alt="gif"/>
              <img className='attachment' src = {attachment} alt="attachment"/>
              <span className='below-input-text'>Use k for shortcuts</span>
            </div>
    </div>
  );
}

export default Chat;
