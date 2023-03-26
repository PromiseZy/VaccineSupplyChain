const SupplyChain = arifacts.require('SupplyChain');

contract('SupplyChain', async(accounts) =>{

    it('1. Create new order',async() =>{
        const instance = await SupplyChain.deployed();

        const name = 'moderna';
        const value = 10;
        const origin = 'USA';
        const destination = 'Thailand';
        const tem = 10;

        await instance.addProduct(name,value,tem,origin,destination);

    })

});