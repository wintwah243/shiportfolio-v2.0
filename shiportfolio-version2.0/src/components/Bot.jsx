import React, { useEffect, useRef, useState } from 'react'
import { HiChevronDown } from 'react-icons/hi';
import { MdModeComment, MdClose } from "react-icons/md";
import ChatbotIcon from './ChatbotIcon';
import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { MyInfo } from '../utils/MyInfo';
import { backupInfo } from '../utils/backup';

const Bot = () => {
  const [chatHistory, setChatHistory] = useState([{
    hideInChat: true,
    role: "model",
    text: MyInfo
  }]);
  const [showChatBot, setShowChatBot] = useState(false);
  const [apiFailed, setApiFailed] = useState(false);
  const chatBodyRef = useRef();

  // Fallback responses when API fails
  const fallbackResponses = [
    "I'm sorry, I'm having trouble connecting to my knowledge base right now.",
    "I'm sorry, Error occurs while answering your question."
  ];

  const getRandomFallback = () => {
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Typing..."), { role: "model", text, isError }]);
    }

    // If API previously failed, use fallback immediately
    if (apiFailed) {
      updateHistory(`${getRandomFallback()} ${backupInfo}`);
      return;
    }

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      
      if (!response.ok) {
        // If API limit reached or other error, switch to fallback
        setApiFailed(true);
        throw new Error(data.error?.message || "API limit reached");
      }

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);

    } catch (error) {
      // Use fallback response when API fails
      setApiFailed(true);
      updateHistory(`${getRandomFallback()} ${backupInfo}`, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className={`container ${showChatBot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatBot(prev => !prev)} id="chatbot-toggler">
        <span><MdModeComment /></span>
        <span><MdClose /></span>
      </button>

      <div className='chatbot-popup'>
        <div className='chat-header'>
          <div className='header-info'>
            <ChatbotIcon />
            <h2 className='logo-text'>Shi's Chatbot</h2>
          </div>
          <button onClick={() => setShowChatBot(prev => !prev)}><HiChevronDown /></button>
        </div>

        <div ref={chatBodyRef} className='chat-body'>
          <div className='message bot-message'>
            <ChatbotIcon />
            <p className='message-text'>
              Hey there 👋 <br /> I’m here to help you with fun questions and keep things light and
              entertaining. What would you like to ask about 'shi' ?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>

        <div className='chat-footer'>
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  )
}

export default Bot;
