import { FormEvent, useState } from "react";
import { useNavigate, Form } from "react-router-dom";

function SearchForm() {
  //   const [term, setTerm] = useState("");
  //   const navigate = useNavigate();

  //   function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //     event.preventDefault();
  //     navigate(`/search?term=${term}`);
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input value={term} onChange={(e) => setTerm(e.target.value)} />
  //     </form>
  //   );

  return (
    <Form action="/search">
      <input name="term" />
    </Form>
  );
}

export default SearchForm;
