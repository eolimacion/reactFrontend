import Swal from "sweetalert2";






export const useResendCodeError = (
  resResend,
  setResResend,
  setUserNotFound
) => {
  /// 200 ---------> resend false
  if (resResend?.data?.resend.toString() == "false") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Error sending email with your code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /// 200 ---------> resend true

  if (resResend?.data?.resend.toString() == "true") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "success",
      title: "We have sent  an email with your code ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  // 404 ----------> 'User not found'

  if (
    resResend?.response?.status == 404 &&
    resResend?.response?.data.includes("User not found")
  ) {
    setUserNotFound(() => true);
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Internal server error ❎.",
      text: "We couldn't resend the code. Try again, please.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  // 500 ----------> interval server error
  if (resResend?.response?.status == 500) {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error! Didn't send the email ❎!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
