import React from 'react';
import { Container, Box , Typography } from '@mui/material';
import HeaderComponent from '../../components/Header';
import FooterComponent from '../../components/Footer';
import { getAllApplications, getApplicationById, getApplicationByJobId, 
    getApplicationByManagerId, getApplicationByUserId,addApplication, 
    updateApplication, deleteApplicationById} from '../../api/applicationApi';
import { useEffect } from 'react';

export default function HomePage(props) {

    const applications = async () => {
        let temp = getAllApplications();
        console.log(temp)
    };
    const applicationByID = async () => {
        let temp = getApplicationById(100);
        console.log("applicationByID ",temp)
    };

    const applicationByMangerID = async () => {
        let temp = getApplicationByManagerId(1);
        console.log("applicationByManagerID ",temp)
    };

    const applicationByJobID = async () => {
        let temp = getApplicationByJobId(1);
        console.log("applicationByJobID ",temp)
    };

    const applicationByUserID = async () => {
        let temp = getApplicationByUserId(6);
        console.log("applicationByUserID ",temp)
    };

    const deleteApplicationByIDHere = async () => {
        let temp = deleteApplicationById(22);
        console.log("deleteApplicationByID ",temp)
    };

    const addApplicationHere = async () => {
        console.log("In Home add app");
        //return;
        let data = {
            user: {
                id: 5,
                username: "jane",
                password: "jane",
                type: "Candidate"
            },
            job: {
                id: 1,
                manager: {
                    id: 1,
                    user: {
                        id: 8,
                        username: "linda",
                        password: "linda",
                        type: "Hiring_Manager"
                    },
                    full_name: "Linda Thompson",
                    email: "linda@example.com",
                    department: "Human Resources",
                    phone: "555-1212"
                },
                department: "Human Resources",
                listing_title: "HR Manager Position",
                date_listed: "2024-08-01T09:00:00",
                date_closed: "2024-09-15T17:00:00",
                job_title: "HR Manager",
                job_description: "Responsible for managing HR processes and overseeing recruitment.",
                additional_information: "Experience in HR management required. Certification in HR is a plus.",
                listing_status: "Open"
            },
            date_applied: "2024-08-22T12:30:00",
            cover_letter: "I am very enthusiastic about the HR Manager Position. My experience in digital campaigns and marketing can bring fresh perspectives to HR processes.",
            custom_resume: "Marketing specialist with a focus on digital campaigns and SEO.",
            application_status: "Under Review"
        };
        let temp = addApplication(data);
        console.log("addApplication ",temp)

    }


    const updateApplicationHere = async () => {
        console.log("In Home update app");
        //return;
        let data = {
            user: {
                id: 5,
                username: "jane",
                password: "jane",
                type: "Candidate"
            },
            job: {
                id: 1,
                manager: {
                    id: 1,
                    user: {
                        id: 8,
                        username: "linda",
                        password: "linda",
                        type: "Hiring_Manager"
                    },
                    full_name: "Linda Thompson",
                    email: "linda@example.com",
                    department: "Human Resources",
                    phone: "555-1212"
                },
                department: "Human Resources",
                listing_title: "HR Manager Position",
                date_listed: "2024-08-01T09:00:00",
                date_closed: "2024-09-15T17:00:00",
                job_title: "HR Manager",
                job_description: "Responsible for managing HR processes and overseeing recruitment.",
                additional_information: "Experience in HR management required. Certification in HR is a plus.",
                listing_status: "Open"
            },
            date_applied: "2024-08-22T12:30:00",
            cover_letter: "I am very enthusiastic about the HR Manager Position. My experience in digital campaigns and marketing can bring fresh perspectives to HR processes.",
            custom_resume: "Marketing specialist with a focus on digital campaigns and SEO.",
            application_status: "Under Review111111111"
        };
        let temp = updateApplication(21,data);
        console.log("updateApp ",temp)

    }





    useEffect(() => {
        applications();
        applicationByID();
        applicationByUserID();
        applicationByJobID();
        applicationByMangerID();
        addApplicationHere();
        updateApplicationHere();
        deleteApplicationByIDHere();
    },[]);
    //useEffect(() => applications(),[]);

    return (
        <Box sx = {{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <HeaderComponent user={props.user} specificUser={props.specificUser}/>
            <Container sx = {{flex: '1 0 auto'}}>
                <Typography variant = 'h2' align = 'center'>Home Page</Typography>
                <Typography align = 'center'>This is the "Home" page!
                    This application provides a "partial" solution that users can use to get started on building their own full-fledged Talent Management system.
                    The application also includes source code that can be used as an example for building out the rest of the application.
                    This REACT based front-end works along with the Talent back-end REST API which is also a "partial" solution that needs to be built-out.
                    The system accepts logins from three types of users:
                    - Administrator
                    - Hiring_Manager
                    - Candidate
                    In addition, Guests can use limited functionality without having to log in.
                    Before you start your work you should become familiar with the front-end user interface and the back-end API, their code and the techniques being used.
                </Typography>
            </Container>
            <FooterComponent />
        </Box>
    )
}