import React, { useState } from "react";
import { generateMnemonic, validateMnemonic } from "bip39";

export default function Mnemonics({ mnemonic, setMnemonic }) {
    const [userMnemonic, setUserMnemonic] = useState("");
    const [error, setError] = useState("");

    const handleGenerateMnemonic = () => {
        const generatedMnemonic = generateMnemonic();
        setUserMnemonic("");
        setMnemonic(generatedMnemonic);
        setError("");
    };

    const handleUserMnemonicChange = (e) => {
        setUserMnemonic(e.target.value);
    };

    const handleSetUserMnemonic = () => {
        if (validateMnemonic(userMnemonic.trim())) {
            setMnemonic(userMnemonic.trim());
            setError("");
        } else {
            setError("Invalid mnemonic phrase. Please enter a valid one.");
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="flex justify-center items-center gap-4 mb-6">
                <h1 className="text-2xl font-bold">Your Secret Phrase</h1>
                <button
                    onClick={handleGenerateMnemonic}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-lime-500 transition"
                >
                    Generate Mnemonics
                </button>
            </div>
            <div className="flex flex-col items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Enter your own mnemonic"
                    value={userMnemonic}
                    onChange={handleUserMnemonicChange}
                    className="p-2 text-black text-center border border-gray-300 rounded-lg shadow-sm w-full"
                />
                <button
                    onClick={handleSetUserMnemonic}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                    Use Custom Mnemonic
                </button>
                {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
            </div>
            {mnemonic && (
                <div className="grid grid-cols-4 gap-4">
                    {mnemonic.split(" ").map((word, index) => (
                        <input
                            key={index}
                            type="text"
                            readOnly
                            value={word}
                            placeholder="mnemonic"
                            className="p-2 text-black text-center border border-gray-300 rounded-lg shadow-sm"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
