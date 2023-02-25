// import { type } from "@testing-library/user-event/dist/type"
import React, { useState,useEffect } from "react"

function PasswordGenerator() {
  
  const [password, setPassword] = useState("")
  const [passwordLength, setpasswordLength] = useState(8)
  const [containsUpperCase, setContainsUpperCase] = useState(true)
  const [containsLowerCase, setContainsLowerCase] = useState(true)
  const [containsNumber, setContainsNumber] = useState(true)
  const [containsSymbols, setContainsSymbols] = useState(true)
  
  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerSet = "abcdefghijklmnopqrstuvwxyz"
  const numberSet = "0123456789"
  const symbolSet = "~!@#$%^&*()_+*/"

  let getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
  }

  let generatePassword = () => {
    let genPass=""
    // setPassword("")

    // if(!containsLowerCase && !containsNumber && !containsSymbols && !containsUpperCase){
    //     console.log("Please Select at least one");
    // }

    if(containsLowerCase){
        // setPassword+=getRandomData(lowerSet)
        // setPassword(password+getRandomData(lowerSet))
        // console.log(password,containsLowerCase);
        genPass+=getRandomData(lowerSet)
        
        
    }
    if(containsUpperCase){
        // setPassword(password+getRandomData(upperSet))
        //  password+=getRandomData(upperSet)
        genPass+=getRandomData(upperSet)
    }
    if(containsSymbols){
        // setPassword(password+getRandomData(symbolSet))
        //   password+=getRandomData(symbolSet)
        genPass+=getRandomData(symbolSet)
    }
    if(containsNumber){
        genPass+=getRandomData(numberSet)
        // console.log(genPass);
        
        // setPassword(password+getRandomData(numberSet))
        //  password+=getRandomData(numberSet)
    }
    if(genPass.length < passwordLength){
            // return generatePassword(password)
            // console.log(genPass);
            return generatePassword(genPass)
    }
    // setPassword(genPass)
    // setPassword(genPass.substring(0,passwordLength))

    // console.log(password);
    console.log(genPass);
    // console.log(genPass.substring(0,passwordLength));
    // document.getElementById("dummyP").innerText=genPass.substring(0, passwordLength);
    
}

// useEffect(() => {
// generatePassword()
// }, [passwordLength,containsLowerCase,containsNumber,containsSymbols,containsUpperCase])



  // generatePassword();

//   console.log(getRandomData(symbolSet))

  return (
    <>
      <div className="input m-auto w-64 mt-28 text-xl border border-red-100">
        <div>{password}</div>
        <br />

        <label htmlFor="passwordLength">PasswordLength </label>
        <input
          type="number"
          name="passwordLength"
          id="passwordLength"
          className=""
          defaultValue={passwordLength}
          onChange={(e) => {
            setpasswordLength(e.target.value)
          }}
          min="8"
          max="50"
        />
        <br />

        <label htmlFor="upperCase">Contains UpperCase </label>
        <input checked={containsUpperCase} onChange={(e)=>{setContainsUpperCase(e.target.checked)}}
        type="checkbox" name="upperCase" id="upperCase" className="mt-5" />
        <br />
        <label htmlFor="lowerCase">Contains LowerCase </label>
        <input checked={containsLowerCase} onChange={(e)=>{setContainsLowerCase(e.target.checked)}} type="checkbox" name="lowerCase" id="lowerCase" />
        <br />
        <label htmlFor="numbers">Contains Numbers </label>
        <input checked={containsNumber} onChange={(e)=>{setContainsNumber(e.target.checked)}} type="checkbox" name="numbers" id="numbers" />
        <br />
        <label htmlFor="symbols">Contains Symbols </label>
        <input checked={containsSymbols} onChange={(e)=>{setContainsSymbols(e.target.checked)}} type="checkbox" name="symbols" id="symbols" />
        <br />
        <button  onClick={generatePassword} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Generate Password</button>

        <p id="dummyP"></p>
      </div>
    </>
  )
}

export default PasswordGenerator
