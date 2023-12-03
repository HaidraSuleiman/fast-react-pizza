import { Link } from "react-router-dom";

export default function Button({ children, to, type, ...props }) {
  const classes =
    "rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-200 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200";

  const styles = {
    primary: classes + " px-4 py-3 md:px-6 md:py-4",
    small: classes + " py-2 px-2 text-xs md:px-5 md:py-2.5",
    round: classes + ' py-2 px-2 text-sm md:px-5 md:py-2.5',
    secondary:
      "text-stone-700 text-sm hover:text-stone-800 hover:bg-stone-300 bg-stone-200 rounded-full py-2 px-3 transition-colors duration-300",
      
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={styles[type]}>
      {children}
    </button>
  );
}
