import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser.jsx";
import Button from "./Button.jsx";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 flex flex-col px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="px-4 text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <div className="mt-8">
          <Button type="primary" to="menu">
            Browse our menu
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
