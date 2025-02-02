import Form from "./components/Form";
import Comments from "./components/comments";
import "./App.css";
export default function App() {
  return (
    <div className="app-container">
      <h1>Super-Duper App</h1>
      <Form />
      <Comments />
    </div>
  );
}
