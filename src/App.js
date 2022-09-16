import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Payment from "./components/steps/Payment";
import Final from "./components/steps/Final";

function App() {
  //TRACK CURRENT STEP TO SHOW DIFF STEPS
  const [currentStep, setCurrentStep] = useState(1);

  //ALL STEPS
  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  // DISPLAY COMPONENT ACCORDING TO STEP
  const displayStep = (step) => {
    if (step == 1) {
      return <Account />;
    } else if (step == 2) {
      return <Details />;
    } else if (step == 3) {
      return <Payment />;
    } else if (step == 4) {
      return <Final />;
    }
  };

  // CHECK IF USER CLICKED NEXT BUTTON , IF CLICKED THEN IT WILL INCREASE OUR CURRENT STEP

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl mainForm pb-2 shadow-xl md:w-1/2">
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}

export default App;
