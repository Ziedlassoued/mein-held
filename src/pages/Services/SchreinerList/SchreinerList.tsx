import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import NavBar from '../../../components/NavBar/NavBar';
import { FormInputProps } from '../../../components/SignUp/SignUpForm/SignUpForm';
import styles from './SchreinerList.module.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PreviewIcon from '@mui/icons-material/Preview';
import SchreinerSrc from '../../../assets/servicesIcon/schreiner.png';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

import RatingSecond from '../../../components/Rating/Rating';

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

function SchreinerList(): JSX.Element {
  const [users, setUsers] = useState<FormInputProps[]>([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get('/api/users/')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(() => {
        console.error();
      });
  }, []);

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.category}>
        <h1 className={styles.heading}>Schreiner</h1>
        {users?.length === 0 && (
          <span>keine Diensleister im Moment vorhanden</span>
        )}
        <div className={styles.boxContainer}>
          {users.map((user) => (
            <div key={user.email}>
              {user.category === 'Schreiner' && (
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    sx={{ bgcolor: orange[50] }}
                    avatar={
                      <Avatar
                        sx={{ bgcolor: orange[700] }}
                        aria-label="company"
                      >
                        <CarpenterIcon />
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={user.companyName}
                    subheader={user.owner}
                  />
                  <CardMedia
                    component="img"
                    height="300"
                    image={SchreinerSrc}
                    alt="Schreiner"
                  />
                  <CardContent>
                    <Typography variant="h3" color="text.secondary">
                      <div className={styles.rating}>
                        <RatingSecond />
                      </div>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ bgcolor: orange[50] }} disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                      <CallIcon />
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                      <WhatsAppIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <Link to={'/me}'} className={styles.btn}>
                        {' '}
                        <PreviewIcon />
                      </Link>
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        <IconButton aria-label="add to favorites">
                          <LocationOnIcon />
                        </IconButton>
                        Anschrift:
                      </Typography>
                      <Typography paragraph>
                        {user.street} <span>{user.houseNumber}</span>
                        <div>
                          {user.zip}
                          <span> {user.city}</span>
                        </div>
                      </Typography>
                      <Typography paragraph>
                        <IconButton aria-label="tel">
                          <CallIcon />
                          <div> {user.phonNumber}</div>
                        </IconButton>
                        <IconButton aria-label="email">
                          <MailOutlineIcon />
                          <div>{user.email}</div>
                        </IconButton>
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam quibusdam, hic enim error incidunt voluptates et
                        dolor illum odit, ut molestias similique soluta quia
                        esse placeat laboriosam doloribus totam distinctio.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SchreinerList;
