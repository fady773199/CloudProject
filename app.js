// استبدل هذه الإعدادات ببيانات مشروعك من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCKQg-IQCW67AOb7kqgjwm5T2YrvowisyU",
  authDomain: "depcode-36b9c.firebaseapp.com",
  projectId: "depcode-36b9c",
  storageBucket: "depcode-36b9c.firebasestorage.app",
  messagingSenderId: "1046460133574",
  appId: "1:1046460133574:web:d219d46b9e05728cbe67c7",
  measurementId: "G-Z7LK8VQ0MT"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const statusMsg = document.getElementById('status-msg');

// وظيفة إنشاء الحساب
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        statusMsg.innerText = "تم إنشاء الحساب بنجاح في السحابة!";
        statusMsg.style.color = "green";
        
        // حفظ بيانات إضافية في Firestore (اختياري كدليل على استخدام قاعدة البيانات)
        db.collection("users").add({
            email: email,
            lastLogin: new Date()
        });
    })
    .catch((error) => {
        statusMsg.innerText = "خطأ: " + error.message;
        statusMsg.style.color = "red";
    });
}

// وظيفة تسجيل الدخول
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        statusMsg.innerText = "أهلاً بك! تم تسجيل دخولك بنجاح.";
        statusMsg.style.color = "blue";
    })
    .catch((error) => {
        statusMsg.innerText = "خطأ: " + error.message;
        statusMsg.style.color = "red";
    });
}