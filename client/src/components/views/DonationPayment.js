// DonationPayment.js

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

async function createCharge(token, amount) {
  try {
    // Create a charge using the token and amount
    const charge = await stripe.charges.create({
      amount: amount, // amount in cents
      currency: "usd",
      source: token, // token from the client
    });

    return charge;
  } catch (err) {
    throw new Error(`Donation charge failed: ${err.message}`);
  }
}

module.exports = {
  createCharge,
};