import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export const FormPersonalDetails = ({
  values,
  nextStep,
  prevStep,
  onChange,
}) => {
  const goAhead = (event) => {
    event.preventDefault()
    nextStep()
  }

  const goBack = (event) => {
    event.preventDefault()
    prevStep()
  }
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Enter Personal Details</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        placeholder='Occupation'
        name='occupation'
        onChange={onChange}
        defaultValue={values.occupation}
        value={values.occupation}
      />
      <br />
      <TextField
        placeholder='City'
        name='city'
        onChange={onChange}
        defaultValue={values.city}
        value={values.city}
      />
      <br />
      <TextField
        placeholder='Bio'
        name='bio'
        onChange={onChange}
        defaultValue={values.bio}
        value={values.bio}
      />
      <br />
      <Button variant='contained' color='primary' onClick={goBack}>
        Go back
      </Button>
      <Button variant='contained' color='primary' onClick={goAhead}>
        Continue
      </Button>
    </>
  )
}
