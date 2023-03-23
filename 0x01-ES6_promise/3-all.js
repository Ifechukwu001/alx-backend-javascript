import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((data) => {
    const photo = data[0].body;
    const first = data[1].firstName;
    const last = data[1].lastName;

    console.log(`${photo} ${first} ${last}`);
  }).catch(Error('Signup system offline'));
}
