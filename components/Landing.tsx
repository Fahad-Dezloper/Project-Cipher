import React from 'react'
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const Landing = ({pathTypes, setPathTypes, setMnemonicInput, mnemonicInput, onButtonClick}: any) => {
  return (
    <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <div className="flex flex-col gap-4">
                {pathTypes.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="flex gap-5 flex-col my-12 w-full items-center"
                  >
                    <div className="flex flex-col gap-2">
                      <h1 className="tracking-tighter text-4xl md:text-5xl font-inter">
                        Cipher your own KeyPair Generator
                      </h1>
                      <p className="text-primary/80 font-semibold w-full text-center text-lg md:text-xl">
                        Choose a blockchain to get started.
                      </p>
                    </div>
                    <div className="flex gap-6 mt-6">
                      <Button
                        size={"lg"}
                        onClick={() => {
                          setPathTypes(["501"]);
                          toast.success(
                            "Wallet selected. Please generate a wallet to continue."
                          );
                        }}
                      >
                        Solana
                      </Button>
                      <Button
                        size={"lg"}
                        onClick={() => {
                          setPathTypes(["60"]);
                          toast.success(
                            "Wallet selected. Please generate a wallet to continue."
                          );
                        }}
                      >
                        Ethereum
                      </Button>
                    </div>
                  </motion.div>
                )}
                {pathTypes.length !== 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col gap-4 my-12"
                  >
                    <div className="flex flex-col gap-2">
                      <h1 className="tracking-tight font-spaceGrotesk text-4xl md:text-5xl font-black">
                        Secret Recovery Phrase
                      </h1>
                      <p className="text-primary/80 font-inter font-semibold text-lg md:text-xl">
                        Save these words in a safe place.
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Input
                        type="password"
                        placeholder="Enter your secret phrase (or leave blank to generate)"
                        onChange={(e) => setMnemonicInput(e.target.value)}
                        value={mnemonicInput}
                      />
                      <Button size={"lg"} onClick={onButtonClick}>
                        {mnemonicInput ? "Add Wallet" : "Generate Wallet"}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
  )
}

export default Landing