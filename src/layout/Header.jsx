export function Header() {
  return (
    <nav className=" green accent-3">
      <div className="nav-wrapper">
        <a
          href="#"
          className="brand-logo"
          onClick={() => window.location.reload()}
        >
          OMDb Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
