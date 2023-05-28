
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
      particleCount: 150,
      spread: 360
    });
    setStateText("Баярлалаа хайртай шүү үнсий");
  }

  const [stateText, setStateText] = useState("Надтай үерхээч?");
  const handleClick = (() => {
    state === 0 ? setState(60) : setState(0);
    setStateText("За яахав нэг удаадаа өршөөе :)")
  }
  )


  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-400">
      <div className=" bg-white rounded shadow-2xl p-8 m-4 text-black h-64 w-96">
        <h1>{stateText}</h1>
        <button
          className=" w-1/4 bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg  p-2 rounded"
          type="submit"
          onClick={() => handleYes()}
        >
          Yes
        </button>
        <button
          className={"w-1/4 bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg p-2 rounded " + (state === 60 ? 'ml-40' : 'ml-0')}
          type="submit"
          onClick={() => handleClick()}
        >
          No
        </button>
      </div>

    </div >
  );
}

export default Home;