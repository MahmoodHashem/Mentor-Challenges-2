const AddOnCard = ({ addon, isYearly, isSelected, onToggle }) => {
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }
    return (
        <label
        tabIndex="0"
        role="checkbox"
        aria-checked={isSelected}
        onKeyDown={handleKeyDown}
        className={`flex items-center p-4 border rounded-lg cursor-pointer hover:border-purplish-blue
          focus:outline-none 
          ${isSelected ? 'border-purplish-blue bg-magnolia' : 'border-light-gray'}`}
      >
        <input
          type="checkbox"
          checked={isSelected}
          tabIndex="-1"
          onChange={onToggle}
          className="h-5 w-5 rounded border-light-gray text-purplish-blue 
            focus:ring-transparent
            checked:bg-purplish-blue hover:cursor-pointer transition-all"
        />
            <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-marine-blue">{addon.name}</h3>
                <p className="text-cool-gray text-sm">{addon.description}</p>
            </div>
            <span className="text-purplish-blue">
                +${isYearly ? `${addon.yearlyPrice}/yr` : `${addon.monthlyPrice}/mo`}
            </span>
        </label>
    )
}

export default AddOnCard
