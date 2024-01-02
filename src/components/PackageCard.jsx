import { DoneAll } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ packageData }) => {
    const { id, type, services, details } = packageData;
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: '#5f80002f', backdropFilter: 'blur(75%)', color: '#fff', textAlign: 'left' }}>
            <CardActionArea onClick={() => navigate(`/package/${id}`)}>
                <CardMedia
                    style={{objectFit: 'cover',aspectRatio: '16/9'}}
                    component="img"
                    height="140"
                    image={services[0].image}
                    alt={`Image of - ${type}`}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {`${type} - ${services[0].name}`}
                    </Typography>
                    <Typography gutterBottom variant='h6'>
                        {services[0].price}
                    </Typography>
                    <Typography variant="body2" classes={{ color: 'white' }}>
                        {services[0].description}
                    </Typography>
                    <List>
                        {
                            details.included.map((feature, index) => {
                                return (
                                    <ListItem key={index} disablePadding>
                                        <ListItemIcon>
                                            <DoneAll style={{ color: 'red' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={feature} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

PackageCard.propTypes = {
    packageData: PropTypes.object,
}

export default PackageCard;