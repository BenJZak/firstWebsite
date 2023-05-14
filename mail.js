const firebaseConfig = {
  apiKey: "AIzaSyALHfGT9sLuqIrp9PEfR0pUczMRh1ckaHI",
  authDomain: "comments-587a5.firebaseapp.com",
  databaseURL: "https://comments-587a5-default-rtdb.firebaseio.com",
  projectId: "comments-587a5",
  storageBucket: "comments-587a5.appspot.com",
  messagingSenderId: "592012267222",
  appId: "1:592012267222:web:03d61043b024884adb4377",
  measurementId: "G-WZYML1MXEG"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

