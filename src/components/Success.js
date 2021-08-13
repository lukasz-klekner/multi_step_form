import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

export const Success = () => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>Success</Typography>
        </Toolbar>
      </AppBar>
      <h1>Thank you for you submission</h1>
      <p>You will get an email with further instructions</p>
    </>
  )
}
