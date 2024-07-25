import { type Idl } from "@coral-xyz/anchor";

// Define the structure for the PDA seeds
type PDAStructure = {
  kind: "const" | "account";
  value?: number[];
  path?: string;
};

// Define the structure for an account
type Account = {
  name: string;
  writable?: boolean;
  signer?: boolean; // Optional, only for accounts that are signers
  pda?: {
    seeds: PDAStructure[];
  }; // Optional, only if the account is a PDA
  address?: string; // Optional for accounts that have a fixed address
};

// Define the structure for an argument
type Argument = {
  name: string;
  type: string; // This can be extended to a more specific type if needed
};

// Define the structure for an instruction
type Instruction = {
  name: string;
  discriminator: number[];
  accounts: Account[];
  args: Argument[];
};

// Define the structure for an error
type Error = {
  code: number;
  name: string;
  msg: string;
};

// Define the structure for a type
type CustomType = {
  name: string;
  type: {
    kind: "struct";
    fields: Argument[];
  };
};

// Define the structure for the IDL
export type WbaPrereq = Idl & {
  address: string;
  metadata: {
    name: string;
    version: string;
    spec: string;
    description: string;
  };
  instructions: Instruction[];
  accounts: {
    name: string;
    discriminator: number[];
  }[];
  errors: Error[];
  types: CustomType[];
};

export const IDL: WbaPrereq = {
  address: "WBAQSygkwMox2VuWKU133NxFrpDZUBdvSBeaBEue2Jq",
  metadata: {
    name: "wba_prereq",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "complete",
      discriminator: [0, 77, 224, 147, 136, 25, 88, 76],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [112, 114, 101, 114, 101, 113],
              },
              {
                kind: "account",
                path: "signer",
              },
            ],
          },
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
    {
      name: "update",
      discriminator: [219, 200, 88, 176, 158, 63, 253, 127],
      accounts: [
        {
          name: "signer",
          writable: true,
          signer: true,
        },
        {
          name: "prereq",
          writable: true,
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "github",
          type: "bytes",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Q2Prereq2024",
      discriminator: [210, 203, 168, 103, 251, 233, 204, 6],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidGithubAccount",
      msg: "Invalid Github account",
    },
  ],
  types: [
    {
      name: "Q2Prereq2024",
      type: {
        kind: "struct",
        fields: [
          {
            name: "github",
            type: "bytes",
          },
          {
            name: "key",
            type: "pubkey",
          },
        ],
      },
    },
  ],
};
