
import FormInput from './common/FormInput'
import useForm from "../hooks/useForm"

const Personal = ({ errors, setErrors }) => {
    const { formData, updateFormData } = useForm()

    const handleChange = (e) => {
        const { id, value } = e.target
        updateFormData('personalInfo', {
          ...formData.personalInfo,
          [id]: value
        })
      
        if (errors[id]) {
          setErrors(prev => ({
            ...prev,
            [id]: ''
          }))
        }
      }

 
    return (
        <div className="w-full   bg-white ">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-marine-blue mb-2">Personal info</h1>
                <p className="text-cool-gray">Please provide your name, email address, and phone number.</p>
            </div>

            <form  noValidate className="space-y-5">
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
               
            </form>

        </div>
    )
}

export default Personal
