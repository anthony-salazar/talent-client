import { Label } from "@mui/icons-material";
import { Container, FormControl, TextField, Typography, Button, Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobByID } from "../../api/jobAPI";

function ApplicationFormPage(props) {
    const params = useParams();
    const id = params.jobId
    const [coverLetter, setCL] = useState('')
    const [resume, setResume] = useState('')
    const [job, setJob] = useState({id: '', manager: {}, department: '', listing_title: '',
    date_listed: '', date_closed: '', job_title: '', additional_information: '', listing_status: '', job_description: ''});
    const fetchJob = async () => {
        let temp = await getJobByID(id)
        setJob(temp)
        console.log(temp)
    }
    useEffect(() => {fetchJob()}, [])
    return (
            <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Header user={props.user}/>
                <Container sx={{textAlign: 'left', flexDirection: "column", paddingTop:'2vh', paddingBottom: '2vh'}}>
                    <Typography variant="h3" component="h1">{job.listing_title}</Typography>
                    <Typography variant="body1">{job.job_description}</Typography>
                    <Typography variant="body1">{job.additional_information}</Typography>
                    <FormControl onSubmit={(event) => event.preventDefault()} sx={{marginTop: '2vh'}}>
                        <Typography>Cover Letter</Typography>
                        <TextField value={coverLetter} multiline minRows='5' label="Cover Letter" onInput={(event) => setCL(event.target.value)}/>
                        <Typography sx={{marginTop: '2vh'}}>Resume</Typography>
                        <TextField multiline minRows='5' label="Resume" value={resume} onInput={(event) => {setResume(event.target.value); console.log("Resume: ", resume)}}/>
                        <Button sx={{marginTop: '2vh', maxWidth: '50%'}} type="submit" variant="contained">Submit</Button>
                    </FormControl>
                </Container>
                <Footer/>
            </Box>

    )
}

export default ApplicationFormPage;