// import './App.css';
// import React from "react";
// import { useState } from 'react';

// export default function App() {
//   const [inputValues, setInputValues] = useState({
   
//   });
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Information Is Received");
//     console.log(inputValues);
//   };
//   const handleChange = event => {
//     const { name, value } = event.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   return (
//     <div className="container-fluid d-flex justify-content-center ">

//       <div className="col-xl-8 col-12">
//         <div className="form-main-content col-12  ">
//           <h3 className='col-12 text-center'>USER DETAILS</h3>

//           <form className="form" onSubmit={handleSubmit}>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="DSAcode">DSA CODE (4XXYY00000)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="DSAcode"
//                 type="text"
//                 onChange={handleChange}
//                 id="DSAcode"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>
//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="phonenumber">Customer's Phone No.<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="phonenumber"
//                 type="number"
//                 onChange={handleChange}
//                 id="phonenumber"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="panname">Name (As Per PAN Card)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="panname"
//                 type="text"
//                 onChange={handleChange}
//                 id="panname"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="DOB">Date of Birth
//                 <span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="dob"
//                 type="date"
//                 onChange={handleChange}
//                 id="dob"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="Fathername">Father’s Name<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="Fathername"
//                 type="text"
//                 onChange={handleChange}
//                 id="Fathername"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="pannumber">Name (As Per PAN Card)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="pannumber"
//                 type="text"
//                 onChange={handleChange}
//                 id="pannumber"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="aadhaarnumber">Aadhaar No<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="aadhaarnumber"
//                 type="number"
//                 onChange={handleChange}
//                 id="aadhaarnumber"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="mothersname">Mother’s Name<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="mothersname"
//                 type="text"
//                 onChange={handleChange}
//                 id="mothersname"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="currentaddress">Current Residence Address<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="currentaddress"
//                 type="text"
//                 onChange={handleChange}
//                 id="currentaddress"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="landmark">Landmark (Example: ABC UNIVERSITY)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="landmark"
//                 type="text"
//                 onChange={handleChange}
//                 id="landmark"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="pincode">Area Pin Code<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="pincode"
//                 type="number"
//                 onChange={handleChange}
//                 id="pincode"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             {/*yearcurrentaddress radio */}

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="yearcurrentaddress">No. of Years at Current Address (EXAMPLE: 10)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="yearcurrentaddress"
//                 type="text"
//                 onChange={handleChange}
//                 id="yearcurrentaddress"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="yearcrrentcity">No. of Years at Current CITY (EXAMPLE: 15)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="yearcrrentcity"
//                 type="text"
//                 onChange={handleChange}
//                 id="yearcrrentcity"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             {/ radio /}
//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="email">Personal Email ID<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="email"
//                 type="email"
//                 onChange={handleChange}
//                 id="email"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             {/ radio /}
//             {/ radio /}

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="ifmarried">Name of Spouse (If Married)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="ifmarried"
//                 type="text"
//                 onChange={handleChange}
//                 id="ifmarried"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="salary">Net In-hand Salary (EXAMPLE: 15,000)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="salary"
//                 type="number"
//                 onChange={handleChange}
//                 id="salary"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="monthSalary">Gross Monthly Salary<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="monthSalary"
//                 type="number"
//                 onChange={handleChange}
//                 id="monthSalary"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="companyname">Current Company Name  <span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="companyname"
//                 type="text"
//                 onChange={handleChange}
//                 id="companyname"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="companyaddress">Current Company Address<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="companyaddress"
//                 type="text"
//                 onChange={handleChange}
//                 id="companyaddress"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="landmarkuniversity">Landmark (EXAMPLE: ABC UNIVERSITY)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="landmarkuniversity"
//                 type="text"
//                 onChange={handleChange}
//                 id="landmarkuniversity"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="companypincode">Current Company Area Pin Code<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="companypincode"
//                 type="text"
//                 onChange={handleChange}
//                 id="companypincode"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="designation">Designation<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="designation"
//                 type="text"
//                 onChange={handleChange}
//                 id="designation"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="presentjobyearp">No. Of Years In Present Job <span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="presentjobyearp"
//                 type="number"
//                 onChange={handleChange}
//                 id="presentjobyearp"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="companyjoindate">Date of Joining Current Company<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="companyjoindate"
//                 type="date"
//                 onChange={handleChange}
//                 id="companyjoindate"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="officelandline">Office Landline Number (OPTIONAL)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="officelandline"
//                 type="text"
//                 onChange={handleChange}
//                 id="officelandline"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="workexperienceyr">Total Work Experience in Years (EXAMPLE: 10)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="workexperienceyr"
//                 type="text"
//                 onChange={handleChange}
//                 id="workexperienceyr"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="officeemail">Customer's Office Email ID<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="officeemail"
//                 type="email"
//                 onChange={handleChange}
//                 id="officeemail"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="bank">Bank Account Name (EXAMPLE: ICICI BANK)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="bank"
//                 type="text"
//                 onChange={handleChange}
//                 id="bank"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="loanamount">Desired Required Loan Amount (EXAMPLE: 10,00,000)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="loanamount"
//                 type="number"
//                 onChange={handleChange}
//                 id="loanamount"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="purposeloan">Purpose of Loan (EXAMPLE: PERSONAL USE)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="purposeloan"
//                 type="text"
//                 onChange={handleChange}
//                 id="purposeloan"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="relativename">Name of a Relative<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="relativename"
//                 type="text"
//                 onChange={handleChange}
//                 id="relativename"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="relativenumber">Relative's Phone Number<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="relativenumber"
//                 typlandmarke="number"
//                 onChange={handleChange}
//                 id="relativenumber"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="relativeadd">Relative's Residence Address<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="relativeadd"
//                 type="text"
//                 onChange={handleChange}
//                 id="relativeadd"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="Friendname">Name of a Friend<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="Friendname"
//                 type="text"
//                 onChange={handleChange}
//                 id="Friendname"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="Friendmblnumber">Friend's Phone Number<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="Friendmblnumber"
//                 type="text"
//                 onChange={handleChange}
//                 id="Friendmblnumber"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="Friendmadd">Friend's Residence Address<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="Friendmadd"
//                 type="text"
//                 onChange={handleChange}
//                 id="Friendmadd"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>

//             <div className="input-div col-11">
//               <label className="form-label col-12" htmlFor="cibilscore">CIBIL Score (Optional)<span>*</span></label>
//               <input
//                 placeholder="Enter your answer"
//                 name="cibilscore"
//                 type="text"
//                 onChange={handleChange}
//                 id="cibilscore"
//                 className="col-11 col-xl-7 form-input"
//               />
//             </div>
//             <div className='col-12 d-flex justify-content-center'>
//               <button className='mt-5 form-input-btn'>SUBMIT</button>
//             </div>
//           </form>

//         </div>
//       </div>






//     </div>
//   );
// }

// Phone_number, Name, Date_of_birth, Fathers_name, PAN_NO, AADHAAR_NO, Mother_name, current_residence_address, landmark, area_pin_code, no_of_years_at_current_address, no_of_years_at_current_city, personal_email, name_of_spouse, net_in_hand_salary, gross_monthly_salary, current_company_name, current_company_address, company_landmark, current_company_area_pincode, designation, no_of_years_in_present_job, date_of_joining_current_company, office_landline_number, total_work_experience_in_years, customer_office_emailid, bank_account_name, desired_required_loan_amount, purpose_of_loan, name_of_a_relative, relative_phone_number, name_of_a_field, friend_phone_number, friend_residence_address, CIDIL_score 