import * as React from 'react';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
// @ts-ignore
// import Flippy, { FrontSide, BackSide } from 'react-flippy';


const ContractCard = (props: any) => {
  
  let name : string = props.name;
  let surname: string = props.surname;
  let subject: string = props.subject;
  let rating: number = props.rating;
  let price: string = props.price ;
  let description : string = props.description;
  let studies: string = props.studies ;
  let location: string = props.location ;
  let modality: string = props.modality ;



  return (
    <div>
    {/*     <Flippy*/}
    {/*flipOnHover={true} // default false*/}
    {/*flipDirection="horizontal" // horizontal or vertical*/}
    
    {/* >*/}
    
    {/*<FrontSide*/}
    {/*  style={{*/}
    {/*    backgroundColor: 'white', borderRadius:'8px'*/}
    {/*  }}*/}
    {/*>*/}
        <Grid sx={{alignContent:'center', display: 'flex', textAlign:'center', justifyItems: 'center', flexDirection: 'column'}}>
            <Grid item>
                <img src="./profilePhoto.jpeg" height={80} /> 
            </Grid>
            <Grid item>
                <h4>{name} {surname}</h4>
            </Grid>
            <Grid item>
                <h6>{subject}</h6>
            </Grid>
            <Grid item>
                <Rating name="read-only" value={rating} readOnly />
            </Grid>
            <Grid item>
                <Typography >Price: {price}</Typography>
                
            </Grid>
            
            
        </Grid>

  {/*  </FrontSide>*/}
  {/*  <BackSide*/}
  {/*    style={{ backgroundColor: 'white', borderRadius:'8px'}}>*/}
  {/*      <Typography >Description: {description}</Typography>*/}
  {/*      <Typography >Studies: {studies}</Typography>*/}
  {/*      <Typography >Location: {location}</Typography>*/}
  {/*      <Typography >Modality: {modality}</Typography>*/}
  {/*         */}
  {/*  </BackSide>*/}
  {/*</Flippy>*/}
</div>

  );
}

export default ContractCard;