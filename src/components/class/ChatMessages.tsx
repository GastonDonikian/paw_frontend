import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';
import MyMessage from './myMessage';
import UserMessage from './userMessage';

export default function ChatMessages(){


    return (
<>
          
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start" sx={{ mb:0}}>
                <MyMessage></MyMessage>
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb:0}}>
                <MyMessage></MyMessage>
            </ListItem>

            <ListItem alignItems="flex-start" sx={{ mb:0}}>
               <UserMessage></UserMessage>
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb:0}}>
               <UserMessage></UserMessage>
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb:0}}>
                <MyMessage></MyMessage>
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ mb:0}}>
               <UserMessage></UserMessage>
            </ListItem><ListItem alignItems="flex-start" sx={{ mb:0}}>
               <UserMessage></UserMessage>
            </ListItem>

        </List ></>
    );
}