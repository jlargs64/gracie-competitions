export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Gracie Competitions</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        <a className="hover:text-primary/90" href="https://gracieraleigh.com/">
          Gracie Raleigh
        </a>
      </footer>
    </div>
  );
}
