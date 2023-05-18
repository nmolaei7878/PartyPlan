import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import BaseLayout from "./components/layout/BaseLayout";
import CreatePlan from "./pages/plan/CreatePlan";

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
              <Route path="occasion" element={<div>OCCASION</div>} />
              <Route path="guest" element={<div>Guest</div>} />
              <Route path="event" element={<div>event</div>} />
              <Route path="invite" element={<div>invite</div>} />
              <Route path="food" element={<div>food</div>} />
              <Route path="alcohol" element={<div>alcohol</div>} />
              <Route path="decorator" element={<div>decorator</div>} />
              <Route path="rent" element={<div>rent</div>} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BaseLayout>
      </Suspense>
    </>
  );
}

export default App;
