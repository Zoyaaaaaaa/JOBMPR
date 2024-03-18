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
import Resume from '../components/topbar/pages/Card/Resume/ResumPage'
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
      path: "/jobs/:id",
      element:  <JobDescription />,

    },
    {
      path: "/Resume",
      element:  <Resume />,

    },
  ]);  
  export default router;