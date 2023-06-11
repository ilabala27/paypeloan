import "./Bala.css";
import React from "react";
import axios from 'axios';
import { useState } from 'react';

export default function App() {

  // const [inputValues, setInputValues] = useState("")

  const[RETAILER_ID,setRETAILER_ID]=useState("")
  const[Phone_number,setPhone_number]=useState("")
  const[ Name,setName]=useState("")

  // const[ PAN_NO,setPAN_NO]=useState("")
  // const[ AADHAAR_NO,setAADHAAR_NO]=useState("")
  // const[ Mother_name,setMother_name]=useState("")
  // const[ current_residence_address,setcurrent_residence_address]=useState("")

  // const[ current_address_ownership_type,setcurrent_address_ownership_type ]=useState("")

  // const[  area_pin_code,setarea_pin_code]=useState("")
 
  // const[ personal_email,setpersonal_email]=useState("")


  // const[ net_in_hand_salary,setnet_in_hand_salary]=useState("")
  // const[ gross_monthly_salary,setgross_monthly_salary]=useState("")
  // const[  current_company_name,setcurrent_company_name]=useState("")

  // const[ designation,setdesignation]=useState("")
  // const[ no_of_years_in_present_job,setno_of_years_in_present_job]=useState("")
  
  // const[ office_landline_number,setoffice_landline_number]=useState("")
  
  // const[ bank_account_name,setbank_account_name]=useState("")

  // const[ desired_required_loan_amount,setdesired_required_loan_amount]=useState("")
  // const[ purpose_of_loan,setpurpose_of_loan]=useState("")
  // const[ name_of_a_relative,setname_of_a_relative]=useState("")
  // const[ relative_phone_number,setrelative_phone_number]=useState("")

  // const[ relative_residence_address,setrelative_residence_address]=useState("")
  // const[ CIDIL_score,setCIDIL_score]=useState("")
  
  // const[ mode_of_salary_credit,setmode_of_salary_credit]=useState("")
  // const[ PAN_CARD_IMAGE,setPAN_CARD_IMAGE]=useState("")
  // const[ AADHAAR_FRONT,setAADHAAR_FRONT]=useState("")
  // const[ AADHAAR_BACK,setAADHAAR_BACK]=useState("")
  // const[ PASSPORT_SIZE_IMAGE,setPASSPORT_SIZE_IMAGE]=useState("")


   


  const handleSubmit = (e) => {
    e.preventDefault()
    // alert("Information Is Received");
    // console.log(RETAILER_ID, Phone_number,Name,PAN_NO,AADHAAR_NO,Mother_name, current_residence_address, 
    //   area_pin_code, current_address_ownership_type, personal_email, net_in_hand_salary, gross_monthly_salary, current_company_name,designation, no_of_years_in_present_job, office_landline_number, bank_account_name, desired_required_loan_amount, purpose_of_loan,
    //   name_of_a_relative, relative_phone_number, relative_residence_address, CIDIL_score,mode_of_salary_credit,
    // PAN_CARD_IMAGE,AADHAAR_FRONT,AADHAAR_BACK,PASSPORT_SIZE_IMAGE
    //   );

      const data ={
        RETAILER_ID:RETAILER_ID,
      Phone_number:Phone_number,
      Name:Name,
      // PAN_NO:PAN_NO, 
      // AADHAAR_NO:AADHAAR_NO,
      // Mother_name:Mother_name,
      // current_residence_address:current_residence_address, 
      // area_pin_code:area_pin_code,
      // current_address_ownership_type:current_address_ownership_type,
      // personal_email:personal_email,
      // net_in_hand_salary:net_in_hand_salary,
      // gross_monthly_salary:gross_monthly_salary,
      // current_company_name:current_company_name,

      // designation:designation,
      // no_of_years_in_present_job:no_of_years_in_present_job,
      
      // office_landline_number:office_landline_number,
     
      
      // bank_account_name:bank_account_name,
      // desired_required_loan_amount:desired_required_loan_amount,
      // purpose_of_loan:purpose_of_loan,
      //  name_of_a_relative:name_of_a_relative,
      // relative_phone_number:relative_phone_number,
     
      // relative_residence_address:relative_residence_address,
      // CIDIL_score:CIDIL_score,
      // mode_of_salary_credit:mode_of_salary_credit,
      // PAN_CARD_IMAGE :PAN_CARD_IMAGE,
      // AADHAAR_FRONT:AADHAAR_FRONT,
      // AADHAAR_BACK:AADHAAR_BACK,
      // PASSPORT_SIZE_IMAGE:PASSPORT_SIZE_IMAGE
      }


      
     // sheetdb link: https://sheetdb.io/api/v1/qj705o9l7kpc9
      //sheetbest link: https://sheet.best/api/sheets/69a872dc-1d0b-4e82-8cb7-e49ca5dcf185
    // axios.post('http://localhost:3333/user/signup',{

      axios.post('https://sheetdb.io/api/v1/qj705o9l7kpc9',data).then((res)=>{
  console.log(res)}).catch((err)=>{
    console.log(err) 
  })
  }

  return (
    <div className="container-fluid mt-3 d-flex justify-content-center">

      <div className="col-xl-6 col-8">
        <div className="form-main-content col-12  ">
          <h3 className='col-12 text-center'>USER DETAILS</h3>
          {/*  */}
          <form className="form" onSubmit={handleSubmit}>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="DSAcode">RETAILER ID<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Name"
                type="text"
                value={RETAILER_ID}
                onChange={(e)=>{setRETAILER_ID(e.target.value)}}
                id="Name"
                className="col-11 col-xl-7 form-input"
              />
            </div>
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="phonenumber">Customer's Phone No.<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="phonenumber"
                type="number"
                value={Phone_number}
                onChange={(e)=>{setPhone_number(e.target.value)}}
                id="phonenumber"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="name">Name (As Per PAN Card)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="name"
                type="text"
                value={Name}
                onChange={(e)=>{setName(e.target.value)}}
                id="name"
                className="col-11 col-xl-7 form-input"
              />
            </div>
            
                        <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="pannumber">PAN NO (As Per PAN Card)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="pannumber"
                type="text"
                value={PAN_NO}
                onChange={(e)=>{setPAN_NO(e.target.value)}}
                id="pannumber"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="aadhaarnumber">AADHAAR No<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="aadhaarnumber"
                type="number"
                value={AADHAAR_NO}
                onChange={(e)=>{setAADHAAR_NO(e.target.value)}}
                id="aadhaarnumber"
                className="col-11 col-xl-7 form-input"
              />
            </div>
            
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="mothersname">Mother’s Name<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="mothersname"
                type="text"
                value={Mother_name}
                onChange={(e)=>{setMother_name(e.target.value)}}
                id="mothersname"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="currentaddress">Current Residence Address<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="currentaddress"
                type="text"
                value={current_residence_address}
                onChange={(e)=>{setcurrent_residence_address(e.target.value)}}
                id="currentaddress"
                className="col-11 col-xl-7 form-input"
              />
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="pincode">Area Pin Code<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="pincode"
                type="number"
                value={ area_pin_code}
                onChange={(e)=>{setarea_pin_code(e.target.value)}}
                id="pincode"
                className="col-11 col-xl-7 form-input"
              />
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="caot">Current Address Ownership Type<span>*</span></label>
              <select 
              class="form-select1"
              type="text"
              value={current_address_ownership_type}
                onChange={(e)=>{setcurrent_address_ownership_type(e.target.value)}}
              id="dropdown1"
              name='dropdown1'>
              <option selected>Open this select menu</option>
              <option value="Owned">Owned</option>
              <option value="Rented">Rented</option>
              <option value="Parental Owned">Parental Owned</option>
            </select>
            </div>


          
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="email">Personal Email ID<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="email"
                type="email"
                value={personal_email}
                onChange={(e)=>{setpersonal_email(e.target.value)}}
                id="email"
                className="col-11 col-xl-7 form-input"
              />
            </div>

           
             <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="salary">Net In-Hand Salary (EXAMPLE: 15,000)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="salary"
                type="number"
                value={net_in_hand_salary}
                onChange={(e)=>{setnet_in_hand_salary(e.target.value)}}
                id="salary"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="monthSalary">Gross Monthly Salary<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="monthSalary"
                type="number"
                value={gross_monthly_salary}
                onChange={(e)=>{setgross_monthly_salary(e.target.value)}}
                id="monthSalary"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="companyname">Current Company Name  <span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="companyname"
                type="text"
                value={current_company_name}
                onChange={(e)=>{setcurrent_company_name(e.target.value)}}
                id="companyname"
                className="col-11 col-xl-7 form-input"
              />
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="designation">Designation<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="designation"
                type="text"
                value={designation}
                onChange={(e)=>{setdesignation(e.target.value)}}
                id="designation"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="presentjobyearp">No. Of Years In Present Job <span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="presentjobyearp"
                type="number"
                value={no_of_years_in_present_job}
                onChange={(e)=>{setno_of_years_in_present_job(e.target.value)}}
                id="presentjobyearp"
                className="col-11 col-xl-7 form-input"
              />
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="officelandline">Office Landline Number (OPTIONAL)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="officelandline"
                type="text"
                value={office_landline_number}
                onChange={(e)=>{setoffice_landline_number(e.target.value)}}
                id="officelandline"
                className="col-11 col-xl-7 form-input"
              />
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="bank">Bank Account Name (EXAMPLE: ICICI BANK)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="bank"
                type="text"
                value={bank_account_name}
                onChange={(e)=>{setbank_account_name(e.target.value)}}
                id="bank"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="loanamount">Desired Required Loan Amount (EXAMPLE: 10,00,000)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="loanamount"
                type="number"
                value={desired_required_loan_amount}
                onChange={(e)=>{setdesired_required_loan_amount(e.target.value)}}
                id="loanamount"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="purposeloan">Purpose Of Loan (EXAMPLE: PERSONAL USE)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="purposeloan"
                type="text"
                value={purpose_of_loan}
                onChange={(e)=>{setpurpose_of_loan(e.target.value)}}
                id="purposeloan"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="relativename">Name Of a Relative<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="relativename"
                type="text"
                value={name_of_a_relative}
                onChange={(e)=>{setname_of_a_relative(e.target.value)}}
                id="relativename"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="relativenumber">Relative's Phone Number<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="relativenumber"
                typlandmarke="number"
                value={relative_phone_number}
                onChange={(e)=>{setrelative_phone_number(e.target.value)}}
                id="relativenumber"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            
            
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="Friendmadd">Relative Residence Address<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Friendmadd"
                type="text"
                value={relative_residence_address}
                onChange={(e)=>{setrelative_residence_address(e.target.value)}}
                id="Friendmadd"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="cibilscore">CIBIL Score (Optional)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="cibilscore"
                type="text"
                value={CIDIL_score}
                onChange={(e)=>{setCIDIL_score(e.target.value)}}
                id="cibilscore"
                className="col-11 col-xl-7 form-input"
              />
            </div> 


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="mosc">Mode Of Salary Credit<span>*</span></label>
              <select
              class="form-select4"
              type="text"
              value={mode_of_salary_credit}
                onChange={(e)=>{setmode_of_salary_credit(e.target.value)}}
              id="dropdown4"
              name='dropdown4'>
              <option selected >Open this select menu</option>
              <option value="Bank Transfer/NEFT">Bank Transfer/NEFT</option>
              <option value="CASH">CASH</option>
              <option value="CHEQUE">CHEQUE</option>
            </select>
            </div>

{/* 
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="cibilscore">PAN CARD IMAGE<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="pancardimage"
                type="file"
                value={PAN_CARD_IMAGE}
                onChange={(e)=>{setPAN_CARD_IMAGE(e.target.value)}}
                id="pancardimage"
                className="col-11 col-xl-7 form-input"
              />
            </div> 

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="cibilscore">AADHAAR FRONT IMAGE<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="aadhaarfrontimage"
                type="file"
                value={AADHAAR_FRONT}
                onChange={(e)=>{setAADHAAR_FRONT(e.target.value)}}
                id="aadhaarfrontimage"
                className="col-11 col-xl-7 form-input"
              />
            </div> 


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="cibilscore">AADHAAR BACK IMAGE<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="aadhaarbackimage"
                type="file"
                value={AADHAAR_BACK}
                onChange={(e)=>{setAADHAAR_BACK(e.target.value)}}
                id="aadhaarbackimage"
                className="col-11 col-xl-7 form-input"
              />
            </div> 

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="cibilscore">PASSPORT SIZE IMAGE<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="passportimage"
                type="file"
                value={PASSPORT_SIZE_IMAGE}
                onChange={(e)=>{setPASSPORT_SIZE_IMAGE(e.target.value)}}
                id="passportimage"
                className="col-11 col-xl-7 form-input"
              />
            </div>  */}



            <div className='col-12 d-flex justify-content-center'>
              <button type="submit" className='mt-5 form-input-btn'>SUBMIT</button>
            </div>
          </form>

        </div>
      </div>






    </div>
  );
}