import { writable } from 'svelte/store';

export const sessionUser = writable({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: 0,
    address: "",
    password: "",
    profilePicture: "",
    createdAt: 0
});
export const sessionUserHealthInfo = writable({
  bloodType: "",
  medicalRecords: [],
  medicalDocuments: [],
  userId: "",
  medications: [],
  healthRisks: [],
  chronicConditions: [],
  allergies: [],
  pastSurgeries: [],
  id: ""
});
export const sessionUserConacts = writable<UserContacts[]>(
);

interface UserContacts {
  id: string;
  name: string;
  phoneNumber: string;
  relationship: string;
  createdAt: number;
}

export const setSessionUser = (user: any) => {
  sessionUser.set(user);
}

export const setSessionUserHealthInfo = (healthInfo: any) => {
  sessionUserHealthInfo.set(healthInfo);
}

export const setSessionUserConacts = (contacts: any) => {
  sessionUserConacts.set(contacts);
}