import "./Bala.css";
import React from "react";
import axios from 'axios';
import { useState } from 'react';

export default function App() {

  // const [inputValues, setInputValues] = useState("")

  const[DSA_CODE,setDSA_CODE]=useState("")
  const[Phone_number,setPhone_number]=useState("")
  const[ Name,setName]=useState("")
  const[Date_of_birth,setDate_of_birth]=useState("")
  const[ Fathers_name,setFathers_name]=useState("")
  const[ PAN_NO,setPAN_NO]=useState("")
  const[ AADHAAR_NO,setAADHAAR_NO]=useState("")
  const[ Mother_name,setMother_name]=useState("")
  const[ current_residence_address,setcurrent_residence_address]=useState("")
  const[ landmark,setlandmark]=useState("")

  const[ current_address_ownership_type,setcurrent_address_ownership_type ]=useState("")

  const[  area_pin_code,setarea_pin_code]=useState("")
  const[ no_of_years_at_current_address,setno_of_years_at_current_address]=useState("")
  const[ no_of_years_at_current_city,setno_of_years_at_current_city]=useState("")
  const[ personal_email,setpersonal_email]=useState("")

  const[  educational_qualification,seteducational_qualification]=useState("")
  const[  marital_status,setmarital_status]=useState("")

  const[ name_of_spouse,setname_of_spouse]=useState("")
  const[ net_in_hand_salary,setnet_in_hand_salary]=useState("")
  const[ gross_monthly_salary,setgross_monthly_salary]=useState("")
  const[  current_company_name,setcurrent_company_name]=useState("")
  const[ current_company_address,setcurrent_company_address]=useState("")
  const[ company_landmark,setcompany_landmark]=useState("")
  const[ current_company_area_pincode,setcurrent_company_area_pincode]=useState("")
  const[ designation,setdesignation]=useState("")
  const[ no_of_years_in_present_job,setno_of_years_in_present_job]=useState("")
  const[ date_of_joining_current_company,setdate_of_joining_current_company]=useState("")
  const[ office_landline_number,setoffice_landline_number]=useState("")
  const[ total_work_experience_in_years,settotal_work_experience_in_years]=useState("")
  const[ customer_office_emailid,setcustomer_office_emailid]=useState("")
  const[ bank_account_name,setbank_account_name]=useState("")
  const[ desired_required_loan_amount,setdesired_required_loan_amount]=useState("")
  const[ purpose_of_loan,setpurpose_of_loan]=useState("")
  const[ name_of_a_relative,setname_of_a_relative]=useState("")
  const[ relative_phone_number,setrelative_phone_number]=useState("")
  const[ name_of_a_field,setname_of_a_field]=useState("")
  const[ friend_phone_number,setfriend_phone_number]=useState("")
  const[ friend_residence_address,setfriend_residence_address]=useState("")
  const[ CIDIL_score,setCIDIL_score]=useState("")
  
  const[ mode_of_salary_credit,setmode_of_salary_credit]=useState("")

  
  


  const handleSubmit = (e) => {
    e.preventDefault()
    // alert("Information Is Received");
    console.log(DSA_CODE, Phone_number,Name,Date_of_birth,
      Fathers_name,PAN_NO,AADHAAR_NO,Mother_name, current_residence_address, 
      landmark, area_pin_code, current_address_ownership_type, no_of_years_at_current_address, no_of_years_at_current_city, personal_email,educational_qualification, marital_status,name_of_spouse, 
      net_in_hand_salary, gross_monthly_salary, current_company_name, current_company_address, company_landmark,
      current_company_area_pincode, designation, no_of_years_in_present_job, date_of_joining_current_company, office_landline_number,
      total_work_experience_in_years, customer_office_emailid, bank_account_name, desired_required_loan_amount, purpose_of_loan,
      name_of_a_relative, relative_phone_number, name_of_a_field, friend_phone_number, friend_residence_address, CIDIL_score,mode_of_salary_credit 
      );

    axios.post('http://localhost:3333/user/signup',{
      DSA_CODE:DSA_CODE,
      Phone_number:Phone_number,
      Name:Name,
      Date_of_birth:Date_of_birth,
      Fathers_name:Fathers_name,
      PAN_NO:PAN_NO,
      AADHAAR_NO:AADHAAR_NO,
      Mother_name:Mother_name,
      current_residence_address:current_residence_address, 
      landmark:landmark,
      area_pin_code:area_pin_code,
      current_address_ownership_type:current_address_ownership_type,
      no_of_years_at_current_address:no_of_years_at_current_address,
      no_of_years_at_current_city:no_of_years_at_current_city,
      personal_email:personal_email,
      educational_qualification:  educational_qualification,
      marital_status: marital_status,
       name_of_spouse:name_of_spouse,
      net_in_hand_salary:net_in_hand_salary,
      gross_monthly_salary:gross_monthly_salary,
      current_company_name:current_company_name,
      current_company_address:current_company_address,
      company_landmark:company_landmark,
      current_company_area_pincode:current_company_area_pincode,
      designation:designation,
      no_of_years_in_present_job:no_of_years_in_present_job,
      date_of_joining_current_company:date_of_joining_current_company,
      office_landline_number:office_landline_number,
      total_work_experience_in_years:total_work_experience_in_years,
      customer_office_emailid:customer_office_emailid,
      bank_account_name:bank_account_name,
      desired_required_loan_amount:desired_required_loan_amount,
      purpose_of_loan:purpose_of_loan,
       name_of_a_relative:name_of_a_relative,
      relative_phone_number:relative_phone_number,
      name_of_a_field:name_of_a_field,
      friend_phone_number:friend_phone_number,
      friend_residence_address:friend_residence_address,
      CIDIL_score:CIDIL_score,
      mode_of_salary_credit:mode_of_salary_credit
}).then((res)=>{
  console.log(res)}).catch((err)=>{
    console.log(err) 
  })
  }

  return (
    <div className="container-fluid d-flex justify-content-center">

      <div className="col-xl-8 col-12">
        <div className="form-main-content col-12  ">
          <h3 className='col-12 text-center'>USER DETAILS</h3>
          {/*  */}
          <form className="form" onSubmit={handleSubmit}>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="DSAcode">Name<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Name"
                type="text"
                value={DSA_CODE}
                onChange={(e)=>{setDSA_CODE(e.target.value)}}
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
              <label className="form-label col-12" htmlFor="panname">Name (As Per PAN Card)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="panname"
                type="text"
                value={Name}
                onChange={(e)=>{setName(e.target.value)}}
                id="panname"
                className="col-11 col-xl-7 form-input"
              />
            </div>
            
            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="DOB">Date of Birth
                <span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="dob"
                type="date"
                value={Date_of_birth}
                onChange={(e)=>{setDate_of_birth(e.target.value)}}
                id="dob"
                className="col-11 col-xl-7 form-input"
              />
            </div>
 
            <div className="input-div col-11">           
                <label className="form-label col-12" htmlFor="Fathername">Father’s Name<span>*</span></label>            
                  <input placeholder="Enter your answer"
                name="Fathername"
                type="text"
                value={Fathers_name}
                onChange={(e)=>{setFathers_name(e.target.value)}}
                id="Fathername"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="pannumber">Name (As Per PAN Card)<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="aadhaarnumber">Aadhaar No<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="landmark">Landmark (Example: ABC UNIVERSITY)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="landmark"
                type="text"
                value={landmark}
                onChange={(e)=>{setlandmark(e.target.value)}}
                id="landmark"
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
              <label className="form-label col-12" htmlFor="caot">current address ownership type<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="yearcurrentaddress">No. of Years at Current Address (EXAMPLE: 10)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="yearcurrentaddress"
                type="text"
                value={no_of_years_at_current_address}
                onChange={(e)=>{setno_of_years_at_current_address(e.target.value)}}
                id="yearcurrentaddress"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="yearcrrentcity">No. of Years at Current CITY (EXAMPLE: 15)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="yearcrrentcity"
                type="text"
                value={ no_of_years_at_current_city}
                onChange={(e)=>{setno_of_years_at_current_city(e.target.value)}}
                id="yearcrrentcity"
                className="col-11 col-xl-7 form-input"
              />
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
              <label className="form-label col-12" htmlFor="eq">educational qualification<span>*</span></label>
              <select
              class="form-select3"
              type="text"
              value={educational_qualification}
                onChange={(e)=>{seteducational_qualification(e.target.value)}}
              id="dropdown3"
              name='dropdown3'>
              <option selected>Open this select menu</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="Dctoral/PhDUnmarried">Dctoral/PhDUnmarried</option>
             
            </select>
            </div>


            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="ms"> marital status<span>*</span></label>
              <select
              class="form-select2"
              type="text"
              value={ marital_status}
                onChange={(e)=>{ setmarital_status(e.target.value)}}
              id="dropdown2"
              name='dropdown2'>
              <option selected>Open this select menu</option>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="ifmarried">Name of Spouse (If Married)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="ifmarried"
                type="text"
                value={name_of_spouse}
                onChange={(e)=>{setname_of_spouse(e.target.value)}}
                id="ifmarried"
                className="col-11 col-xl-7 form-input"
              />
            </div>

             <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="salary">Net In-hand Salary (EXAMPLE: 15,000)<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="companyaddress">Current Company Address<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="companyaddress"
                type="text"
                value={current_company_address}
                onChange={(e)=>{setcurrent_company_address(e.target.value)}}
                id="companyaddress"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="landmarkuniversity">Landmark (EXAMPLE: ABC UNIVERSITY)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="landmarkuniversity"
                type="text"
                value={company_landmark}
                onChange={(e)=>{setcompany_landmark(e.target.value)}}
                id="landmarkuniversity"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="companypincode">Current Company Area Pin Code<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="companypincode"
                type="text"
                value={current_company_area_pincode}
                onChange={(e)=>{setcurrent_company_area_pincode(e.target.value)}}
                id="companypincode"
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
              <label className="form-label col-12" htmlFor="companyjoindate">Date of Joining Current Company<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="companyjoindate"
                type="date"
                value={date_of_joining_current_company}
                onChange={(e)=>{setdate_of_joining_current_company(e.target.value)}}
                id="companyjoindate"
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
              <label className="form-label col-12" htmlFor="workexperienceyr">Total Work Experience in Years (EXAMPLE: 10)<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="workexperienceyr"
                type="text"
                value={total_work_experience_in_years}
                onChange={(e)=>{settotal_work_experience_in_years(e.target.value)}}
                id="workexperienceyr"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="officeemail">Customer's Office Email ID<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="officeemail"
                type="email"
                value={customer_office_emailid}
                onChange={(e)=>{setcustomer_office_emailid(e.target.value)}}
                id="officeemail"
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
              <label className="form-label col-12" htmlFor="purposeloan">Purpose of Loan (EXAMPLE: PERSONAL USE)<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="relativename">Name of a Relative<span>*</span></label>
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
              <label className="form-label col-12" htmlFor="Friendname">Name of a Field<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Friendname"
                type="text"
                value={name_of_a_field}
                onChange={(e)=>{setname_of_a_field(e.target.value)}}
                id="Friendname"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="Friendmblnumber">Friend's Phone Number<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Friendmblnumber"
                type="text"
                value={friend_phone_number}
                onChange={(e)=>{setfriend_phone_number(e.target.value)}}
                id="Friendmblnumber"
                className="col-11 col-xl-7 form-input"
              />
            </div>

            <div className="input-div col-11">
              <label className="form-label col-12" htmlFor="Friendmadd">Friend's Residence Address<span>*</span></label>
              <input
                placeholder="Enter your answer"
                name="Friendmadd"
                type="text"
                value={friend_residence_address}
                onChange={(e)=>{setfriend_residence_address(e.target.value)}}
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
              <label className="form-label col-12" htmlFor="mosc">mode of salary credit<span>*</span></label>
              <select
              class="form-select4"
              type="text"
              value={mode_of_salary_credit}
                onChange={(e)=>{setmode_of_salary_credit(e.target.value)}}
              id="dropdown4"
              name='dropdown4'>
              <option selected>Open this select menu</option>
              <option value="Bank Transfer/NEFT">Bank Transfer/NEFT</option>
              <option value="CASH">CASH</option>
              <option value="CHEQUE">CHEQUE</option>
            </select>
            </div>


            <div className='col-12 d-flex justify-content-center'>
              <button type="submit" className='mt-5 form-input-btn'>SUBMIT</button>
            </div>
          </form>

        </div>
      </div>






    </div>
  );
}
