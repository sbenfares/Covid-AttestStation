function App() {
  return (
    <div id="page">
      <div className="header header-fixed header-logo-center header-auto-show">
        <a href="index.html" className="header-title">
          Subscriptions
        </a>
        <a href="#" data-back-button className="header-icon header-icon-1">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a href="#" data-menu="menu-main" className="header-icon header-icon-4">
          <i className="fas fa-bars"></i>
        </a>
        <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-dark">
          <i className="fas fa-sun"></i>
        </a>
        <a href="#" data-toggle-theme className="header-icon header-icon-3 show-on-theme-light">
          <i className="fas fa-moon"></i>
        </a>
      </div>
      <div className="page-content pb-0">
        <div className="card rounded-0 check-card" data-card-height="cover">
          <div className="card-center text-center pl-3">
            <h1 className="font-22 font-700 color-highlight mb-n1">Say Hello to</h1>
            <h1 className="font-40 font-800 pb-4">AppKit</h1>
            <h4 className="opacity-60 mb-4">
              Explore endless possibilties <br /> like never seen before on Mobile.
            </h4>
            <img src="/images/undraw/a.svg" className="mt-4 mb-4" width="200" />
            <a
              href="/"
              className="btn btn-m btn-full ml-5 mr-5 rounded-sm border-0 gradient-highlight font-600 font-13 mt-5"
            >
              Get Started
            </a>
            <p className="mt-4 opacity-40 font-600">Appkit is a Mobile PWA and Site Template</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
