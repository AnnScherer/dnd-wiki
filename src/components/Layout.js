import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <a href="#" class="top">
        <button>Nach oben</button>
      </a>
    </div>
  );
};

export default Layout;
