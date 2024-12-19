const HomePage: React.FC = () => {
  const questions = false;

  return (
    <main className="p-4 pt-2 flex justify-start items-start flex-grow flex-wrap">
      {!questions && <p className="self-center m-auto p-2">No reviews exist. Please create a new question</p>}
    </main>
  );
};

export default HomePage;