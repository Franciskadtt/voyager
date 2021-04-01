
// Function to send email if user submit feedback form
function sendMail(contactForm) {
    emailjs.send("gmail","voyager",{
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        // Function for what happens when sent
        function(response) {
            console.log("email sent", response);
            //display message to user if succesful
            reviewMessage ();
            //reset form
            resetForm();
        },
        // Function for what happens when error
        function(error) {
            console.log("email failed", error);
        }
    );
    // To block from loading a new page
    return false;  
}

// function for alert for feedback form
function reviewMessage (){
    alert("Thanks for your feedback");   
}

// function reset form
function resetForm() {
    document.getElementById("feedbackForm").reset();}