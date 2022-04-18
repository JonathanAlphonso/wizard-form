import React, { Fragment } from "react";

import CustomField from "../CustomField";

const BasicInfo = () => (
  <Fragment>
    <CustomField name="firstName" label="First Name" />
    <CustomField name="lastName" label="Last Name" />
  </Fragment>
);

export default BasicInfo;
