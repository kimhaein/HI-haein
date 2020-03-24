import Vue from "vue";
import * as firebase from "firebase";
import "firebase/firestore";
import { FIREBASE_CONFIG } from "./config";

firebase.initializeApp(FIREBASE_CONFIG);
