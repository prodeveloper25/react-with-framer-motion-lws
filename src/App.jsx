import { Link } from "react-router-dom";

function App() {
  return (
    <div className="shadow-xl flex border mx-auto p-4  gap-6 mb-24 justify-center items-center">
      <Link className="block text-2xl ml-4 mb-3 underline" to="/">
        Home
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="simple">
        Simple
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="keyframe">
        Key Frame
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="button">
        Button
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="transitiontype">
        Transition Type
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="textmotion">
        Text Motion
      </Link>
      <Link className="block text-2xl ml-4 mb-3 underline" to="variants">
        Variants
      </Link>
      {/* <Link className="block text-2xl ml-4 mb-3 underline" to="counter">
        Go to Counter
      </Link> */}
      <Link className="block text-2xl ml-4 mb-3 underline" to="srollreveal">
        ScrollReveal
      </Link>
    </div>
  );
}

export default App;
