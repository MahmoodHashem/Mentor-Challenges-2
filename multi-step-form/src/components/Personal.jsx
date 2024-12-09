
import { useState } from "react"
import FormInput from './common/FormInput'
import { validatePersonalInfo } from '../utils/validation'
import useForm from "../hooks/useForm"

const Personal = ({ onNext }) => {
    const { formData, updateFormData } = useForm()
    const [errors, setErrors] = useState({})
  
    console.log(formData)

    const handleChange = (e) => {
        const { id, value } = e.target
        updateFormData('personalInfo', {
          ...formData.personalInfo,
          [id]: value
        })
      
        // Clear error for the field being changed
        if (errors[id]) {
          setErrors(prev => ({
            ...prev,
            [id]: ''
          }))
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { isValid, errors: newErrors } = validatePersonalInfo(formData.personalInfo)
        
        if (isValid) {
          updateFormData('personalInfo', formData.personalInfo)
          onNext()
        console.log(formData)
        } else {
          setErrors(newErrors)
        }
      }
    return (
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-marine-blue mb-2">Personal info</h1>
                <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <FormInput
                    label="Name"
                    id="name"
                    type="text"
                    value={formData.personalInfo.name}
                    onChange={(handleChange)}
                    placeholder="e.g. Stephen King"
                    error={errors.name}
                />

                <FormInput
                    label="Email Address"
                    id="email"
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={handleChange}
                    placeholder="e.g. stephenking@lorem.com"
                    error={errors.email}
                />

                <FormInput
                    label="Phone Number"
                    id="phone"
                    type="tel"
                    value={formData.personalInfo.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 234 567 890"
                    error={errors.phone}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Personal
