import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import {Button, Grid, TextField, Typography} from '@mui/material';
import Table from '@mui/material/Table';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled} from '@mui/material/styles';
import {lightBlue, red} from '@mui/material/colors';
import {ButtonProps} from '@mui/material/Button';
import {Container} from '@mui/system';

const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: lightBlue[600],
    '&:hover': {
        backgroundColor: lightBlue[800],
    },
}));

const RedButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: red[600],
    '&:hover': {
        backgroundColor: red[800],
    },
}));



export default function Files() {

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <>
            <Table sx={{ minWidth: 650, mb: 0 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> <Typography sx={{ fontWeight: 'bold' }}> File name</Typography></TableCell>
                        <TableCell align="right"><Typography sx={{ fontWeight: 'bold' }}> Actions</Typography></TableCell>
                    </TableRow>
                </TableHead></Table>
            <List sx={{ width: '100%', bgcolor: 'background.paper', minHeight: '200px' }}>
                <ListItem alignItems="flex-start" sx={{ mt: 1, mb: 1 }}>
                    <ListItemText primary={"file name xdxd"} />
                    <BlueButton variant="contained" >
                        Download</BlueButton>
                    <RedButton onClick={handleClickOpen} variant="contained" sx={{ ml: 2, }}>
                        Delete</RedButton>
                </ListItem>
                <Divider variant="inset" component="li" sx={{ ml: 0 }} />

                <ListItem alignItems="flex-start" sx={{ mt: 1, mb: 1 }}>
                    <ListItemText primary={"file name xdxd"} />
                    <BlueButton variant="contained" >
                        Download</BlueButton>
                    <RedButton onClick={handleClickOpen} variant="contained" sx={{ ml: 2, }}>
                        Delete</RedButton>
                </ListItem>

                <Divider variant="inset" component="li" sx={{ ml: 0 }} />
            </List >

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this file?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The file will be permanently deleted and this action cannot be undone. 
            You will need to upload the file again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleClose} autoFocus sx={{color: 'red'}}>
            delete
          </Button>
        </DialogActions>
      </Dialog>

            <hr className="black" />

            <TextField
                id="search"
                name="search"
                fullWidth
                placeholder='Name'
                variant="outlined"
                size="small"
                sx={{ mt: 2, mb: 2, pl:3, pr:3 }}
            />
            <Container sx={{borderBlock: 'black', mb:2}}>
                <Grid container direction="row" 
  justifyContent="space-between">
<Grid item>
               
            <Typography><input
                    type="file"
                /></Typography> </Grid>
                <Grid item>
                <Button
                                type="submit"
                                
                                variant="contained"
                                sx={{ bgcolor: '#349AC2' }}
                            >
                                Subir
                            </Button>
                </Grid>
                </Grid>
            </Container>

        

        </>

    );
}