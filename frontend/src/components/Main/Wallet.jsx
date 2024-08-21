import React, { useState } from "react";
import * as bip39 from "bip39";
import nacl from "tweetnacl";
import naclUtil from "tweetnacl-util";

const WalletGenerator = ({ mnemonic }) => {
  const [wallets, setWallets] = useState([]);

  const generateWallet = () => {
    if (!mnemonic) {
      alert("Please generate a mnemonic first.");
      return;
    }

    const seed = bip39.mnemonicToSeedSync(mnemonic).slice(0, 32); // First 32 bytes for nacl
    const keypair = nacl.sign.keyPair.fromSeed(seed);

    const wallet = {
      publicKey: naclUtil.encodeBase64(keypair.publicKey),
      privateKey: naclUtil.encodeBase64(keypair.secretKey),
    };

    setWallets([...wallets, wallet]);
  };

  const clearWallets = () => setWallets([]);

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">HD Wallet Generator</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={generateWallet}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
        >
          Generate Wallet
        </button>
        <button
          onClick={clearWallets}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Clear Wallets
        </button>
      </div>
      {wallets.length > 0 && (
        <div className="space-y-6">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="p-4 bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">
                Wallet {index + 1}
              </h3>
              <div className="mb-2">
                <span className="font-semibold">Public Key:</span>
                <div className="mt-1 p-2 bg-gray-800 rounded break-all overflow-auto">
                  {wallet.publicKey}
                </div>
              </div>
              <div>
                <span className="font-semibold">Private Key:</span>
                <div className="mt-1 p-2 bg-gray-800 rounded break-all overflow-auto select-all">
                  {wallet.privateKey}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletGenerator;
