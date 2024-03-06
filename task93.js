// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

angular.module('chatApp', [])
  .controller('ChatController', function($scope) {
    var chatCtrl = this;
    var database = firebase.database();
    chatCtrl.messages = [];
    
    // Function to send a message
    chatCtrl.sendMessage = function() {
      if (chatCtrl.newMessage !== '') {
        database.ref('messages').push({
          username: chatCtrl.username,
          text: chatCtrl.newMessage
        });
        chatCtrl.newMessage = '';
      }
    };

    // Listen for new messages
    database.ref('messages').on('child_added', function(snapshot) {
      $scope.$apply(function() {
        chatCtrl.messages.push(snapshot.val());
      });
    });
  });
