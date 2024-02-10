import "./CSS/Filter.css";
import InputMinPage from "./InputMinPage";
import InputSearch from "./InputSearch";
import SelectGenre from "./SelectGenre";

function Filters() {
  return (
    <>
      <InputSearch />
      <section className="filters">
        <InputMinPage />
        <SelectGenre />
      </section>
    </>
  );
}

export default Filters;
