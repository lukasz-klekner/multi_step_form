import { useState } from 'react'
import { FormUserDetails } from './FormUserDetails'
import { FormPersonalDetails } from './FormPersonalDetails'
import { Confirm } from './Confirm'
import { Success } from './Success'

export const UserForm = () => {
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [occupation, setOccupation] = useState('')
  const [city, setCity] = useState('')
  const [bio, setBio] = useState('')

  // Proceed to the next step
  const nextStep = () => setStep((prevState) => prevState + 1)

  // Go back to previous step
  const prevStep = () => setStep((prevState) => prevState - 1)

  // Handle fields change
  const handleFirstNameChange = (event) => setFirstName(event.target.value)
  const handleLastNameChange = (event) => setLastName(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleOccupationChange = (event) => setOccupation(event.target.value)
  const handleCityChange = (event) => setCity(event.target.value)
  const handleBioChange = (event) => setBio(event.target.value)

  const values = {
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
  }

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          onEmailChange={handleEmailChange}
          onOccupationChange={handleOccupationChange}
          onCityChange={handleCityChange}
          onBioChange={handleBioChange}
          values={values}
        />
      )
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          onOccupationChange={handleOccupationChange}
          onCityChange={handleCityChange}
          onBioChange={handleBioChange}
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
