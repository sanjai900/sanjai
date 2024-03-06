angular.module('authApp', [])
  .controller('AuthController', function() {
    var vm = this;

    // Initialize Firebase
    var firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID'
    };
    firebase.initializeApp(firebaseConfig);

    var auth = firebase.auth();

    vm.user = null;
    vm.email = '';
    vm.password = '';

    vm.signUp = function() {
      auth.createUserWithEmailAndPassword(vm.email, vm.password)
        .then(function(userCredential) {
          vm.user = userCredential.user;
        })
        .catch(function(error) {
          console.error('Error signing up:', error.message);
        });
    };

    vm.logIn = function() {
      auth.signInWithEmailAndPassword(vm.email, vm.password)
        .then(function(userCredential) {
          vm.user = userCredential.user;
        })
        .catch(function(error) {
          console.error('Error logging in:', error.message);
        });
    };

    vm.logOut = function() {
      auth.signOut()
        .then(function() {
          vm.user = null;
        })
        .catch(function(error) {
          console.error('Error logging out:', error.message);
        });
    };

    auth.onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user;
      } else {
        vm.user = null;
      }
    });
  });
