import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import {Grid, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import {LessonInterface} from "../Models/Lesson";

const DisplayLesson = (props: any) => {
    let currentLesson: LessonInterface = props.lesson;
    let isProfessor: boolean = props.isProfessor;
    let name,email : string;
    let subjectName: string = currentLesson.subjectName
    if(isProfessor) {
        name = currentLesson.studentName;
        email = currentLesson.studentEmail;
    } else {
        name = currentLesson.professorName;
        email = currentLesson.professorEmail;
    }



    return (
        
            
            <div style={{ border: '1px solid rgba(0,0,0,.150)',
                       backgroundColor: 'white', 
                       borderRadius: '5px', 
                       flexDirection: 'column',
                       display: 'flex', 
                       marginBottom: 8,
                       alignItems: 'flex-start', paddingBottom: 2}}>
                        <Container component="div" sx={{alignContent: 'center', p: '0.75rem 1.25rem', mb:0, backgroundColor: 'rgba(0,0,0,.03)', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                           <Typography>{subjectName}</Typography>
                        </Container>
                   <ListItem alignItems="flex-start" >     
                
                     <Grid
                    container

                    justifyContent="flex-end"
                    direction="row"
                    sx={{display: 'flex', p:2}}
                    spacing={2}
                >
                    <Grid item xs={1}  >
                        <img src="./profilePhoto.jpeg" height={60} />
                    </Grid>
                    <Grid item xs={3} >
                        <Typography gutterBottom variant="h5" component="div" sx={{ml: 2, mb: 0 }}>
                            {name} - ${currentLesson.price}
                        </Typography>
                        <Typography gutterBottom component="div" sx={{ml:2,  mb: 0 }}>
                            {email}
                        </Typography>

                    </Grid>
                    <Grid item xs={8} sx={{justifyContent: 'flex-end', textAlign: 'end'}}>
                        {props.children}
                    </Grid>
                </Grid>

                   
            </ListItem>

</div>

    );
}

export default DisplayLesson;