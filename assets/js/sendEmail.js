
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
        },
        function(error) {
            console.log("FAILED", error);
        }
        
    );
    resetForm
    return false;  // To block from loading a new page
};

//Listen for click of "send message" button and execute alert
document.getElementById("feedback-btn").addEventListener("click", reviewMessage);
// function for alert for feedback form
function reviewMessage (){
    alert("Thanks for your feedback")   
}

// Listen for click of "send message" button and execute 
document.getElementById("feedback-btn").addEventListener("click", resetForm)

// function reset form
function resetForm() {
    document.getElementById("newForm").reset()};