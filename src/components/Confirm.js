import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { List, ListItem } from '@material-ui/core'

export const Confirm = ({
  values: { firstName, lastName, email, occupation, city, bio },
  nextStep,
  prevStep,
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
          <Typography variant='h6'>Enter User Details</Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>{firstName}</ListItem>
        <ListItem>{lastName}</ListItem>
        <ListItem>{email}</ListItem>
        <ListItem>{occupation}</ListItem>
        <ListItem>{city}</ListItem>
        <ListItem>{bio}</ListItem>
      </List>
      <br />
      <Button variant='contained' color='primary' onClick={goBack}>
        Go back
      </Button>
      <Button variant='contained' color='primary' onClick={goAhead}>
        Confirm
      </Button>
    </>
  )
}
