import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/dashboard/dashboard";
import ErrorPage from "../pages/error/errorPage";
import TaskDetail from "../pages/task-detail/task-details";
import TaskManagement from "../pages/taskManagement/taskManagement";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'task/:id',
          element: <TaskDetail />,
        },
        {
          path: 'error',
          element: <ErrorPage />
        },
        {
          path: 'edit/:id',
          element: <TaskManagement />,
        }
      ]
    }
  ]);

export default router;