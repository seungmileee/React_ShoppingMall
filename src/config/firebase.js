import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// 구글 ouath 로그인
export async function login() {
  return signInWithPopup(auth, provider) //
    .then((result) => {
      const user = result.user;
      // console.log(user);
      return user;
    })
    .catch((error) => console.log(error));
}

// 구글 oauth 로그아웃
export async function logout() {
  return signOut(auth).catch((error) => console.log(error));
}

// 사용자의 상태가 변경될 때마다 콜백 함수를 호출
export function userStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 사용자가 로그인한 경우
    /*onAuthStateChanged 메서드는 한번만 useEffect에 넣어주면 계속 관찰함 (user 상태 변화(로그인 or 로그아웃) 알아차리는 메서드) */
    callback(user);
  });
}
