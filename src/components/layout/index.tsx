import Header from '../header';

const Layout = ({ children, showHeader }: any) => {
  if (showHeader) {
    return (
      <div className="mx-20 my-10">
        <Header />
        <div>{children}</div>
      </div>
    );
  } else {
    return <>{children}</>;
  }
};

export default Layout;
