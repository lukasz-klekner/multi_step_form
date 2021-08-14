import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export const FormUserDetails = ({ values, nextStep, onChange }) => {
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
        name='firstName'
        onChange={onChange}
        value={values.firstName}
      />
      <br />
      <TextField
        placeholder='Last Name'
        name='lastName'
        onChange={onChange}
        defaultValue={values.lastName}
        value={values.lastName}
      />
      <br />
      <TextField
        placeholder='Email'
        name='email'
        onChange={onChange}
        defaultValue={values.email}
        value={values.email}
      />
      <br />
      <Button variant='contained' color='primary' onClick={goAhead}>
        Continue
      </Button>
    </>
  )
}
