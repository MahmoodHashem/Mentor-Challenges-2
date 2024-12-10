
import { useState } from "react"
import { validatePersonalInfo } from "../../utils/validation"
import useForm from "../../hooks/useForm"

const STEPS = [
    { number: 1, title: 'YOUR INFO', subtitle: 'STEP 1' },
    { number: 2, title: 'SELECT PLAN', subtitle: 'STEP 2' },
    { number: 3, title: 'ADD-ONS', subtitle: 'STEP 3' },
    { number: 4, title: 'SUMMARY', subtitle: 'STEP 4' }
]

const Steps = () => {
    const {currentStep, setCurrentStep, formData} = useForm()
    const { isValid } = validatePersonalInfo(formData.personalInfo)

    const changeSteps = (step) =>{
        if(isValid){
          setCurrentStep(step)
        }
      }

    return (
        <>
            {STEPS.map((step) => (
                <div key={step.number} className="flex  items-center mb-8">
                    <button
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4
            ${currentStep === step.number
                                ? 'bg-light-blue border-none text-marine-blue'
                                : 'border-white text-white'}`}
                        onClick={() => changeSteps(step.number)}
                    >
                        {step.number}
                    </button>
                    <div className='hidden md:block'>
                        <p className="text-cool-gray text-xs">{step.subtitle}</p>
                        <p className="text-white font-bold text-sm">{step.title}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Steps
