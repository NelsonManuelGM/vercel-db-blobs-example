"use client";

import { TextField } from "@mui/material/index";
import ImageUploader from "../components/image-uploader";
import { useState } from "react";

export default function HomePage() {
  const [image, setImage] = useState("");

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
      <form>
        <div>
          <label htmlFor="firstName">First name</label>
          <TextField
            name="firstName"
            id="firstName"
            placeholder="First name"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </div>
        <div>
          <ImageUploader image={image} setImage={setImage} />
        </div>
      </form>
    </main>
  );
}
