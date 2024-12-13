import { motion, AnimatePresence } from "motion/react"

const PlanCard = ({ plan, isYearly, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-3 items-start font-ubuntu md:flex-col p-4 border rounded-lg text-left hover:border-purplish-blue transition-all
          ${isSelected ? 'border-purplish-blue bg-magnolia' : 'border-light-gray'}`}
    >
      <img src={plan.icon} alt={plan.name} className="md:mb-5" />
      <div>
        <h3 className="font-bold text-marine-blue">{plan.name}</h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={isYearly ? 'yearly' : 'monthly'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-cool-gray"
          >
            ${isYearly ? `${plan.yearlyPrice}/yr` : `${plan.monthlyPrice}/mo`}
          </motion.p>
        </AnimatePresence>


        {isYearly && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            eixit={{ opacity: 0, y: -10 }}
            className="text-marine-blue text-sm mt-1">2 months free</motion.p>
        )}
      </div>
    </button>
  )
}

export default PlanCard
