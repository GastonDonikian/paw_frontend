import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FilterLevel() {

    const [state, setState] = React.useState({
        inPerson: false,
        remote: false,
    });
    
    const modalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
        ...state,
        [event.target.name]: event.target.checked,
        });
    };
    
    const { inPerson, remote } = state;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card component='div' sx={{ maxWidth: 345 }}>
            
     
      <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>

        <Grid container spacing={4} sx={{flexDirection:'row'}}>
            <Grid item>               
                <Typography variant="h6" gutterBottom component="div" sx={{mb:0}} >
                    Level
                </Typography>
            </Grid>
            <Grid item>                
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Grid>
        </Grid> 
    </Container>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <FormControl sx={{ ml: 1 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={inPerson} onChange={modalityChange} name="inPerson" />
            }
            label="In person"
          />
          <FormControlLabel
            control={
              <Checkbox checked={remote} onChange={modalityChange} name="remote" />
            }
            label="Remote"
          />
         
        </FormGroup>
      </FormControl>
      </CardContent>
      </Collapse>
    </Card>
  );
}