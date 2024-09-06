import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataForm from "../../components/DataForm";
import Button from "@mui/material/Button";
import RouteConstants from "../../routeConstants";

const JobApplicationDetails = (props) => {
    const blankJob = {
        "id" : '',
        "manager_id": '',
        "department": "",
        "listing_title": "",
        "date_listed": "",
        "date_closed": "",
        "job_title": "",
        "job_description": "",
        "additional_information" : "",
        "listing_status": "",
        "manager": {"user": {"id": ''}}
    };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRefresh = (updateJob) => {
    props.refreshJobs()
    if (updateJob) {
        props.setSelectedJob(updateJob)
    } else {
        props.setSelectedJob(blankJob)
    }
  }

  const handleSave = async (updatedJob) => {
    try {
      await axios.put(
        "http://localhost:8080/jobs/" + props.job.id,
        updatedJob,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      ).then(() => handleRefresh(updatedJob));
      handleClose();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  const navigateCandidates = (path) => {
    navigate(path);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8080/jobs/" + props.job.id, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then(() => handleRefresh());
      handleClose()
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };


  const fields = [
    { name: "job_title", label: "Job Title", type: "text", readonly: false },
    { name: "department", label: "Department", type: "text", readonly: false },
    {
      name: "job_description",
      label: "Job Description",
      type: "text",
      rows: 4,
    },
    {
      name: "additional_information",
      label: "Additional Information",
      type: "text",
      rows: 4,
    },
    {
      name: "listing_status",
      label: "Job Status",
      type: "select",
      options: ["Open", "Closed"],
    },
  ];

  return (
    <div>
      <p>
        <strong>Job ID:</strong> {props.job.id}
      </p>
      <p>
        <strong>Job Title:</strong> {props.job.job_title}
      </p>
      <p>
        <strong>Department:</strong> {props.job.department}
      </p>
      <p>
        <strong>Job Status:</strong> {props.job.listing_status}
      </p>
      <p>
        <strong>Job Description:</strong> {props.job.job_description}
      </p>
      <p>
        <strong>Additional Information:</strong>{" "}
        {props.job.additional_information}
      </p>
      <>
        <Button variant="contained" onClick={handleClickOpen}>
          Update
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red", color: "white", marginLeft: 2 }}
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "green", color: "white", marginLeft: 12 }}
          onClick={() =>
            navigateCandidates('/applicant_list/' + props.job.id)
          }
        >
          View Applicants
        </Button>
      </>

      {open && (
        <DataForm
          open={open}
          onClose={handleClose}
          onSave={handleSave}
          onDelete={handleDelete}
          data={props.job}
          fields={fields}
          modalTitle="Job Details"
        />
      )}
    </div>
  );
};

export default JobApplicationDetails;
