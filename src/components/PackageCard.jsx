import { DoneAll } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ packageData }) => {
    const { id, type, services, details } = packageData;
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: '100%', height: '100%', backgroundColor: '#5f5f5f2f', backdropFilter: 'blur(75%)', color: '#fff', textAlign: 'left' }}>
            <CardActionArea onClick={() => navigate(`/package/${id}`)}>
                <CardMedia
                    style={{objectFit: 'cover',aspectRatio: '4/3', filter: 'blur(.75px)'}}
                    component="img"
                    height="140"
                    image={services.image}
                    alt={`Image of - ${type}`}
                />
                <CardContent >
                    <Typography gutterBottom variant="h6" component="div">
                        {`${type} - ${services.name}`}
                    </Typography>
                    <Typography gutterBottom variant='h6'>
                        {services.price}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                        {services.description}
                    </Typography>
                    <Typography variant='h6' sx={{textAlign: 'center', color: 'red'}}>
                        Services you&apos;ll get
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