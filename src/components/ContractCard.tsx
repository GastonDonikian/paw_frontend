import * as React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
// @ts-ignore
import Flippy, {BackSide, FrontSide} from 'react-flippy';
import {ContractCardInterface} from "../Models/Contract";
import {intl} from "../i18n/i18n";


const ContractCardComponent = (props: any) => {
  let contract: ContractCardInterface = props.contract;
  let name : string = contract.summaryProfessor.name;
  let surname: string = contract.summaryProfessor.surname;
  let subject: string = contract.subject.name;
  let rating: number = contract.rating;
  let price: string = contract.price ;
  let description : string = contract.description;
  let studies: string = contract.summaryProfessor.studies ;
  let location: string = contract.summaryProfessor.location ;
  let modality: string = contract.remote + ' ' + contract.local ;
  let url: string = contract.url
 


  return (
    <div>
         <Flippy
    flipOnHover={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    
     >
    
    <FrontSide
      style={{
        backgroundColor: 'white', borderRadius:'8px'
      }}
    >
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
                <Typography >{intl.formatMessage({ id: 'price'})}: {price}</Typography>
                
            </Grid>
            
            
        </Grid>

    </FrontSide>
    <BackSide
      style={{ backgroundColor: 'white', borderRadius:'8px'}}>
        <Typography >{intl.formatMessage({ id: 'description'})}: {description}</Typography>
        <Typography >{intl.formatMessage({ id: 'studies'})}: {studies}</Typography>
        <Typography >{intl.formatMessage({ id: 'location'})}: {location}</Typography>
        <Typography >{intl.formatMessage({ id: 'modality'})}: {modality}</Typography>
           
    </BackSide>
  </Flippy>
</div>

  );
}

export default ContractCardComponent;