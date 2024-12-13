import useForm from "../hooks/useForm"
import { plans } from "../data/plans"
import { addons } from "../data/addons"

import { motion, AnimatePresence } from 'motion/react'


const Summary = () => {
  const { formData, updateFormData } = useForm()
  const { plan, addons: savedAddons } = formData
  const planName = plans.find(p => p.id === plan.type)
  const selectedAddons = addons.filter(addon => savedAddons.includes(addon.id))

  const isYearly = plan.isYearly

  const planPrice = isYearly ? planName.yearlyPrice : planName.monthlyPrice
  const addonsTotal = selectedAddons.reduce((sum, addon) =>
    sum + (isYearly ? addon.yearlyPrice : addon.monthlyPrice), 0)
  const total = planPrice + addonsTotal


  const handlePlanChange = () => {
    updateFormData('plan', {
      ...plan,
      isYearly: !plan.isYearly
    })
  }



  return (
    <div className="w-full bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Finishing up</h1>
        <p className="text-cool-gray">Double-check everything looks OK before confirming.</p>
      </div>

      <div className="bg-magnolia rounded-lg p-6">
        {/* Plan Selection */}
        <div className="flex justify-between items-center pb-6 border-b">
          <div>
            <AnimatePresence mode="wait" >
              <motion.h2
                key={isYearly ? 'yearly' : 'monthly'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="font-medium text-marine-blue">
                {planName.name} ({isYearly ? 'Yearly' : 'Monthly'})
              </motion.h2>
            </AnimatePresence>
            <button className="text-cool-gray underline hover:text-purplish-blue"
              onClick={handlePlanChange}
            >
              Change
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.span
              key={isYearly ? 'yearly' : 'monthly'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-bold text-marine-blue"
            >
              ${isYearly ? `${planName.yearlyPrice}/yr` : `${planName.monthlyPrice}/mo`}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Add-ons */}
        {selectedAddons.length > 0 && (
          <div className="mt-4 space-y-4">
            {selectedAddons.map(addon => (
              <div key={addon.id} className="flex justify-between items-center">
                <span className="text-cool-gray">{addon.name}</span>
                <AnimatePresence mode="wait">
                  <motion.span
                   key={isYearly ? 'yearly' : 'monthly'}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                    className="text-marine-blue"
                  >
                    +${isYearly ? `${addon.yearlyPrice}/yr` : `${addon.monthlyPrice}/mo`}
                  </motion.span>
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mt-6 ">
        <AnimatePresence mode="wait">
          <motion.span
           key={isYearly ? 'yearly' : 'monthly'}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
            className="text-cool-gray"
          >
            Total (per {isYearly ? 'year' : 'month'})
          </motion.span>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.span
            key={isYearly ? 'yearly' : 'monthly'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl font-bold text-purplish-blue"
          >
            ${total}/{isYearly ? 'yr' : 'mo'}
          </motion.span>
        </AnimatePresence>
      </div>

    </div>
  )
}

export default Summary
