import Header from '../header';

const Layout = ({ children, showHeader }: any) => {
  return (
    <div className="mx-20 my-10">
      {showHeader && <Header />}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
