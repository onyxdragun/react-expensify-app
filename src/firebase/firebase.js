import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:93177519571:web:dcd396e8fc4245805f2326"
};

const googleAuthProvider = new GoogleAuthProvider();

const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase);
const dbRefExpenses = ref(database, 'expenses');

export { firebase, googleAuthProvider, dbRefExpenses, database as default }

//
//  Code below is from learning Firebase
//

//child_removed
// onChildRemoved(dbRefExpenses, (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// onChildChanged(dbRefExpenses, (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// get(dbRefExpenses)
//   .then((snapshot) => {
//     if (snapshot.exists) {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//     }
//   })
//   .catch((error) => {
//     console.log('Error ', error);
//   });

// onValue(dbRefExpenses, (snapshot) => {
//   const expenses = [];

//   if (snapshot.exists) {
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...snapshot.val()
//       });
//     });
//     console.log(expenses);
//   }
// });


// Setup expenses with 3 items
// description, note, amount, createdAt

// push(dbRefExpenses, {
//   description: 'Car Payment',
//   note: '',
//   amount: 35000,
//   createdAt: 50000
// });



// push(dbRef, {
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// Challenge set up a subscription for the following:
// Console out: Name is a Job at Company

// onValue(dbRef, (snapshot) => {
//   if (snapshot.exists) {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company} `)
//   } else {
//     console.log('No data available');
//   }
// }, (error) => {
//   console.log('Error when fetching data: ', error);
// });

// setTimeout(() => {
//   update(dbRef, {
//     'job/title': 'Unemployed'
//   });
// }, 3500);

// setTimeout(() => {
//   update(dbRef, {
//     'job/title': 'Developer'
//   });
// }, 7000);

// setTimeout(() => {
//   off(dbRef);
//   update(dbRef, {
//     'job/title': 'CEO'
//   });
// }, 10500);

// onValue(ref(database), (snapshot) => {
//   if (snapshot.exists) {
//     const data = snapshot.val();
//     console.log('Updated data: ', data);
//   } else {
//     console.log('No Data available');
//   }
// }, (error) => {
//   console.error('Error listening for changes: ', error);
// });

// setTimeout(() => {
//   update(ref(database), {
//     age: 55
//   });
// }, 3500);

// setTimeout(() => {
//   off(subscription);
//   update(ref(database), {
//     age: 65
//   });
// }, 3500);



// get(ref(database))
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// set(ref(database), {
//   message: 'Firebase is connected!',
//   name: 'Tyler Ingram',
//   age: 44,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Courtenay',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data written successfully');
// }).catch((error) => {
//   console.log("Error writing data: ", error);
// });

// remove(ref(database, 'isSingle')).then(() => {
//   console.log('Removed Field');
// }).catch((error) => {
//   console.log("Error on remove: ", error);
// });

// update(ref(database), {
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'

// });