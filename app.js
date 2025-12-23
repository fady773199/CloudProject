const firebaseConfig = {
  apiKey: "AIzaSyCKQg-IQCW67AOb7kqgjwm5T2YrvowisyU",
  authDomain: "depcode-36b9c.firebaseapp.com",
  projectId: "depcode-36b9c",
  storageBucket: "depcode-36b9c.firebasestorage.app",
  messagingSenderId: "1046460133574",
  appId: "1:1046460133574:web:d219d46b9e05728cbe67c7",
  measurementId: "G-Z7LK8VQ0MT"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// وظيفة الدخول
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        goToHomePage(userCredential.user.email);
    })
    .catch((error) => {
        document.getElementById('msg').innerText = "خطأ في الدخول: " + error.message;
        document.getElementById('msg').style.color = "red";
    });
}

// وظيفة الانتقال للصفحة الرئيسية
function goToHomePage(email) {
    document.getElementById('auth-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
    document.getElementById('user-display').innerText = "مرحباً: " + email;
}

// وظيفة إنشاء حساب
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("تم إنشاء حسابك سحابياً!");
        goToHomePage(userCredential.user.email);
    })
    .catch((error) => {
        alert(error.message);
    });
}

// خروج
function logout() {
    auth.signOut().then(() => {
        location.reload();
    });
}