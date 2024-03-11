import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import HomeComponent from "../components/topbar/Homecomonents";
 import JobDescription from "../jobdescription/jobdes";
import JobList from "../jobcard/jobcard";
import FilterList from "../Filter";
import JobApplicationForm from "../jobApplication";
import Uploadjob from "../uploadjobs/uploadjob";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent/>,
    },
    {
      path: "/jobs",
      element:  <JobList />,
    },
    {
      path: "/uploadjob",
      element:  <Uploadjob />,
    },
    {
      path: "/filter",
      element:  <FilterList />,
    },
    {
      path: "/apply",
      element:  <JobApplicationForm />,
    },
    {
      path: "/jobs/:jobId",
      element:  <JobDescription />,

    },
  ]);  
  export default router;