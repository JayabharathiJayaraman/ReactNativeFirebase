import {FirebaseApp, initializeApp} from "firebase/app";
import {getDatabase, onValue, ref, set} from "firebase/database";
import {doc, getFirestore, setDoc} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4OqtAsDMm6HY68JBQl6VZD7Z7caeFXto",
    authDomain: "fantasticexpoproject.firebaseapp.com",
    databaseURL: "https://fantasticexpoproject-default-rtdb.firebaseio.com",
    projectId: "fantasticexpoproject",
    storageBucket: "fantasticexpoproject.appspot.com",
    messagingSenderId: "130398239135",
    appId: "1:130398239135:web:6910b827ea0b38c89125aa",
    measurementId: "G-VGZNG8F8HD"
  };

  let app: FirebaseApp;
  export const fbInit = () => {
    app = initializeApp(firebaseConfig);
    console.log(app);
  };

  export const setScoreRTDB = (userId: string, score: number) =>{
    const db = getDatabase();
    const reference = ref(db,"users/"+ userId);
    set (reference,{
      userId:userId,
      score:score
    });
  };

export const subscribeToUserRTDB  = (
  userId:string,
  callback:(score:number) => void
  )=>{
  const db = getDatabase();
  const reference = ref(db,"users/"+ userId);
  onValue(reference,(snapshot)=>{
    try{
    callback(snapshot.val().score)
  }
  catch(error){
    setScoreRTDB(userId,0);
  }
  });
};


export const setScoreFB = (userId: string, score: number) =>{
  const db = getFirestore();
 setDoc(doc(db,"users",userId),{score: score});
 
};