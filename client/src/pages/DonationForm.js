import React, { useState } from "react";
import { CardElement, injectStripe, Elements, StripeProvider } from "react-stripe-elements";
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/DonationForm.css'; // Import your CSS file for styling

//one cart item with 10$ in the cart, then follow exercise 26
// files that were changes, resolvers.js, donation.js, donationpayment.js, typedefs.js, mutations.js, donationforms.js

const DonationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [donationCompleted, setDonationCompleted] = useState(false);

  // Your Stripe public key
  const stripePublicKey = 'pk_test_51NvTs0BIpfMVyqZTDRDOs3XFAuJgfgAeNDn4zwkAng7woHZKNCwvYXgwVPnQWIaKQmzVSAaP3EKWtvGZItFzfUl100xthHySOx';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha) {
      // If CAPTCHA is completed, create a Stripe token
      try {
        const { token } = await props.stripe.createToken();
      // Use the token to create a charge on your server
      setDonationCompleted(true);

    } catch (error) {
      alert("Payment processing failed. Please try again later.");
      console.error("Error creating Stripe token:", error);
    }

  } else {
    alert("Please complete the CAPTCHA");
  }
};

return (
  <div id="donation" className="donateContainer">
    <h2 className='donateH'>Donations</h2>
      { donationCompleted ? (
        <p>
          Thank you for your donation!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          <StripeProvider apiKey={stripePublicKey}>
            <Elements>
              <CardElement />
            </Elements>
          </StripeProvider>
          
          <ReCAPTCHA
          sitekey="your-recaptcha-site-key"
          onChange={() => setCaptcha(true)}
          />
              <button type="submit" aria-label="Donate">
                Donate
              </button>
        </form>
      )}
  </div>
  )
};


export default injectStripe(DonationForm);
