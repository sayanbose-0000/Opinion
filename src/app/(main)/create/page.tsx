const CreatePage: React.FC = () => {
  return (
    <main className="p-4 pt-2 flex-grow flex justify-center items-center text-center">
      <form action="" className="flex flex-col justify-center gap-8 p-2 w-full mb:w-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <label htmlFor="question">Ask a question:</label>
          <textarea name="question" id="question" autoFocus className="bg-transparent border-2 rounded-md p-2 pl-2.5 outline-none w-full mb:w-96 h-80 resize-none dark:border-zinc-500 dark:focus:border-whiteVarCol border-zinc-400 focus:border-blackVarCol" />
        </div>

        <button type="submit" className="self-center py-2 px-4 rounded-md dark:bg-whiteVarCol dark:text-blackVarCol dark:hover:bg-zinc-400 bg-blackVarCol text-whiteVarCol hover:bg-zinc-600">Ask</button>
      </form>
    </main>
  );
};

export default CreatePage;