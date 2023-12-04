import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { deleteComment } from "../../../services/comments.service"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useDeleteError } from "../../../hooks/useDeleteError";

export const DeleteComment = ({ commentId, setIsDeleted }) => {

    const [resDeleteComment, setResDeleteComment] = useState({});
    const [send, setSend] = useState(false);
  
    const handleDeleteComment = async () => {
      Swal.fire({
        title: `Delete comment?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES",
      }).then(async (result) => {
        if (result.isConfirmed) {
        setSend(true)
        setResDeleteComment(await deleteComment(commentId))
        setSend(false)
        
        }
      });
    }
  
    useEffect(() => {
        useDeleteError(resDeleteComment, setResDeleteComment, setIsDeleted);
    }, [resDeleteComment]);




  return (
    <>
    <IconButton aria-label="delete" size="small" onClick={handleDeleteComment}>
    <DeleteIcon fontSize="inherit" />
  </IconButton>
  </>
  )
}
