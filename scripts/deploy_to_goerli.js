const { ethers} = require("hardhat");

async function mian(){
    // initiate a contractFactory for the "GameItem" nft
    // this is top tell hardhat that we want to deploy "GameItem" contract
    const nftContract = await ethers.getContractFactory("GameItem");

    // call the deploy method from the ehters.jd library
    const deployedNFTContract =  await nftContract.deploy();

    //wait for the contract to deploy
    await deployedNFTContract.deployed();

    // print the contract address of the deployed contract in the console
    console.log("NFT Contract Address: ", deployedNFTContract.address);
}

// call the main function
mian().then(()=>process.exit(0)).catch((error )=>{
    console.error(error);
    process.exit(1);
})