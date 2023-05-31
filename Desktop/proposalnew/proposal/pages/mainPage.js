

import { useState } from "react";
import confetti from "canvas-confetti";
import emailjs from 'emailjs-com';
const Home = () => {

  const [formData, setFormData] = useState({
    email: 'hangalerdenebileg@gmail.com',
    firstName: 'Khangal',
    lastName: 'Erdenebileg',
    subject: 'Amjilttai',
    message: 'Amjilttai'
  });

  // send the message and get a callback with an error or details of the message that was sent

  const [state, setState] = useState(0);

  console.log("🚀 ~ Home ~ state:", state)



  const handleYes = () => {
    console.log("handleYes is called");
    console.log("🚀 ~ handleYes ~ formData:", formData)
    try {
      emailjs.send(
        'service_56ozj6o',
        'template_n07cs49',
        formData,
        '5ZFxnp9pcg7yFDyt7'
      )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    } catch (error) {
      console.log(error)
    }


    confetti({
      particleCount: 900,
      spread: 360
    });
    setStatePage(1);
    setStateText("Хорвоогийн хамгийн swag залуутай үерхсэнд тань баяр хүргэе! 😘");
  }

  const [stateText, setStateText] = useState("Надтай үерхээч?");
  const [statePage, setStatePage] = useState(0)
  const handleClick = (() => {
    state === 0 ? setState(60) : setState(0);
    setStateText("За яахав энэ удаадаа өршөөе :)")
  }
  )

  if (statePage === 1) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-blue-400">
        <div className=" bg-white rounded shadow-2xl p-8 m-4 text-black h-64 w-96">
          <h1 className=" text-center font-mono font-extrabold my-4">{stateText}</h1>
        </div>

      </div >
    )
  } else {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-blue-400">
        <div className=" bg-white rounded shadow-2xl p-8 m-4 text-black h-64 w-96">
          <h1 className=" text-center font-mono font-extrabold my-4">{stateText}</h1>
          <div className="">
            <button
              className=" w-1/4  bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg  p-2 rounded"
              type="submit"
              onClick={() => handleYes()}
            >
              <p className=" text-center font-mono font-extrabold ">Тэгье</p>
            </button>
            <button
              className={"w-1/4 bg-red-400  text-white uppercase text-lg p-2 rounded  " + (state === 60 ? 'ml-60' : 'ml-4')}
              type="submit"
              onClick={() => handleClick()}
            >
              <p className=" text-center font-mono font-extrabold ">Үгүй</p>
            </button>
          </div>
        </div>

      </div >
    )
  }

}

export default Home;