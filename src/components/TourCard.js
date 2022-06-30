import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { AccessTime } from "@mui/icons-material"
import Rating from '@mui/material/Rating';

const TourCard = () => {
    return (
    <Grid item xs={3}>
        <Paper elevation={3}>
            <img src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg" 
                alt="" 
                className='img'
            />
            {/* Box is pretty much just a div */}
            <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                    Immerse into the falls
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <AccessTime sx={{ width: 12.5}}/>
                    <Typography variant="body2" component="p" marginLeft={0.5}>
                        5 hours
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Rating name="read-only" value={4.5} precision={0.25} readOnly size="small" />
                </Box>
            </Box>
        </Paper>
    </Grid>
    )
}

export default TourCard;