import { writable } from 'svelte/store';

export const userStore = writable();

export const charSession = writable(
  {

  }
);

interface ChatSession {
  id: string;
  user: string;
}

interface Chat {
  id: string;
  sender: string;
  message: string;
  createdAt: string;
}

interface User {
  
}