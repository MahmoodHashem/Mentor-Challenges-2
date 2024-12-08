import AddOns from './components/AddOns'
import Personal from './components/Personal'
import Plan from './components/Plan'
import Finish from './components/Finish'
function App() {
  return (
    <div className="min-h-screen bg-magnolia flex items-center justify-center">
      {/* <Personal /> */}
      {/* <Plan /> */}
      {/* <AddOns isYearly={true} /> */}
      <Finish 
  plan={{
    name: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90
  }}
  addons={[
    {
      id: 'online',
      name: 'Online service',
      monthlyPrice: 1,
      yearlyPrice: 10
    }
  ]}
  isYearly={false}
/>
    </div>
  )
}

export default App
