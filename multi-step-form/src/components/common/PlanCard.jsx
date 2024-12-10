const PlanCard = ({ plan, isYearly, isSelected, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`flex gap-3 items-start font-ubuntu sm:flex-col p-4 border rounded-lg text-left hover:border-purplish-blue transition-all
          ${isSelected ? 'border-purplish-blue bg-magnolia' : 'border-light-gray'}`}
      >
        <img src={plan.icon} alt={plan.name} className="md:mb-5" />
        <div>
          <h3 className="font-bold text-marine-blue">{plan.name}</h3>
          <p className="text-cool-gray">
            ${isYearly ? `${plan.yearlyPrice}/yr` : `${plan.monthlyPrice}/mo`}
          </p>
          {isYearly && (
            <p className="text-marine-blue text-sm mt-1">2 months free</p>
          )}
        </div>
      </button>
    )
  }
  
  export default PlanCard
  