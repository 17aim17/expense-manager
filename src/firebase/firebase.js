import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// ========================
// Arrays in Firebase
// ========================

// const firebaseNote = {
//   notes: {
//     asadbgf: {
//       title: 'First Note',
//       body: 'sdfghj'
//     },
//     srfdlkkmlglm: {
//       title: 'First Note',
//       body: 'sdfghj'
//     }
//   }
// };

// database.ref('expenses').push({
//   description: '1',
//   amout: 123,
//   notes: ''
// });
// database.ref('expenses').push({
//   description: '2',
//   amout: 134,
//   notes: ''
// });
// database.ref('expenses').push({
//   description: '3',
//   amout: 230,
//   notes: ''
// });

// database.ref('notes').push({
//   title: 'To Do one',
//   body: 'hello World'
// });

// database.ref('notes/-Le79kZX7i-JJeZUIOaY').update({
//   title: 'yadayas df',
//   body: 'sdfnknk'
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     // console.log(snapshot.val());
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// Subscription in Arrays
// =========================
// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   // console.log(snapshot.val());
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log('child removed');
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('child changed');
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log('child added');
//   console.log(snapshot.key, snapshot.val());
// });

// ========================
// Read
// ========================

// database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   e => {
//     console.log('Something went Wrong', e);
//   }
// );

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// ========================
// Create
// ========================
// database
//   .ref()
//   .set({
//     name: 'Ashish Kumar',
//     age: 18,
//     stressLevel: 5,
//     job: {
//       title: 'Software developer',
//       company: 'Facebook'
//     },
//     isSingle: false,
//     location: {
//       city: 'Las Vegas',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved!');
//   })
//   .catch(e => {
//     console.log('This failed.', e);
//   });

// ========================
// Update
// ========================
// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then(() => {
//     console.log('Update Successfully');
//   })
//   .catch(e => {
//     console.log('Something went Wrong', e);
//   });

// ========================
// Remove
// ========================
// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(e => {
//     console.log('Did not remove data', e);
//   });

// database.ref('isSingle').set(null);
