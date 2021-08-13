import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export const FormUserDetails = ({
  values,
  nextStep,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
}) => {
  const goAhead = (event) => {
    event.preventDefault()
    nextStep()
  }
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        placeholder='First Name'
        onChange={onFirstNameChange}
        defaultValue={values.firstName}
      />
      <br />
      <TextField
        placeholder='Last Name'
        onChange={onLastNameChange}
        defaultValue={values.lastName}
      />
      <br />
      <TextField
        placeholder='Email'
        onChange={onEmailChange}
        defaultValue={values.email}
      />
      <br />
      <Button variant='contained' color='primary' onClick={goAhead}>
        Continue
      </Button>
    </>
  )
}
