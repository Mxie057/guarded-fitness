import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Components
import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <div className="home"></div>
      <Hero></Hero>
    </>
  );
};

export default Home;
