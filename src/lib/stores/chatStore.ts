import { writable } from 'svelte/store';

export const chatStore = writable({
  messages: [
    {
        sender: 'bot',
        message: 'Hello! How can I help you today?',
        position: true
    },
    {
        sender: 'user',
        message: 'I need help with my order',
        position: false
    }
  ]
});