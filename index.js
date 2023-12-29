const element = (
  <div>
    <div className="bg-container">
      <h1 className="main-heading">Congratulations</h1>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="img-size"
        />
        <h1 className="name">Kiran V</h1>
        <p className="para">
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="img-size"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
