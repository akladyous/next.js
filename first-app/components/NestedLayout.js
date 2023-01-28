export default function NestedLayout({ children }) {
  console.log("children : ", children);
  return (
    <div style={{ backgroundColor: "red", margin: "20px" }}>{children}</div>
  );
}
