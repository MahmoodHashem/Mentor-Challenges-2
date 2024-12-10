import { useState } from 'react'
import { addons } from '../data/addons'
import AddOnCard from './common/AddOnCard'
import  useForm  from '../hooks/useForm'

const AddOns = () => {
  const { formData, updateFormData } = useForm()
  const [selectedAddons, setSelectedAddons] = useState(formData.addons)

  const isYearly = formData.plan.isYearly

const toggleAddon = (addonId) => {
  const updatedAddons = selectedAddons.includes(addonId)
    ? selectedAddons.filter(id => id !== addonId)
    : [...selectedAddons, addonId]
    
  setSelectedAddons(updatedAddons)
  updateFormData('addons', updatedAddons)
}

  return (
    <div className="w-full   bg-white ">
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
    </div>
  )
}

export default AddOns
