import { FormProvider } from './context/FormContext'
import MultiStepForm from './components/MultiStepForm'
import Steps from './components/common/Steps'
import useForm from './hooks/useForm'

const App = () => {

  const { currentStep, setCurrentStep } = useForm()

  console.log(currentStep)

  return (

    <div className="md:min-h-screen bg-magnolia flex items-center justify-center p-4 pb-40 md:p-4">
      <header className='md:hidden  absolute z-0 top-0 h-60 w-full bg-cover bg-[url(/images/bg-sidebar-mobile.svg)]'>
        <div className="flex justify-center items-center mt-5" >
          <Steps currentStep={currentStep} />
        </div>

      </header>
      <MultiStepForm />
    </div>

  )
}

export default App