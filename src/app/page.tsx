import { PutBlobResult } from "@vercel/blob";
import FormExample from "../components/form-example";

export default function HomePage() {
  return (
    <main
      style={{
        width: "500px",
        position: "relative",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <FormExample />
    </main>
  );
}
