import "./CSS/Filter.css";
import InputMinPage from "./InputMinPage";
import SearchInput from "./SearchInput";
import SelectGenre from "./SelectGenre";

function Filters() {
  return (
    <>
      <SearchInput />
      <section className="filters">
        <InputMinPage />
        <SelectGenre />
      </section>
    </>
  );
}

export default Filters;
