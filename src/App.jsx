import React from "react";
import { Box } from "@material-ui/core";
import { FormikWizard } from "formik-wizard";

import FormWrapper from "./components/FormWrapper";

import steps from "./steps";

import "./styles.css";

const App = () => {
  const handleSubmit = React.useCallback(values => {
    console.log("full values:", values);
  }, []);

  return (
    <Box textAlign="center">
      <FormikWizard
        steps={steps}
        onSubmit={handleSubmit}
        render={FormWrapper}
      />
    </Box>
  );
};

export default App;
