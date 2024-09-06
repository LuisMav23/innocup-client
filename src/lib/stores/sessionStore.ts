import { writable } from 'svelte/store';

export const sessionUser = writable(null);
export const sessionUserHealthInfo = writable(null);
export const sessionUserConacts = writable(null);

export const setSessionUser = (user: any) => {
  sessionUser.set(user);
}

export const setSessionUserHealthInfo = (healthInfo: any) => {
  sessionUserHealthInfo.set(healthInfo);
}

export const setSessionUserConacts = (contacts: any) => {
  sessionUserConacts.set(contacts);
}