import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="container ">
      <div className="logo">
        <img src="/images/logo.png" alt="logo image" />
      </div>

      <ul>
        <li>Home </li>
        <li>ABOUT</li>
        <li>CONTACTS</li>
      </ul>
    </nav>
  );
};

export default Navigation;
