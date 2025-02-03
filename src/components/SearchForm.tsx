import { Form } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

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
    <Form action="/search" className="flex items-center">
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          name="term"
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
        />
      </div>
    </Form>
  );
}

export default SearchForm;
