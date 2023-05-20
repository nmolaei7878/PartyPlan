import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import BaseLayout from "./components/layout/BaseLayout";

const CreatePlan = lazy(() => import("./pages/plan/CreatePlan"));
const Occasion = lazy(() => import("./pages/plan/components/Occasion"));
const Guest = lazy(() => import("./pages/plan/components/Guest"));
const EventComp = lazy(() => import("./pages/plan/components/EventComp"));
const Invite = lazy(() => import("./pages/plan/components/Invite"));
const Food = lazy(() => import("./pages/plan/components/Food"));
const Alcohol = lazy(() => import("./pages/plan/components/Alcohol"));
const Decorator = lazy(() => import("./pages/plan/components/Decorator"));
const Rent = lazy(() => import("./pages/plan/components/Rent"));
const Todo = lazy(() => import("./pages/todo/Todo"));

function App() {
  return (
    <>
      <Suspense fallback={<div className="w-screen h-screen bg-black "></div>}>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Navigate replace to={"/home"} />} />
            {/* possibly can remove /home due to / path */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/todo/:id" element={<Todo />} />
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
