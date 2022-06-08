// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

const captainNFTAddress = '0x65d46eFDbC878c4B84AC1323C1EB04E34e918218';
const FishContractAddress = '0x6aa8333f7224425667bCac723025b8205Bb869F0';

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Yard = await ethers.getContractFactory("Yard");
  const yard = await Yard.deploy(captainNFTAddress,FishContractAddress);

  await yard.deployed();

  console.log("Yard deployed to:", yard.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
