import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        En iyi pizza.
        <br />
        <span className="text-yellow-500">
          Fırından çıktığı an yanınızda.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
