import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';
import { Component } from 'react';

const App = () => {
    return (
        <ChatEngine
            height = '100vh'
            projectID = '74c46303-e86d-4ed3-9018-e0b1194d7d43'
            userName = 'manav'
            userSecret = '12345'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;