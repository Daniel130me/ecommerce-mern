import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

// Use environment variable for the Stripe secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
