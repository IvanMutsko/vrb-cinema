import { ProgressBar } from "react-loader-spinner";
import { Overlay } from "./Loader.styled";

const Loader = () => {
  return (
    <Overlay>
      <ProgressBar
        visible={true}
        height="140"
        width="140"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Overlay>
  );
};

export default Loader;
