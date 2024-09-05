import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataForm from "../../components/DataForm";
import Button from "@mui/material/Button";

const JobApplicationDetails = (props) => {
  const navigateApply = useNavigate();
  const managerObject = props.specificUser;

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8080/jobs/" + props.job.id, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

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
      );
    } catch (error) {
      console.error("Error updating job:", error);
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
      options: ["OPEN", "CLOSED"],
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
            navigateCandidates(RouteConstants.JobApplicantSearchPage)
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
