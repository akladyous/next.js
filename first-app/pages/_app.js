import Layout from "@/components/layout.js";
import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
  console.log(Component.PageLayout);
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
