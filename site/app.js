const firebaseConfig = {
    apiKey: "AIzaSyAvp59U1n13UUxeFDWbrhgC0U2sjSs8kyc",
    authDomain: "projeto2mibteste-e1f05.firebaseapp.com",
    projectId: "projeto2mibteste-e1f05",
    storageBucket: "projeto2mibteste-e1f05.appspot.com",
    messagingSenderId: "127447580623",
    appId: "1:127447580623:web:cd329d0df59e9269c89cba"
  };

  firebase.initializeApp(firebaseConfig);

  function logout(){
    firebase.auth().signOut().then(()=>{
        alert("Usuario deslogado");
    })
  }
/*
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuário logado com sucesso
            const user = userCredential.user;
            console.log('Usuário logado:', user);
        })
        .catch((error) => {
            // Tratar erros de autenticação
            const errorMessage = error.message;
            console.error('Erro de autenticação:', errorMessage);
        });
});*/
