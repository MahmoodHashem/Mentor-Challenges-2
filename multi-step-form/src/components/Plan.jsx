import { useEffect, useState } from 'react'
import { plans } from '../data/plans'
import PlanCard from './common/PlanCard'

import useForm from '../hooks/useForm'

const Plan = () => {
  const { formData, updateFormData } = useForm()
  const [selectedPlan, setSelectedPlan] = useState(formData.plan.type || 'arcade')
  const [isYearly, setIsYearly] = useState(formData.plan.isYearly || false)


  useEffect(() => {
    updateFormData('plan',
      {
        type: selectedPlan,
        isYearly: isYearly
      } )

    console.log(formData.plan.type)
    console.log(formData.plan.isYearly)

   

  }, [selectedPlan, isYearly])




  return (
    <div className="w-full font-ubuntu   bg-white ">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-marine-blue mb-2">Select your plan</h1>
        <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
      </div>

      <div className="space-y-4">
        {/* Plan Options */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              isSelected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-4 bg-magnolia p-4 rounded-lg mt-6">
          <span className={`font-bold ${!isYearly ? 'text-marine-blue' : 'text-cool-gray'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 bg-marine-blue rounded-full p-1"
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform
                ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
            />
          </button>
          <span className={`font-bold ${isYearly ? 'text-marine-blue' : 'text-cool-gray '}`}>Yearly</span>
        </div>
      </div>

    </div>
  )
}

export default Plan
