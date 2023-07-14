// using withRouter in class-component
import { useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
}
export default withRouter;