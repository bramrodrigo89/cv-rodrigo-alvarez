function sendMail(contactForm) {

    var templateParams = {
        'from_name': contactForm.name.value, 
        'project_request': contactForm.projectsummary.value,
        'from_email': contactForm.email.value
    };
    
    emailjs.send("gmail", "rodrigoonlinecv", templateParams)
    
	.then(
        function(response) {
		    console.log('SUCCESS!', response.status, response.text);
        },
        function(error) {
            console.log('FAILED...', error);
        }
    );
    return false; //blocks loading a new page
}