import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import { FIREBASE } from './config';

firebase.initializeApp(FIREBASE);
