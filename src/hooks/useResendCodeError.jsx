import Swal from "sweetalert2";






export const useResendCodeError = (
  resResend,
  setResResend,
  setUserNotFound
) => {
  /// 200 ---------> resend false
  if (resResend?.response?.data?.resend  == "false") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "There has been an error emailing your code",
      text: "Please, try again",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  /// 200 ---------> resend true

  if (resResend?.data?.resend.toString() == "true") {
    setResResend(() => ({}));
    Swal.fire({
      icon: "success",
      title: "Confirmation code was sent",
      text: "Please, check your email",
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
      title: "Interval Server Error",
      text: "Please, try again",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  // 500 ----------> interval server error
  if (resResend?.response?.status == 500) {
    setResResend(() => ({}));
    Swal.fire({
      icon: "error",
      title: "Interval Server Error",
      text: "There has been an error in our internal servers. Please, try again",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
