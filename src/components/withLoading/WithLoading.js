import React from "react";
import SpinnerComp from "../spinner/SpinnerComp";

const WithLoading = Component => {
  return props =>
    props.isLoading ? <SpinnerComp /> : <Component {...props} />;
};
export default WithLoading;
