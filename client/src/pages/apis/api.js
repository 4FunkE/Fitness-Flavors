const stripe = require('stripe')('your-stripe-secret-key');

// Handle a payment request
app.post('/charge', async (req, res) => {
  const { token, amount } = req.body;

  try {
    // Create a charge using the token and amount
    const charge = await stripe.charges.create({
      amount: amount, // amount in cents
      currency: 'usd',
      source: token, // token from the client
    });

    // Handle success and send a response to the client
    res.status(200).send('Payment successful');
  } catch (err) {
    // Handle errors and send an error response
    res.status(500).send(err.message);
  }
});