import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import BaseLayout from "./components/layout/BaseLayout";

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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BaseLayout>
      </Suspense>
    </>
  );
}

export default App;
