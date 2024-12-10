const inputClasses = "w-full px-4 py-2 border border-light-gray rounded-lg focus:outline-none focus:ring-1"
const labelClasses = "block text-sm font-medium text-marine-blue"
const errorClasses = "text-sm text-strawberry-red font-bold font-ubuntu"


const FormInput = ({ label, id, type, value, onChange, placeholder, error }) => {
    return (
      <div className="space-y-1">
        <div className="flex justify-between">
          <label htmlFor={id} className={labelClasses}>
            {label}
          </label>
          {error && <span className={errorClasses}>{error}</span>}
        </div>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${inputClasses} ${
            error ? 'border-strawberry-red focus:ring-transparent' 
                  : 'focus:ring-purplish-blue'
          }`}
        />
      </div>
    )
  }

  export default FormInput
  