import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import BaseLayout from "./components/layout/BaseLayout";
import CreatePlan from "./pages/plan/CreatePlan";
import Occasion from "./pages/plan/components/Occasion";
import Guest from "./pages/plan/components/Guest";
import EventComp from "./pages/plan/components/EventComp";
import Invite from "./pages/plan/components/Invite";
import Food from "./pages/plan/components/Food";
import Alcohol from "./pages/plan/components/Alcohol";
import Decorator from "./pages/plan/components/Decorator";
import Rent from "./pages/plan/components/Rent";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-screen h-screen bg-red  flex items-center justify-center dark:text-slate-900 text-white text-3xl uppercase">
            loading
          </div>
        }
      >
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Navigate replace to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/create-plan/*" element={<CreatePlan />}>
              <Route path="occasion" element={<Occasion />} />
              <Route path="guest" element={<Guest />} />
              <Route path="event" element={<EventComp />} />
              <Route path="invite" element={<Invite />} />
              <Route path="food" element={<Food />} />
              <Route path="alcohol" element={<Alcohol />} />
              <Route path="decorator" element={<Decorator />} />
              <Route path="rent" element={<Rent />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BaseLayout>
      </Suspense>
    </>
  );
}

export default App;
