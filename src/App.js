import { useSelector , useDispatch } from "react-redux/es/exports";
function App() {
  const name = useSelector((state) => state);
  return (
    <div >
      Name: {name}
    </div>
  );
}

export default App;
