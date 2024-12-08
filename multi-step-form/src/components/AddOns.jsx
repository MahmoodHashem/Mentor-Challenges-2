import { useState } from 'react'
import { addons } from '../data/addons'
import AddOnCard from './common/AddOnCard'


const AddOns = ({ isYearly = false }) => {
  const [selectedAddons, setSelectedAddons] = useState([])

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
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
    </div>
  )
}

export default AddOns
