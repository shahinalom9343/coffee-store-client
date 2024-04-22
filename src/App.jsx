import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const coffees = useLoaderData();
  const [remainingCoffees, setRemainingCoffees] = useState(coffees);
  return (
    <>
      <h1 className="text-red-500 text-5xl">
        total no of Coffees : {coffees.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-100 p-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            remainingCoffees={remainingCoffees}
            setRemainingCoffees={setRemainingCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
