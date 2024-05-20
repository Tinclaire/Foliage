import db from '../../../firestore/firestore';
import auth from '@react-native-firebase/auth';

export const register = async (email: string, password: string) => {
  try {
    console.log('registering');
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    const user = userCredential.user;

    const defaultServiceLevel = 'bronze';

    // Store additional user data in Firestore
    await db.collection('users').doc(user.uid).set({
      service_level: defaultServiceLevel,
    });

    console.log('User signed up and additional data stored.');
  } catch (error: any) {
    // Here follows official example
    // TODO: customized error messages
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  }
};
