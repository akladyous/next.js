import React from "react";

export default function Page() {
  return <div>Page</div>;
}

Page.getLayout = function getLayout(page) {
  return (
    <>
      <h1>some layout</h1>
    </>
  );
};
