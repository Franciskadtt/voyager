
// function to send email if user submit feedback form
function sendMail(contactForm) {
    emailjs.send("gmail","voyager",{
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        
        function(response) {
            console.log("SUCCESS", response);
            //display message to user if succesful
            reviewMessage ();
            //reset form
            resetForm();
        },
        function(error) {
            console.log("FAILED", error);
        }
        
    );
    // To block from loading a new page
    return false;  
};

// function for alert for feedback form
function reviewMessage (){
    alert("Thanks for your feedback")   
}

// function reset form
function resetForm() {
    document.getElementById("newForm").reset()};