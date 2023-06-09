const App = () => {
  return (
    <section className="app">
      <div className="card">
        <p className="title">How is weather right now?</p>
        <form className="form">
          <input
            type="text"
            placeholder="Enter a Country/City name"
            maxLength={40}
          />
          <button>Search</button>
        </form>
        <span className="line"></span>
        <div className="result"></div>
      </div>
    </section>
  );
};

export default App;
