import Layout from "@/components/layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import { useEffect } from "react";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
  // console.log(Component.PageLayout);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}
// Home.getLayout = function getLayout(page) {
//   return <NestedLayout>{page}</NestedLayout>;
// };
