const DominiqueToken = artifacts.require('DominiqueToken.sol');

contract('DominiqueToken',()=>{
 it('should return owner of contract', async()=>{
     const dominiqueToken = await DominiqueToken.deployed();
     const result = await dominiqueToken.name();
    //assert(result !== '')
    console.log(result)
 })
})