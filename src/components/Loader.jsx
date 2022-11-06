import { Audio } from "react-loader-spinner";

const Loader = ({ app }) => {
  return (
    <div className="flex flex-col items-center">
      <Audio
        height="100"
        width="100"
        color={app === "inside" ? `#141720` : `#e6ecf2`}
        ariaLabel="loading"
      />
      <h1 className="text-gray-400">
        ...Loading Blockchain charts, Metrics, and Market Caps
      </h1>
    </div>
  );
};

export default Loader;
