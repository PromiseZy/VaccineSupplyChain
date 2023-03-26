import { useEffect, useState } from "react"
import WebFont from 'webfontloader';
import Web3 from 'web3'
import "../SupplyChain.jpg" ;

function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Chakra Petch']
      }
    });
   }, []);
  const [account, setAccount] = useState("ไม่ได้เชื่อมต่อ")

  useEffect(()=>{

    async function loadAccounts(){
      const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0])
    }
    loadAccounts()
  }, [])
  return (
    <div class="landing-wrapper" style={{fontFamily: 'Chakra Petch'}}>
      <header class="App-header">
        <h5>
          Your Account: {account}
        </h5>
        <h1>
          Covid-19 Vaccines Supply Chain
        </h1>

      </header>
      <header class="App-middle">
        <h5>Supply Chain</h5>
        <h6>โดยในแต่ละสถานที่จะมีหมายเลข Wallet ที่แตกต่างกันไปซึ่งเป็น Wallet เฉพาะตัวของแต่ละที่<span class="highlight">ไม่ซ้ำกัน</span></h6>
        <img src="https://sv1.picz.in.th/images/2023/02/28/eNn1dl.jpg" alt="Supply Chian" width="900" height="600"></img>
        <h5>ซึ่งในแต่ละสถานที่จะมีหน้าที่แตกต่างกันไป ดังนี้</h5>
        <h6>
          1. โรงงานผลิตวัคซีนในต่างชาติ มีหน้าที่ ลงทะเบียนวัคซีนเข้าสู่ระบบครั้งแรก โดยจะเรียกใช้งาน <span class="highlight">MENU เพิ่มวัคซีน</span><br/>
          2. ศุลกาการในต่างชาติ มีหน้าที่ กรอกหมายเลขกำกับภาษีนำเข้า-ส่งออก และตรวจสอบพัสดุ โดยจะเรียกใช้งาน <span class="highlight">MENU เพิ่มสถานะ</span><br/>
          3. ศุลกาการไทย มีหน้าที่ กรอกหมายเลขกำกับภาษีนำเข้า-ส่งออก และตรวจสอบพัสดุ โดยจะเรียกใช้งาน <span class="highlight">MENU เพิ่มสถานะ</span><br/>
          4. สถาบันวัคซีนแห่งชาติไทย มีหน้าที่ ตรวจสอบคุณภาพวัคซีน และกรอกหมายเลขผลการตรวจคุณภาพวัคซีน โดยจะเรียกใช้งาน <span class="highlight">MENU เพิ่มสถานะ</span><br/>
          5. โรงพยาบาลในแต่ละจังหวัด มีหน้าที่ ตอบว่าได้รับวัคซีนแล้ว และผ่านการตรวจสอบจำนวนกับหมายเลขLOT โดยจะเรียกใช้งาน <span class="highlight">MENU เพิ่มสถานะ</span><br/><br/>
          <span class="highlight">โดยในแต่ละสถานที่ จะมีสิ่งที่ทำเหมือนกันคือ กรอกหมายเลขพัสดุ และ อุณหภูมิ</span>
        </h6>

      </header>
    </div>
  );
}

export default Home;
