import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let navbar = [
    {id: 1, select: 'Profile', address: 'profile'},
    {id: 2, select: 'Messages', address: 'dialogs'},
    {id: 3, select: 'News', address: 'news'},
    {id: 4, select: 'Music', address: 'music'},
    {id: 5, select: 'Settings', address: 'settings'}
]

let posts = [
    {id: 1, message: 'tincidunt nunc pulvinar sapien et', like: 13},
    {id: 2, message: 'tellus molestie nunc non blandit', like: 3},
    {id: 3, message: 'donec ac odio tempor orci', like: 7},
    {id: 4, message: 'lacus sed viverra tellus in', like: 21},
    {id: 5, message: 'mauris a diam maecenas sed', like: 16}
]

let dialogs = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Svetlana'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: 'tincidunt nunc pulvinar sapien et'},
    {id: 2, message: 'tellus molestie nunc non blandit'},
    {id: 3, message: 'donec ac odio tempor orci'},
    {id: 4, message: 'lacus sed viverra tellus in'},
    {id: 5, message: 'mauris a diam maecenas sed'},
    {id: 6, message: 'euismod quis viverra nibh cras'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} navbar={navbar}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
