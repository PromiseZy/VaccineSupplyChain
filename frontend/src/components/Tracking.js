import { useEffect, useState } from "react"
import WebFont from 'webfontloader';
import { ethers } from "ethers";
import Web3 from 'web3'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Tracking() {


    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Chakra Petch']
          }
        });
       }, []);


  const [account, setAccount] = useState("ไม่ได้เชื่อมต่อ")
  const [pid, setPID] = useState()
  const [lSData, setLSData] = useState()
  const [PData, setPData] = useState()
  const productData = [];
  const statusData = [];
  const [FData, setFData] = useState(null)
  const [PdData,setPdData] =useState(null)

  useEffect(()=>{

    async function loadAccounts(){
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0])
    }
    loadAccounts()

    
  }, [])


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
  const handleButton = () => {

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
            const Ldata = await contract.getProductStatusList();
            console.log("StatusListdata: ", Ldata);
            setLSData(Ldata);
            const LPdata = await contract.getProductList();
            console.log("ProductListdata: ", LPdata);
            setPData(LPdata);

            for (var i = 0; i<lSData.length; i++) {
              if(lSData[i][0]=== pid){
                statusData.push(lSData[i])
              }
            }
            setFData(statusData)

            for (var j = 0; j<PData.length; j++) {
              if(PData[j][0] === pid){
                productData.push(PData[j])
              }
            }
            setPdData(productData)


            console.log("product data = ",PdData)
            console.log("status data = ",statusData)

        } catch (err) {
            console.log("Error: ", err);
        }
    }
    }

    getStatus()
  }

  function convertTimestamp(t) {
    var intTimestamp = parseInt(t, 16);
    // console.log(intTimestamp)
    var s = new Date(intTimestamp*1000);
    return String(s).substring(0, 24);
}

  
  return (
    <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
      <header class="App-header">
        <h5>
              Your Account: {account}
        </h5>
        <h1>
            Tracking
        </h1>
      </header>
      <header class="App-middle">
            <h3>กรอก รหัสพัสดุ</h3>
            <input type="text" value={pid} onChange={e=>setPID(e.target.value)}/>

            <button id="myButton" onClick={handleButton}>ติดตาม</button>

      </header>
        {!FData? (
          <h1>Enter Your Product ID</h1>
        ) : (
        PdData===null || PdData.length===0 ? (
          <h1>ไม่พบหมายเลขพัสดุที่กรอก</h1>
        ) : (
          <div>
                <h1>รายละเอียดวัคซีน</h1>
                <h3>รหัสพัสดุ {PdData[0][0]}</h3>
                <h3>ชื่อวัคซีน : {PdData[0][2]} หมายเลขLOT : {PdData[0][3]}</h3>
                <h3>ส่งจากต้นทาง {PdData[0][5]}</h3>
                <h3>หมายเลขAddressผู้ลงทะเบียน : {PdData[0][1]}</h3>
                <h3>จำนวน {parseInt(PdData[0][4]._hex,16)} โดส</h3>
              <VerticalTimeline>
                {FData.map((row,iterator) => (
                  <VerticalTimelineElement
                  key={iterator}
                  className="daytime"
                  contentArrowStyle={{ borderRight: '7px solid  #ffdd40' }}
                  date={convertTimestamp(row.timestamp._hex)}
                  iconStyle={{ background: '#ffdd40', color: '#000000',border: "2px solid" }}
                >
                <h3 >รายละเอียด</h3>
                <h4 >{row.details}</h4>
                <p>Address ผู้ลงทะเบียน : {row.staion}</p>
                <p>อุณหภูมิ {parseInt(row.temperature._hex, 16)} องศาเซลเซียส</p>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            </div>
        )
      )}
    </div>

    
  );
}

/*function myFunction() {
    var x = document.getElementById("myNumber").value;
    document.getElementById("demo").innerHTML = x;
  }
*/

export default Tracking;
