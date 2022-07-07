import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box'
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BasicModal from "../components/Modal"

const Tour = () => <Container sx={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
            alt="" 
            height={325}
        />
        <ImageCollage />
    </Box>
    <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Box>
    <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>

export default Tour