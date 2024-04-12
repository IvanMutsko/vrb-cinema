import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "./DeleteBtn.styled";

import { useLocation, useNavigate } from "react-router-dom";

const DeleteBtn = ({ id, deleteFn }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button
      onClick={async () => {
        if (location.pathname.includes("/movie/")) {
          await deleteFn(id);
          navigate("/");
        } else {
          deleteFn(id);
        }
      }}
    >
      <AiFillDelete />
    </Button>
  );
};

export default DeleteBtn;

DeleteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  deleteFn: PropTypes.func.isRequired,
};
