import  useForm  from '../hooks/useForm'
import Personal from './Personal'
import Plan from './Plan'
import AddOns from './AddOns'
import Finish from './Finish'

const MultiStepForm = () => {
  const { currentStep, setCurrentStep, formData } = useForm()

  

  const nextStep = () => setCurrentStep(prev => prev + 1)
  const prevStep = () => setCurrentStep(prev => prev - 1)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Personal onNext={nextStep} />
      case 2:
        return <Plan onNext={nextStep}  onBack={prevStep}  />
      case 3:
        return <AddOns onNext={nextStep} onBack={prevStep} isYearly={formData.plan.isYearly} />
      case 4:
        return <Finish onBack={prevStep} isYearly={formData.plan.isYearly} />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
      {/* Step indicators */}
      <div className="flex mb-8 justify-center md:justify-start">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full border flex items-center justify-center mr-4
              ${currentStep === step 
                ? 'bg-light-blue border-none text-marine-blue' 
                : 'border-white text-white'}`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Form content */}
      {renderStep()}
    </div>
  )
}

export default MultiStepForm
