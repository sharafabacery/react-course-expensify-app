import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const dataBase = firebase.database()

const googleAuthProvider=new firebase.auth.GoogleAuthProvider()


export {firebase,dataBase as default,googleAuthProvider}



// dataBase.ref('notes').push({
//     title:'to do 2',
//     body:'go to body 2'
// })
//dataBase.ref('notes/-MFHH8N3dMcegFi4n5cp').remove()

// dataBase.ref('expenses').push(expenses[1])
// dataBase.ref('expenses').push(expenses[0])
// dataBase.ref('expenses').push(expenses[2])

// dataBase.ref('expenses')
//         .once('value')
//         .then((snapshot)=>{
//             const expensesArray=[]
//             snapshot.forEach((childsnapshot)=>{
//                 expensesArray.push({
//                     id:childsnapshot.key,
//                     ...childsnapshot.val()
//                 })
//             })
//             console.log(expensesArray)
//         }
//         )

// dataBase.ref('expenses').on('value',(snapshot)=>{
//     const expensesArray=[]
//     snapshot.forEach((childsnapshot)=>{
//         expensesArray.push({
//             id:childsnapshot.key
//             ,...childsnapshot.val()
//         })
//     })
//     console.log(expensesArray)
// })
// dataBase.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// dataBase.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })

// dataBase.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })
// setTimeout(()=>{
//     dataBase.ref('expenses').push(expenses[2])
// },5000)
// dataBase.ref('location')
// .once('value')
// .then((snapShot)=>{const val=snapShot.val()
// console.log(val)})
// .catch(()=>{console.log('error')})

// const onValueChange=dataBase.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// },(e)=>{
//     console.log('not working')
// })

// setTimeout(()=>{
//     dataBase.ref().update({age:23})
// },2500)
// setTimeout(()=>{
//     dataBase.ref().off(onValueChange)
// },5000)
// setTimeout(()=>{
//     dataBase.ref().update({age:24})
// },10000)
//all database equal that object
//in root of db
// dataBase.ref().set({
//     name: 'sharaf',
//     age: 20,
//     stressLevel:5,
//     job:{title:'software developer ',company:'google'},
//     location: {
//         city: 'alexandria',
//         country: 'egypt'
//     }
// }).then(()=>{
//     console.log('data is saved')
// }).catch((e)=>{
//     console.log('data isnot saved',e)
// })
//some sort of update
// dataBase.ref('age').set(21)
// dataBase.ref('location/city').set('cairo')
// dataBase.ref('attributes').set({
//     height: 180,
//     weight: 88
// }).then(()=>{console.log('ok')})
//    .catch(()=>{console.log('not ok')})

// dataBase.ref('isSingle').remove()
//     .then(()=>{console.log('removed')})
//     .catch(()=>{console.log('not removed')})

// dataBase.ref().update({
//    'job/company':'Amazon',
//    stressLevel:9
//    ,'location/city':'seattle'
//    ,'location/country':'USA'
// })

// dataBase.ref().on('value',(snapshot)=>{
//    const{name,job}=snapshot.val() 
//    console.log(`${name} is ${job.title} in ${job.company}`)


// })
