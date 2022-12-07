<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Your Description Goes Here">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <title>Hello, world!</title>
</head>

<body>

    <!-- Begin Contact Form Container -->
    <div class="container">
        <div class="row">

            <section class="col-md-12">
                <h1>Contact Us</h1>
            </section>

            <section class="col-md-12">

                <!--Begin Contact Form-->
                <div id="contact-us-form">

                    <form action="contact-page.php" method="post">
                        <div class="form-group">
                            <label for="inputName">Name</label>
                            <input name="person_name" class="form-control" type="text" id="inputName" placeholder="Your Name">
                        </div>

                        <div class="form-group">
                            <label for="inputEmail">Email</label>
                            <input name="email" class="form-control" type="email" id="inputEmail" placeholder="Your Email Address">
                        </div>

                        <div class="form-group">
                            <label for="inputComments">Message</label>
                            <textarea name="message" class="form-control" id="inputComments" placeholder="Your Message..."></textarea>
                        </div>

                        <input name="submit" class="btn btn-default" type="submit" value="submit">

                        <?php 
// This script scrubs dangerous strings from the submitted input.

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	/* The function takes one argument: a string.
	* The function returns a clean version of the string.
	* The clean version may be either an empty string or
	* just the removal of all newline characters.
	*/
	function spam_scrubber($value) {

		// List of very bad values:
		$very_bad = array('to:', 'cc:', 'bcc:', 'content-type:', 'mime-version:', 'multipart-mixed:', 'content-transfer-encoding:');
	
		// If any of the very bad strings are in 
		// the submitted value, return an empty string:
		foreach ($very_bad as $v) {
			if (stripos($value, $v) !== false) return '';
		}
	
		// Replace any newline characters with spaces:
		$value = str_replace(array( "\r", "\n", "%0a", "%0d"), ' ', $value);
	
		// Return the value:
		return trim($value);

	} // End of spam_scrubber() function.

	// Clean the form data:
	$scrubbed = array_map('spam_scrubber', $_POST);

	// Minimal form validation:
	if (!empty($scrubbed['person_name']) && !empty($scrubbed['email'])) {
	
		// Create the body:
		$body = "Name: {$scrubbed['person_name']}\n\nEmail: {$scrubbed['email']}\n\nMessage: {$scrubbed['message']}";

		// Make it no longer than 1000 characters long:
		$body = wordwrap($body, 1000);
	
		// Send the email:
		mail('youremail@email.com', 'Your Name: Contact Form', $body, "From: {$scrubbed['email']}"); 
		// mail (to, subject, body, [,headers]);

		// Print a message:
		echo '<p style="margin-top: 15px;">Thank you for contacting me. You will hear from me soon!</p>';
		
		// Clear $_POST (so that the form's not sticky):
		$_POST = array();
	
	} else {
		echo '<p style="margin-top: 15px; font-weight: bold; color: #C00;">Please fill out the form completely.</p>';
	}
	
} // End of main isset() IF.

// Create the HTML form:
?>
                    </form>

                </div>
                <!--End Contact Form-->

            </section>
        </div>
    </div>
    <!-- End Contact Form Container -->

    <!-- JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS, then Your Own Script -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
</body>

</html>