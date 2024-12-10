
import thanksIcon from '../assets/images/icon-thank-you.svg'

const Finish = () => {
  return (
    <div className='text-center space-y-2' >
        <img src={thanksIcon} alt="Thanks icon" className="mx-auto mb-5" />
        <h1 className='text-2xl font-bold' >Thank You</h1>
        <p className="text-cool-gray font-medium" >Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Finish
