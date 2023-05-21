import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/home";
import BaseLayout from "./components/layout/BaseLayout";
import { ErrorBoundary } from "react-error-boundary";
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
  const navigate = useNavigate();

  return (
    <>
      <BaseLayout>
        <ErrorBoundary
          onError={() => {
            console.log("here");
            navigate("/", { replace: true });
          }}
          fallback={
            <div className="text-3xl text-white font-bold">
              you cant go back azizam Refresh the page to see a Magic
            </div>
          }
        >
          <Suspense
            fallback={<div className="w-screen h-screen bg-black "></div>}
          >
            <Routes>
              <Route path="/" element={<Navigate replace to={"/home"} />} />

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
          </Suspense>
        </ErrorBoundary>
      </BaseLayout>
    </>
  );
}

export default App;
