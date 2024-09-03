import { writable } from 'svelte/store';

export const profileStore = writable();

export const setProfile = (profile: object) => {
  profileStore.set(profile);
}

export const getProfile = () => {
  return profileStore;
}