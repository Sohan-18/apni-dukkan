import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Make sure .env is loaded from the project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("✅ Loaded .env? PUBLIC KEY =", process.env.BRAINTREE_PUBLIC_KEY);

import braintree from "braintree";

// Braintree config
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

export default gateway;
