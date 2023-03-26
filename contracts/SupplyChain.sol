// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.4.17;

contract SupplyChain{

    uint256 product_id=0;
    uint256 product_StatID=0;

    struct Product{
        string pid;
        address staionAddress;
        string name;
        string lot;
        int value;
        string origin;
        string destination;
        uint256 timestamp;

    }

    struct Status{
        string pid;
        address staion;
        int temperature;
        string details;
        uint256 timestamp;

    }

    Product[] public products_list;
    Product private productInfo;
    Status[] public productStatus;
    Status private statusInfo;
    
    mapping(uint256 => Product[]) public products;
    mapping(uint256 => Status[]) public product_Status;

    function addProduct(
        string memory pid,
        string memory name,
        string memory lot,
        int value,
        int tem,
        string memory origin,
        string memory destination) public payable{
        address from = msg.sender;
        string memory detail = "Start Supply Chain";
        productInfo= Product(pid,from,name,lot,value,origin,destination,block.timestamp);
        products[product_id].push(productInfo);
        products_list.push(productInfo);

        statusInfo= Status(pid,from,tem,detail,block.timestamp);
        product_Status[product_StatID].push(statusInfo);
        productStatus.push(statusInfo);

        product_id++;
        product_StatID++;
    }

    function addStatus(string memory pid,int tem,string memory dt) public payable{
        address from = msg.sender;
        statusInfo= Status(pid,from,tem,dt,block.timestamp);
        product_Status[product_StatID].push(statusInfo);
        productStatus.push(statusInfo);
        product_StatID++;
    }

    function getProductStatus(uint256 id) public view returns(Status[] memory){

    return product_Status[id];
    }

    function getProduct(uint256 id) public view returns(Product[] memory){

    return products[id];
    }

    function getProductStatusList() public view returns(Status[] memory){

    return productStatus ;
    }

    function getProductList() public view returns(Product[] memory){

    return products_list ;
    }



}

