import useForm from '../hooks/useForm'
import Personal from './Personal'
import Plan from './Plan'
import AddOns from './AddOns'
import Summary from './Summary'
import { validatePersonalInfo } from '../utils/validation'


import { useState } from 'react'
import Steps from './common/Steps'
import Finish from './Finish'

const MultiStepForm = () => {
  const { currentStep, setCurrentStep, formData, updateFormData } = useForm()
  const { isValid, errors: newErrors } = validatePersonalInfo(formData.personalInfo)
  const [errors, setErrors] = useState({})

  const confirm = () => {
    setCurrentStep(5)
    console.log(formData)
  }

 


  const handleNext = () => {
    
    if (currentStep === 1) {
      if (isValid) {
        updateFormData('personalInfo', formData.personalInfo)
        setCurrentStep(2)
      } else {
        setErrors(newErrors)
      }
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else if( currentStep === 3) {
      updateFormData('addons',formData.addons)
      setCurrentStep(4)
    } else if( currentStep === 4){
      confirm()
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Personal errors={errors} setErrors={setErrors} />
      case 2:
        return <Plan />
      case 3:
        return <AddOns  />
      case 4:
        return <Summary  />
      default:
        return <Finish />
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl  mx-auto bg-white rounded-lg md:rounded-2xl shadow-lg py-8 px-6 md:p-4 relative top-16 md:top-0 ">
      {/* Sidebar */}
      <div  className="hidden md:flex flex-col w-1/3 min-h-[500px] rounded-lg p-8 bg-no-repeat bg-cover md:bg-[url(/images/bg-sidebar-desktop.svg)] ">
              <Steps currentStep = {currentStep}  />
      </div>

      {/* Form Content */}
      <div className={`flex flex-col md:mx-auto ${currentStep < 5 ? "justify-between" : "justify-center" } md:w-3/4 py-4 md:py-8 md:px-24  `}>
        {renderStep()}
        {currentStep < 5 && <div className="fixed  md:static bottom-0 left-0 right-0 bg-white flex justify-between p-3 md:p-0">
          {currentStep > 1  && <button
          className='font-ubuntu font-semibold text-cool-gray hover:text-marine-blue '
            onClick={() => setCurrentStep(currentStep - 1)}
          >Go Back</button>}
          <button className={`ml-auto ${currentStep === 4 ? "bg-purplish-blue" : "bg-marine-blue"} text-white font-ubuntu font-medium rounded-lg px-4 py-2 hover:opacity-90 `} onClick={handleNext}>
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>}
      </div>
    </div>
  )
}

export default MultiStepForm
