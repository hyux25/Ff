import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Login from "Router/Login/Login";
import Room from "Router/Room/Room";
import Main from "Router/Main/Main";
import Account from "Router/Account/Account";
import ClassPage from "Router/ClassPage/ClassPage";
import Dashboard from "Router/Dashboard/Dashboard";
import ForgotPassword from "Router/ForgotPassword/ForgotPassword";
import Signup from "Router/Signup/Signup";
import Schoolchoosing from "Router/Schoolchoosing/Index";
import Schoolsearching from "Router/Schoolsearching/Index";
import Joining from "Router/Joining/Index";
import Mypage from "Router/Mypage/Index";
import Findschool from "Router/Findschool/Index";
import Createclass from "Router/Createclass/Index";
import Schoolchoosingseoul from "Router/Schoolchoosingseoul/Schoolchoosingseoul";
import Detailchoosing from "Router/Detailchoosing/Index";
import Workmaking from "Router/Workmaking/Index";
import Viewclass from "Router/Viewclass/Index";
import Detailclass from "Router/Detailclass/Index";
import Notiyesoryes from "Router/Notiyesoryes/Index";
import "components/Header/Header.css";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/class/:classId" element={<ClassPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/schoolsearching" element={<Schoolsearching />} />
            <Route path="/schoolchoosing" element={<Schoolchoosing />} />
            <Route path="/joining" element={<Joining />} />
            <Route path="/findschool" element={<Findschool />} />
            <Route path="/my" element={<Mypage />} />
            <Route path="/detailchoosing" element={<Detailchoosing />} />
            <Route
              path="/schoolchoosingseoul"
              element={<Schoolchoosingseoul />}
            />
            <Route path="/createclass" element={<Createclass />} />
            <Route path="/workmaking" element={<Workmaking />} />
            <Route path="/viewclass" element={<Viewclass />} />
            <Route path="/detailclass" element={<Detailclass />} />
            <Route path="/notiyesoryes" element={<Notiyesoryes />} />
          </>
        )}
        <Route
          path="/room/:roomId"
          element={<Room isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
