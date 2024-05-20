import auth from '@react-native-firebase/auth';

export const logout = async () => {
  try {
    console.log('logging out');
    const logoutInfo = await auth().signOut();
    console.log(logoutInfo);
  } catch (error: any) {
    console.log(error);
  }
};
