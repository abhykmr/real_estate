import { useParams } from "react-router-dom";

const DynamicPage = () => {
  const { id } = useParams();
  return <div>DynamicPage</div>;
};

export default DynamicPage;
