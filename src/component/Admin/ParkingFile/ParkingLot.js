import React from 'react'
import {Box,Typography,makeStyles} from '@material-ui/core'
import Image from './Parking.jpg'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red,grey } from '@mui/material/colors';
import {  CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const usestyles = makeStyles({
    container:{
      height:340,
      margin:10,
      borderRadius:10,
      display:'flex',
      flexDirection:'column',
      '& > *':{
          padding:'0 5px 5px 5px'
      },
      border:'10px #d3ced',
      alignItems:'left',
      
    },
    image:{
      height:150,
      width:'80%'
 
    },
    text:{
     fontfamily: 'Open Sans',
    
     fontweight: 400
    }
 
 })
 const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const ParkingLot = ({req}) => {
    const classes = usestyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <div>
           <Card sx={{ maxWidth: 300,bgcolor: grey[100]}} >
           <CardActionArea>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        title = "New Market"
        />
         <img className={classes.image} src = {Image} />
           <CardContent>
        
        <Typography  style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > ParkingLotId:{req.parkingLotId}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > City: {req.city}</Typography>
             <Typography style={{color:"#424242", fontSize:"18px",fontFamily:"serif"}} variant="body1" > Area:{req.area}</Typography>
       
      </CardContent>

      </CardActionArea>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <IconButton/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
       
        </div>
    )
}

export default ParkingLot



 