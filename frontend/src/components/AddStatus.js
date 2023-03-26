import { useEffect, useState } from "react"
import WebFont from 'webfontloader';
import { ethers } from "ethers";
import Web3 from 'web3'


function AddStatus() {


    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Chakra Petch']
          }
        });
       }, []);


  const [account, setAccount] = useState("ไม่ได้เชื่อมต่อ")
  const [pid, setPID] = useState()
  const [tem, setTem] = useState()
  const [detail, setDetail] = useState()
  const [placeName, setPlaceName] = useState()
  const [forDetail1, setForDetail1] = useState()
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [PData, setPData] = useState()
  const productData = [];
  const [PdData,setPdData] =useState(null)
  const placeList = [
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
  ]

  const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
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
function handleChange(event) {
  setChecked(event.target.checked);
}
function handleChange2(event) {
  setChecked2(event.target.checked);
}
const handleButtonForCustoms = () => {
  if(checked){
    setDetail("หมายเลขกำกับภาษีนำเข้า-ส่งออกคือ "+forDetail1+" และผ่านการตรวจสอบโดย"+placeName+"แล้ว")
  }else{
    setDetail("หมายเลขกำกับภาษีนำเข้า-ส่งออกคือ "+forDetail1+" ไม่ผ่านการตรวจสอบโดย"+placeName)
  }
  checkPid()
  if((PdData===null || PdData.length===0)){
    console.log("ไม่พบหมายเลขพัสดุในระบบ");
    alert("ไม่พบหมายเลขพัสดุในระบบ")
  }else{
    contract.methods.addStatus(pid,tem,detail).send(options).then(function(receipt) {
      console.log(receipt);
    }
    );
  };
}

const handleButtonForNVI = () => {
  if(checked){
    setDetail("ผ่านการตรวจสอบคุณภาพวัคซีนแล้ว หมายเลขผลการตรวจคุณภาพคือ "+forDetail1+" ผ่านการตรวจสอบโดย"+placeName)
  }else{
    setDetail("ไม่ผ่านการตรวจสอบคุณภาพวัคซีน")
  }
  checkPid()
  if((PdData===null || PdData.length===0)){
    console.log("ไม่พบหมายเลขพัสดุในระบบ");
    alert("ไม่พบหมายเลขพัสดุในระบบ")
  }else{
    contract.methods.addStatus(pid,tem,detail).send(options).then(function(receipt) {
      console.log(receipt);
    }
    );
  };
}

const handleButton = () => {
  if(checked){
    if(checked2){
      setDetail("ได้รับวัคซีนแล้ว และผ่านการตรวจสอบจำนวนและหมายเลขLOTแล้วโดย"+placeName)
    }else{
      setDetail("ได้รับวัคซีนแล้ว แต่ไม่ผ่านการตรวจสอบจำนวนและหมายเลขLOTแล้วโดย"+placeName)
    }
  }else{
    setDetail("ไม่ได้รับวัคซีน")
  }
  checkPid()
  if((PdData===null || PdData.length===0)){
    console.log("ไม่พบหมายเลขพัสดุในระบบ");
    alert("ไม่พบหมายเลขพัสดุในระบบ")
  }else{
    contract.methods.addStatus(pid,tem,detail).send(options).then(function(receipt) {
      console.log(receipt);
    }
    );
  };
}

  useEffect(()=>{
    async function loadAccounts(){
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0])
    }
    loadAccounts()

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
    /*const contract = new web3.eth.Contract(abi, "0x4Ba05b9Ae1A1630Bd363f4024aDc85675Bcf4D2D");
    const options = {
      from: account,
      gasPrice: '200000000',  // 0.2 Gwei
      gas: 6721975,  // The gas limit for the transaction
    };*/
  }, [pid,account, tem,detail,placeName])

  if((placeName===placeList[2])||(placeName===placeList[3])||(placeName===placeList[4])){
    
    return (
      <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
        <header class="App-header">
          <h5>
              Your Account: {account}
          </h5>
          <h1>
              Add Status
          </h1>
        </header>
        <header class="App-middle">
              <h3>ยินดีต้อนรับ {placeName}</h3>
              รหัสพัสดุ
              <input type="text" value={pid} onChange={e=>setPID(e.target.value)}/>
              อุณหภูมิ(องศาเซลเซียส)
              <input type="number" id="tem" value={tem} onChange={e=>setTem(e.target.value)}/>
              หมายเลขกำกับภาษีนำเข้า-ส่งออก
              <input type="text" value={forDetail1} onChange={e=>setForDetail1(e.target.value)}/>
              พัสดุผ่านการตรวจสอบโดยศุลกากร
              <input type="checkbox" checked={checked} onChange={handleChange}/>
              <button id="myButton" onClick={handleButtonForCustoms}>เพิ่มสถานะล่าสุด</button>
  
        </header>
      </div>
    );
  }else if(placeName===placeList[5]){
    return (
      <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
        <header class="App-header">
          <h5>
              Your Account: {account}
          </h5>
          <h1>
              Add Status
          </h1>
        </header>
        <header class="App-middle">
              <h3>ยินดีต้อนรับ {placeName}</h3>
              รหัสพัสดุ
              <input type="text" value={pid} onChange={e=>setPID(e.target.value)}/>
              อุณหภูมิ(องศาเซลเซียส)
              <input type="number" id="tem" value={tem} onChange={e=>setTem(e.target.value)}/>
              ผ่านการตรวจสอบคุณภาพวัคซีนแล้ว
              <input type="checkbox" checked={checked} onChange={handleChange}/>
              หมายเลขผลการตรวจคุณภาพวัคซีน
              <input type="text" value={forDetail1} onChange={e=>setForDetail1(e.target.value)}/>
              <button id="myButton" onClick={handleButtonForNVI}>เพิ่มสถานะล่าสุด</button>
  
        </header>
      </div>
    );
  }else if((placeName===placeList[6])||(placeName===placeList[7])||(placeName===placeList[8])||(placeName===placeList[9])){
    return (
      <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
        <header class="App-header">
          <h5>
              Your Account: {account}
          </h5>
          <h1>
              Add Status
          </h1>
        </header>
        <header class="App-middle">
              <h3>ยินดีต้อนรับ {placeName}</h3>
              รหัสพัสดุ
              <input type="text" value={pid} onChange={e=>setPID(e.target.value)}/>
              อุณหภูมิ(องศาเซลเซียส)
              <input type="number" id="tem" value={tem} onChange={e=>setTem(e.target.value)}/>
              ได้รับวัคซีนแล้ว
              <input type="checkbox" checked={checked} onChange={handleChange}/>
              ผ่านการตรวจสอบจำนวนและหมายเลขLOTแล้ว
              <input type="checkbox" checked={checked2} onChange={handleChange2}/>
              <button id="myButton" onClick={handleButton}>เพิ่มสถานะล่าสุด</button>
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
              Add Status
          </h1>
        </header>
        <header class="App-middle">
        <h3>ยินดีต้อนรับ {placeName}</h3>
        <h3>คุณไม่สามารถเพิ่มสถานะได้</h3>
        </header>
      </div>
    );
  }

}


export default AddStatus;