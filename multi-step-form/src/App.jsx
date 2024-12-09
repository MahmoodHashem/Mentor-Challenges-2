import { FormProvider } from './context/FormContext'
import MultiStepForm from './components/MultiStepForm'

 const App = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-magnolia flex items-center justify-center p-4">
        <MultiStepForm />
      </div>
    </FormProvider>
  )
}

export default App