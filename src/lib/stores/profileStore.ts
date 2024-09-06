import { writable } from 'svelte/store';

export const profileStore = writable<Profile>();

export const setProfile = (profile: Profile) => {
  profileStore.set(profile);
}

export interface Profile {
  name:string;
  email: string;
  birthday: string;
  phonenumber: string;
  address: string;
  profilePicture: string;
}