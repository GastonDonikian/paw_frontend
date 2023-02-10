import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function Files() {

    return (
        <>
          <Table sx={{ minWidth: 650,mb:0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <Typography sx={{fontWeight: 'bold'}}> File name</Typography></TableCell>
            <TableCell align="right"><Typography sx={{fontWeight: 'bold'}}> Actions</Typography></TableCell>
          </TableRow>
        </TableHead></Table>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start" sx={{mt:1, mb:1}}>
                <ListItemText primary={"file name xdxd"} />
                <Button variant="contained" sx={{ color: 'white', display: 'block', bgcolor: '#349AC2' }}>
                    Download</Button>
                <Button variant="contained" sx={{ ml: 2, color: 'white', display: 'block', bgcolor: '#DC3545' }}>
                    Delete</Button>
            </ListItem>
            <Divider variant="inset" component="li" sx={{ ml: 0 }} />

            <ListItem alignItems="flex-start" sx={{mt:1, mb:1}}>
                <ListItemText primary={"file name xdxd"} />
                <Button variant="contained" sx={{  color: 'white', display: 'block', bgcolor: '#349AC2' }}>
                    Download</Button>
                <Button variant="contained" sx={{ ml: 2, color: 'white', display: 'block', bgcolor: '#DC3545' }}>
                    Delete</Button>
            </ListItem>

            <Divider variant="inset" component="li" sx={{ ml: 0 }} />
        </List ></>

    );
}