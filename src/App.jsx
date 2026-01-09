import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  return <></>;
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default App;
