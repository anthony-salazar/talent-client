import React, { useState } from 'react';
import '../App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import DataForm from './DataForm';



const ApplicantDetails = (props) => {
    console.log(props.candidate);
    const [open, setOpen] = React.useState(false);
    // const [userType, setUserType] = React.useState('candidate'); // Dummy usertype constant

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = async (updateApplication) => {
      try {
        await axios.put(
          "http://localhost:8080/applications/" + props.application.id,
          updateApplication,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        handleClose();
      } catch (error) {
        console.error("Error updating job:", error);
      }
    };

    //create field for dataForm using the fields from the job object
    const fields = [
      {
        name: "listing_status",
        label: "Job Status",
        type: "select",
        options: ["OPEN", "CLOSED"],
      },
    ];
    return (
      <div>
        <p>
          <strong>Application ID:</strong> {props.application.id}
        </p>
        <p>
          <strong>Applicant Name:</strong> {props.candidate.full_name}
        </p>
        <p>
          <strong>Applicant Email:</strong> {props.candidate.email}
        </p>
        <p>
          <strong>Applicant Phone</strong> {props.candidate.phone}
        </p>
        <p>
          <strong>Cover Letter:</strong> {props.application.cover_letter}
        </p>
        <p>
          <strong>Custom Resume:</strong> {props.application.custom_resume}
        </p>
        <p>
          <strong>Application Status:</strong>{" "}
          {props.application.application_status}
        </p>
        <Button
          variant="contained"
          onClick={handleClickOpen}
        >
          Update
        </Button>

        {
          //once the update is clicked, the dialog will open
          open && (
            <DataForm
              open={open}
              onClose={handleClose}
              onSave={handleSave}
              onDelete={{}} // No delete functionality
              data={props.job}
              fields={fields}
              modalTitle="Job Details"
            />
          )
        }
      </div>
    );
}

export default ApplicantDetails;