import db from '../../../firestore/firestore';
import auth from '@react-native-firebase/auth';

export const login = async (email: string, password: string) => {
  try {
    console.log(email, password);
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;
    console.log('User signed in:', user.uid);

    // Get JWT
    const getIdToken = async () => {
      const currentUser = await auth().currentUser;
      if (currentUser) {
        const idToken = await currentUser.getIdToken();
        console.log('ID Token: ', idToken);
        return idToken;
      }
      throw new Error('User not authenticated');
    };
    const token = getIdToken();

    await db
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.data());
      });
  } catch (error: any) {
    // TODO: Handle error
    console.log(error);
  }
};
