import { useEffect, useState } from "react"
import WebFont from 'webfontloader';
import { ethers } from "ethers";
import Web3 from 'web3'


function AddProduct() {


    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Chakra Petch']
          }
        });
       }, []);


  const [account, setAccount] = useState("ไม่ได้เชื่อมต่อ")
  const [pid, setPid] = useState()
  const [name, setName] = useState()
  const [lot, setLot] = useState()
  const [value, setValue] = useState()
  const [tem, setTem] = useState()
  const [PData, setPData] = useState()
  const productData = [];
  const [PdData,setPdData] =useState(null)
  //const [origin, setOrigin] = useState()
  const [destination, setDestination] = useState("")
  /*const placeList = [
    "โรงงานผลิตวัคซีนประเทศจีน",
    "โรงงานผลิตวัคซีนประเทศอเมริกา",
    "ศุลกากรประเทศไทย",
    "ศุลกากรประเทศจีน",
    "ศุลกากรประเทศอเมริกา",
    "สถาบันวัคซีนแห่งชาติไทย",
    "โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี นครราชสีมา",
    "โรงพยาบาลมหาราชนครเชียงใหม่ เชียงใหม่",
    "โรงพยาบาลจุฬาลงกรณ์ กรุงเทพมหานคร",
    "โรงพยาบาลประจวบคีรีขันธ์ ประจวบคีรีขันธ์"
  ]*/
  const [placeName, setPlaceName] = useState()

  useEffect(()=>{
    const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
    async function loadAccounts(){
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0])
    }

    if(account==="0x2FB5Ab7C9c6Ac5FE2566e133201Af39624989c32"){
      setPlaceName("โรงงานผลิตวัคซีนประเทศจีน");
    }else if(account==="0xb0DB5Ba7aEaF796558c8eA96C16c4F6E054F6E74"){
      setPlaceName("โรงงานผลิตวัคซีนประเทศอเมริกา");
    }else if(account==="0x646E59CEe44eC438a4cB811f7C6F26529d095153"){
      setPlaceName("ศุลกากรประเทศไทย");
    }else if(account==="0xEd18c0B3598184eB799f58E948fDac1a6FB9fE37"){
      setPlaceName("ศุลกากรประเทศจีน");
    }else if(account==="0x4ACceDc12623d7400290c0B7dbD9Cb203AF886B6"){
      setPlaceName("ศุลกากรประเทศอเมริกา");
    }else if(account==="0x30B51f712da7a776c97BB6352e6F85Fe2FA86E61"){
      setPlaceName("สถาบันวัคซีนแห่งชาติไทย");
    }else if(account==="0x4F463e3E42c3d3A6fd23A7f8E9EC2E41C579348C"){
      setPlaceName("โรงพยาบาลมหาวิทยาลัยเทคโนโลยีสุรนารี นครราชสีมา");
    }else if(account==="0xF8DfAcbfc44d3C26981518412a8C434f364ad404"){
      setPlaceName("โรงพยาบาลมหาราชนครเชียงใหม่ เชียงใหม่");
    }else if(account==="0xBc5b75bD29440daE94c830E0DD6EE06bF8aE8CB2"){
      setPlaceName("โรงพยาบาลจุฬาลงกรณ์ กรุงเทพมหานคร");
    }else if(account==="0x87D4D8eDC68201302818f661967A2e798D2D40F9"){
      setPlaceName("โรงพยาบาลประจวบคีรีขันธ์ ประจวบคีรีขันธ์");
    }else{
      setPlaceName("บุคคลทั่วไป")
    }

  
    loadAccounts()
  }, [account, destination, lot, name, tem, value,placeName])

  
  let abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lot",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "tem",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "origin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "destination",
          "type": "string"
        }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "tem",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "dt",
          "type": "string"
        }
      ],
      "name": "addStatus",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getProduct",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "staionAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lot",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "origin",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "destination",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct SupplyChain.Product[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProductList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "staionAddress",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lot",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "origin",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "destination",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct SupplyChain.Product[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getProductStatus",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "staion",
              "type": "address"
            },
            {
              "internalType": "int256",
              "name": "temperature",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "details",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct SupplyChain.Status[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProductStatusList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "pid",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "staion",
              "type": "address"
            },
            {
              "internalType": "int256",
              "name": "temperature",
              "type": "int256"
            },
            {
              "internalType": "string",
              "name": "details",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct SupplyChain.Status[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "product_Status",
      "outputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "staion",
          "type": "address"
        },
        {
          "internalType": "int256",
          "name": "temperature",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products",
      "outputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "staionAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lot",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "origin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "destination",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "products_list",
      "outputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "staionAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "lot",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "origin",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "destination",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "productStatus",
      "outputs": [
        {
          "internalType": "string",
          "name": "pid",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "staion",
          "type": "address"
        },
        {
          "internalType": "int256",
          "name": "temperature",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "details",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
  const contract = new web3.eth.Contract(abi, "0xb56c1AdaBF757409b9847dCF5d7Ba84263b22f7A");
  const options = {
    from: account,
    gasPrice: '200000000',  // 0.2 Gwei
    gas: 6721975,  // The gas limit for the transaction
  };

  const checkPid = () => {
    async function requestAccount() {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    }
    async function getStatus() {
      if (typeof window.ethereum !== "undefined") {
        requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(await signer.getAddress())

        const contract = new ethers.Contract(
          "0xb56c1AdaBF757409b9847dCF5d7Ba84263b22f7A",
          abi,
          provider
        );
        try {
            const LPdata = await contract.getProductList();
            console.log("ProductListdata: ", LPdata);
            setPData(LPdata);



            for (var j = 0; j<PData.length; j++) {
              if(PData[j][0] === pid){
                productData.push(PData[j])
              }
            }
            setPdData(productData)


            console.log("product data = ",PdData)

        } catch (err) {
            console.log("Error: ", err);
        }
    }
    }

    getStatus()

  }

  useEffect(() => {      
    checkPid()
  });

  const handleButton = () => {
      checkPid()
      if(!(PdData===null || PdData.length===0)){
        console.log("รหัสพัสดุไม่สามารถซ้ำกับในระบบได้");
        alert("รหัสพัสดุไม่สามารถซ้ำกับในระบบได้")
      }else{
        contract.methods.addProduct(pid,name,lot,value,tem,placeName,destination).send(options).then(function(receipt) {
          console.log(receipt);
        }
        );
      };
      
  }
if(placeName==="บุคคลทั่วไป"){
  return (
    <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
      <header class="App-header">
          <h5>
              Your Account: {account}
          </h5>
          <h1>
              Add Product
          </h1>
      </header>
      <header class="App-middle">
      <h3>ยินดีต้อนรับ {placeName}</h3>
      <h3>คุณไม่สามารถเพิ่มวัคซีนได้</h3>
      </header>
    </div>
  );
}
else{
  return (
    <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
      <header class="App-header">
          <h5>
              Your Account: {account}
          </h5>
          <h1>
              Add Product
          </h1>
      </header>
      <header class="App-middle">
            <h3>ยินดีต้อนรับ {placeName}</h3>
            รหัสพัสดุ
            <input type="text" value={pid} onChange={e=>setPid(e.target.value)}/>
            ชื่อวัคซีน
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            หมายเลข LOT
            <input type="text" value={lot} onChange={e=>setLot(e.target.value)}/>
            จำนวน(โดส)
            <input type="number" id="value" value={value} onChange={e=>setValue(e.target.value)}/>
            อุณหภูมิ(องศาเซลเซียส)
            <input type="number" id="tem" value={tem} onChange={e=>setTem(e.target.value)}/>
            ส่งจากต้นทาง
            <input type="text" value={placeName} disabled/>
          <button id="myButton" onClick={handleButton} >ลงทะเบียนวัคซีนครั้งแรก</button>

      </header>
    </div>
  );
}
}


export default AddProduct;


//<input type="text" value={destination} onChange={e=>setDestination(e.target.value)}/>