import React, { Children } from "react";

function Protected({ Children, authentication = true }) {
  return <>{Children}</>;
}

export default Protected;
