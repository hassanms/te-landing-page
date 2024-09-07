import React from "react";
import toast from "react-hot-toast";
const Toast = () => {
  const [toasts, setToast] = React.useState(
    toast.success("You have successfully logged in!")
  );
  return <div>{toasts}</div>;
};

export default Toast;
