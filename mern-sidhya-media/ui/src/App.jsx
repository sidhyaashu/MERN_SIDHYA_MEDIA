import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";



/**Import pages */
import HomePage from "./pages/homePage/HomePage"
import LoginPage from './pages/authPage/LoginPage';
import RegisterPage from './pages/authPage/RegisterPage';
import VideoSection from './menubar/home/VideoSection';
import SubscriptionSection from './menubar/subscription/SubscriptionSection';
import GroupSection from './menubar/group/GroupSection';
import MessageSction from './menubar/messsage/MessageSection';
import Settings from './menubar/settings/Settings';
import AppC from './channels/AppC';
import Courses from './menubar/courses/Courses';
import CourseContainer from './channels/src/components/coursecard/CourseContainer';


/**create routes */
const router = createBrowserRouter([
  {
    path: "/home",
    exact: true,
    element: <HomePage />,
    children: [
      {
        path: "video",
        element: <VideoSection />,
      },
      {
        path: "subscriptions",
        element: <SubscriptionSection />,
      },
      {
        path: "group",
        element: <GroupSection />,
      },
      {
        path: "message",
        element: <MessageSction />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    exact: true,
    element: <LoginPage />,
  },
  {
    path: "/",
    exact: true,
    element: <RegisterPage />,
  },
  {
    path: "/channel/:channelId",
    exact: true,
    element: <AppC />,
    children: [
      {
        path: "popular",
        element: <CourseContainer type={"popular"} />,
      },
      {
        path: "it-software",
        element: <CourseContainer type={"it-software"} />,
      },
      {
        path: "datascience",
        element: <CourseContainer type={"datascience"} />,
      },
      {
        path: "artificalintegelence",
        element: <CourseContainer type={"ai"} />,
      },
      {
        path: "matchinelearning",
        element: <CourseContainer type={"ml"} />,
      },
      {
        path: "dig-marketing",
        element: <CourseContainer type={"digital-m"} />,
      },
      {
        path: "chat-gpt-gener-ai",
        element: <CourseContainer type={"c-gpt-ai"} />,
      },
      {
        path: "big-data",
        element: <CourseContainer type={"big-data"} />,
      },
      {
        path: "ui-ux",
        element: <CourseContainer type={"ui/ux"} />,
      },
      {
        path: "w-apps",
        element: <CourseContainer type={"w-apps"} />,
      },
      {
        path: "a-development",
        element: <CourseContainer type={"a-dev"} />,
      },
      {
        path: "f-collage",
        element: <CourseContainer type={"f-collage"} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App

