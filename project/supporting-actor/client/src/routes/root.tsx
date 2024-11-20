import Nav from "../components/Nav"
import '../App.css'
import SearchInput from "../components/SearchInput";

export default function Root() {

    return (
      <>
        <header className="w-auto p-3 flex items-center justify-between border-b-2 border-solid border-neutral-200">
            <Nav/>
            <div className="rounded-full bg-slate-900 w-10 h-10"></div>
        </header>
        <main>
            <div className="mt-60"></div>
            <SearchInput/>
        </main>
      </>
    );
  }
  