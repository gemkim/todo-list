import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppMinJeong from "../AppMinJeong";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      {
        path:'/',
        element: <AppMinJeong />
      },
      {
        // route3
        path: "user",
        element: <div>사용자 상세 페이지입니다.</div>,
      },
    ],
  },
]);

export default router;