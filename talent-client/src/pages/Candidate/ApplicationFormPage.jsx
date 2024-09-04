import { Label } from "@mui/icons-material";
import { Container, FormControl, TextField, Typography, Button, Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

function ApplicationFormPage(props) {
    const params = useParams();
    const id = params.jobId
    return (
            <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Header user={props.user}/>
                <Container sx={{textAlign: 'left', flexDirection: "column", paddingTop:'2vh', paddingBottom: '2vh'}}>
                    <Typography variant="h3" component="h1">{'Job Title: ' + id}</Typography>
                    <Typography variant="body1">LOrem ipsum atajkra lsdghaskflkasf asfmadga.</Typography>
                    <FormControl onSubmit={(event) => event.preventDefault()} sx={{marginTop: '2vh'}}>
                        <Typography>Cover Letter</Typography>
                        <TextField multiline minRows='5' label="Cover Letter"/>
                        <Typography sx={{marginTop: '2vh'}}>Resume</Typography>
                        <TextField multiline minRows='5' label="Resume"/>
                        <Button sx={{marginTop: '2vh', maxWidth: '50%'}} type="submit" variant="contained">Submit</Button>
                    </FormControl>
                </Container>
                <Footer/>
            </Box>

    )
}

export default ApplicationFormPage;