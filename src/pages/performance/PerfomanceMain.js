import React, { useState } from "react";
import { PerfomanceContext } from "../../data/PerformanceContext";
import TestPlans from "./TestPlans";
import TestPlanDetails from "./TestPlanDetails";

export default () => {
  const [selectedTestPlan, SetselectedTestPlan] = useState([]);
  const [page, setPage] = useState(1);

  const perfomanceData = {
    selectedTestPlan,
    SetselectedTestPlan,
    page,
    setPage,
  };

  return (
    <PerfomanceContext.Provider value={perfomanceData}>
      <>
        {page === 1 && <TestPlans />}
        {page === 2 && <TestPlanDetails />}
      </>
    </PerfomanceContext.Provider>
  );
};
