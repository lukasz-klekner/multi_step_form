import { useState } from 'react'
import { useFormik } from 'formik'
import { FormUserDetails } from './FormUserDetails'
import { FormPersonalDetails } from './FormPersonalDetails'
import { Confirm } from './Confirm'
import { Success } from './Success'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: '',
}

export const UserForm = () => {
  const [step, setStep] = useState(1)

  const { handleChange, values } = useFormik({ initialValues })

  // Proceed to the next step
  const nextStep = () => setStep((prevState) => prevState + 1)

  // Go back to previous step
  const prevStep = () => setStep((prevState) => prevState - 1)

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          onChange={handleChange}
          values={values}
        />
      )
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onChange={handleChange}
          values={values}
        />
      )
    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
    case 4:
      return <Success />
    default:
      return <h1>Error! Nie ma takiego stepsa</h1>
  }
}
