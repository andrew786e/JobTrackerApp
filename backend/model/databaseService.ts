// Import the functions you need from the SDKs you need
import admin from "firebase-admin";
import {App} from "firebase-admin/app"
import serviceAccount from "../serviceAccountsKey.json";
import { ServiceAccount } from "firebase-admin";
import { jobDataField } from "../interface/firebaseClassInterface";
export class FireStoreDatabase{

  private db ;

  // Connects to Firestore Database
  public constructor(){
    const serviceAccountDetails : ServiceAccount = {
      projectId : serviceAccount.project_id ,
      clientEmail : serviceAccount.client_email,
      privateKey : serviceAccount.private_key
    } ;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountDetails) 
    }) 

    this.db = admin.firestore() ;
  }

  public async addJobInfoToSpecifiedCollection(nameOfCollection : string , hashOfJobPostion : string , nameOfJob : string){
    const jobInfo : jobDataField = {
      nameOfJob : nameOfJob
    } ;
    await this.db
    .collection(nameOfCollection)
    .doc(hashOfJobPostion)
    .set(jobInfo)
  }

  public testWriteCollection() {
    this.db.collection("Test")
      .doc('inspiration')
      .set({
        quote: "Yes"
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
}