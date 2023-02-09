import Footer from './footer.js';
import Header from './header.js';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
