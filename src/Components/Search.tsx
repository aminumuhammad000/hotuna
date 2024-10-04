import { useState } from "react";
import "./Search.css";

interface Props {
  searchText: (text: string) => void;
}

const Search = ({ searchText }: Props) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} className="aform">
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="search"
          placeholder="type keyword..."
        />
        <button id="submit" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
