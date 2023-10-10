import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import Notification from "components/common/Notification";

export const navigation = {
  role: "student",
  root: [
    {
      path: "/dashboard",
      name: "Dashboard",
      title: "Your learning space",
      view: <>Dashboard page</>,
      icon: (
        <Notification amount={5}>
          <DashboardIcon />
        </Notification>
      ),
    },
    {
      path: "/calendar",
      name: "Calendar",
      title: "Your learning space",
      view: <>Calendar page</>,
      icon: <CalendarMonthIcon />,
    },
    {
      path: "/members",
      name: "Members",
      title: "Your learning space",
      view: <>Members page</>,
      icon: <PeopleOutlineIcon />,
    },
  ],
  materials: [
    {
      path: "/filesLibrary",
      name: "Files Library",
      title: "Your learning space",
      view: <>Files Library page</>,
      icon: <FileCopyIcon />,
    },
    {
      path: "/programs",
      name: "Courses",
      title: "Your learning space",
      view: <>programs Library page</>,
      icon: <AutoStoriesIcon />,
    },
    {
      path: "/home-assignments",
      name: "Assignments",
      title: "Your learning space",
      view: <>Assignments Library page</>,
      icon: <AppRegistrationIcon />,
    },
  ],
  resources: [
    {
      path: "/resources",
      name: "Resources",
      title: "Your learning space",
      view: <>resources Library page</>,
      icon: <DataThresholdingIcon />,
    },
  ],
  community: [
    {
      path: "/community",
      name: "Community",
      title: "Your learning space",
      view: <>Community Library page</>,
      icon: <SignLanguageIcon />,
    },
  ],
};
