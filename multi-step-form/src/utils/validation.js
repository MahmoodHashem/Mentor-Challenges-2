export const validatePersonalInfo = (formData) => {
    let errors = {}
    let isValid = true

    console.log(formData)
  
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
      isValid = false
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      errors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format'
      isValid = false
    }
  
    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!formData.phone) {
      errors.phone = 'Phone number is required'
      isValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Invalid phone format'
      isValid = false
    }
  
    return { isValid, errors }
  }
  