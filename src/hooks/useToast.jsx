import { toast } from "react-toastify";

export default function useToast() {
  const localTheme = localStorage.getItem("theme");

  const theme =
    localTheme === "black" ? "dark" : localTheme === "light" ? "light" : "dark";

  const ToastSuccess = (message, time) => {
    return toast.success(message, {
      position: "bottom-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  const ToastError = (message, time) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  const ToastWarning = (message, time) => {
    toast.warning(message, {
      position: "bottom-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  return { ToastSuccess, ToastWarning, ToastError };
}
