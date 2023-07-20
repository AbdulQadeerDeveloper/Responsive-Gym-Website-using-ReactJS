import React from "react";

function Contact(props) {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="Email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Write Here....." name="message"></textarea>
        <input type="Submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
