// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const ACOCOIN = await ethers.getContractFactory('ACO');
    console.log('Deploying ACO...');
    const aco = await ACOCOIN.deploy();
    await aco.deployed();
    console.log('Box deployed to:', aco.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });