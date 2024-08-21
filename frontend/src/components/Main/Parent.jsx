import React, { useState } from "react";
import Mnemonics from "./Mnemonics";
import WalletGenerator from "./Wallet";

const Parent = () => {
    const [mnemonic, setMnemonic] = useState("");

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <Mnemonics mnemonic={mnemonic} setMnemonic={setMnemonic} />
            <WalletGenerator mnemonic={mnemonic} />
        </div>
    );
};

export default Parent;
