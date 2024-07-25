import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { IDL, type WbaPrereq } from "../programs/wba_prereq";

// import wallet from "./wba-wallet.json";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// Get the sender's public key from the environment
const from = getKeypairFromEnvironment("WBA_SECRET_KEY");
