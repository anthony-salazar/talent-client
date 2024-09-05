import { Label } from "@mui/icons-material";
import { Container, FormControl, TextField, Typography, Button, Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobByID } from "../../api/jobAPI";
import Grid from '@mui/material/Grid2'
import { addApplication } from "../../api/applicationApi";

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
        console.log(props.specificUser)
    }
    const submitApplication = () => {
        const application = {user: props.user, job: job, cover_letter: coverLetter, custom_resume: resume, application_status: "Open"}
        addApplication(application)
    }
    useEffect(() => {fetchJob(); 
        if (props.user.type === "Candidate") {
            setResume(props.specificUser.resume)
            console.log('Candidate')
        }}, [])
    return (
            <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Header user={props.user} specificUser={props.specificUser} />
                <Container sx={{textAlign: 'left', flexDirection: "column", paddingTop:'2vh', paddingBottom: '2vh'}}>
                    <Typography variant="h3" component="h1">{job.listing_title}</Typography>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Typography variant="h6" component="h2">Job Description</Typography>
                            <Typography variant="body1">{job.job_description}</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="h6" component="h2">Additional Information</Typography>
                            <Typography variant="body1">{job.additional_information}</Typography>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="h6" component="h2">Job Title</Typography>
                            <Typography variant="body1">{job.job_title}</Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="body1"><strong>Manager: </strong>{job.manager.full_name}</Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="body1"><strong>Department: </strong>{job.department}</Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="body1"><strong>Status: </strong>{job.listing_status}</Typography>
                        </Grid>
                        <Grid size={6}>
                            <Typography variant="body1"><strong>Date Posted: </strong>{job.date_listed}</Typography>
                        </Grid>
                    </Grid>
                    
                    <FormControl onSubmit={(event) => event.preventDefault()} sx={{marginTop: '2vh'}}>
                        <Typography>Cover Letter</Typography>
                        <TextField value={coverLetter} multiline minRows='5' label="Cover Letter" onInput={(event) => setCL(event.target.value)}/>
                        <Typography sx={{marginTop: '2vh'}}>Resume</Typography>
                        <TextField multiline minRows='5' label="Resume" value={resume} onInput={(event) => {setResume(event.target.value); console.log("Resume: ", resume)}}/>
                        <Button sx={{marginTop: '2vh', maxWidth: '50%'}} type="submit" variant="contained" onClick={submitApplication}>Submit</Button>
                    </FormControl>
                </Container>
                <Footer/>
            </Box>

    )
}

export default ApplicationFormPage;