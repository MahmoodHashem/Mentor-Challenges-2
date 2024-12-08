import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: ''
    },
    plan: {
      type: 'arcade',
      isYearly: false
    },
    addons: []
  })

  const updateFormData = (step, data) => {
    setFormData(prev => ({
      ...prev,
      [step]: data
    }))
  }

  return (
    <FormContext.Provider value={{ 
      currentStep, 
      setCurrentStep, 
      formData, 
      updateFormData 
    }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)
