import Footer from '../footer';
import Header from '../header';

const Layout = ({ children, showHeader }: any) => {
  return (
    <div className="bg-stone-100">
      <div className="flex justify-center">
        <div className="w-py-10 sm:w-full sm: px-8 md:w-3/4 max-w-5xl min-h-screen">
          {showHeader && <Header />}
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
