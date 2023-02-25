import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function PasswordGenerator() {
  const [password, setPassword] = useState("")
  const [passwordLength, setpasswordLength] = useState(12)
  const [containsUpperCase, setContainsUpperCase] = useState(true)
  const [containsLowerCase, setContainsLowerCase] = useState(true)
  const [containsNumber, setContainsNumber] = useState(true)
  const [containsSymbols, setContainsSymbols] = useState(true)

  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerSet = "abcdefghijklmnopqrstuvwxyz"
  const numberSet = "0123456789"
  const symbolSet = "~!@#$%^&*()_+*/"

  let handleGeneratorPassword = () => {
    if (!containsLowerCase && !containsNumber && !containsSymbols && !containsUpperCase) {
      notify("Please Select at least one option", true, false)
    }
    else{
      notify("Password Generated", false, false)
    }
    let characterList = ""
    characterList = containsLowerCase ? characterList + lowerSet : characterList
    characterList = containsUpperCase ? characterList + upperSet : characterList
    characterList = containsNumber ?  characterList + numberSet : characterList
    characterList = containsSymbols ?  characterList + symbolSet: characterList
    setPassword(passwordCreator(characterList))
  }

  let passwordCreator = (characterList) => {
    let password = ""
    let characterListLength = characterList.length
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = getRandomIndex(characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  let getRandomIndex = (limit) => {
    return Math.round(Math.random() * limit)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password); 
    if(password===''){
      notify("Nothing to Copy!",true,false)
    }
    else{
      notify("Copied to Clipboard!",false,true)
    }
  };

  const notify=(message,hasError=false,info=false)=>{
    if(hasError){
      toast.error(message,{autoClose: 1000})
    }
    else if (info){
      toast.info(message,{autoClose: 1000})
    }
    else{
      toast.success(message,{autoClose: 1000})
    }
  }

  useEffect(() => {
    handleGeneratorPassword()
  }, [passwordLength, containsLowerCase, containsNumber, containsSymbols, containsUpperCase])

  return (
    <>
      <div className="main w-[90vw] sm:w-[50vw] lg:w-[30vw] xsm:w-[90vw] p-7 rounded-md mt-28 text-xl border border-red-100 flex flex-col bg-gradient-to-br from-cyan-100 to bg-cyan-300">
      <h1 className='text-center text-2xl font-bold mt-1 '>Random Password Generator</h1>
        <div className="mt-5 bg-gradient-to-br from-cyan-300 to bg-cyan-500 py-3 px-2 h-12 mb-4 text-white relative">
          <h3 className="overflow-hidden w-[85%]">{password}</h3>
          <button onClick={handleCopy} className="bg-cyan-900 text-white border-none h-10 p-2 cursor-pointer absolute right-1 top-1 w-10">
            <i className="fa-solid fa-clipboard"></i>
          </button>
        </div>

        <div className="form-Group">
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
        </div>

        <div className="form-Group">
          <label htmlFor="upperCase">Contains UpperCase </label>
          <input
            checked={containsUpperCase}
            onChange={(e) => {
              setContainsUpperCase(e.target.checked)
            }}
            type="checkbox"
            name="upperCase"
            id="upperCase"
            className=""
          />
        </div>

        <div className="form-Group">
          <label htmlFor="lowerCase">Contains LowerCase </label>
          <input
            checked={containsLowerCase}
            onChange={(e) => {
              setContainsLowerCase(e.target.checked)
            }}
            type="checkbox"
            name="lowerCase"
            id="lowerCase"
          />
        </div>
        <div className="form-Group">
          <label htmlFor="numbers">Contains Numbers </label>
          <input
            checked={containsNumber}
            onChange={(e) => {
              setContainsNumber(e.target.checked)
            }}
            type="checkbox"
            name="numbers"
            id="numbers"
          />
        </div>

        <div className="form-Group">
          <label htmlFor="symbols">Contains Symbols </label>
          <input
            checked={containsSymbols}
            onChange={(e) => {
              setContainsSymbols(e.target.checked)
            }}
            type="checkbox"
            name="symbols"
            id="symbols"
          />
        </div>

        <button onClick={handleGeneratorPassword} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Generate Password
        </button>

        <p id="dummyP"></p>
      </div>

      <ToastContainer />
    </>
  )
}

export default PasswordGenerator
