import { useContext, useState } from 'react'
import { addons } from '../data/addons'
import AddOnCard from './common/AddOnCard'
import  useForm  from '../hooks/useForm'
import FormContext from '../context/FormContext'

const AddOns = ({ isYearly = false, onNext, onBack }) => {
  const { formData, updateFormData } = useForm()
  const [selectedAddons, setSelectedAddons] = useState(formData.addons)

  const handleNext = () => {
    updateFormData('addons', selectedAddons)
    onNext()
  }

console.log(formData)

const toggleAddon = (addonId) => {
  const updatedAddons = selectedAddons.includes(addonId)
    ? selectedAddons.filter(id => id !== addonId)
    : [...selectedAddons, addonId]
    
  setSelectedAddons(updatedAddons)
  updateFormData('addons', updatedAddons)
}

  return (
    <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Pick add-ons</h1>
        <p className="text-cool-gray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="space-y-4">
        {addons.map((addon) => (
          <AddOnCard
          key={addon.id}
          addon={addon}
          isYearly={isYearly}
          isSelected={selectedAddons.includes(addon.id)}
          onToggle={() => toggleAddon(addon.id)}
        />
        ))}
      </div>
      <button onClick={onBack} >Back</button>
      <button onClick={handleNext} >Next</button>
    </div>
  )
}

export default AddOns
