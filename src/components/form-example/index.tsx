"use client";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import ImageUploader from "../image-uploader";

export default function FormExample() {
  const [image, setImage] = useState("");
  const [imgFile, setImgFile] = useState<File | null>(null);

  const bindFormAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = e.currentTarget.firstName.value;

    const response = await fetch("/api?filename=" + imgFile?.name, {
      method: "POST",
      body: imgFile,
      headers: {
        "Content-Type": "image/jpeg",
      },
    });
    console.log(response);
  };

  return (
    <form onSubmit={bindFormAction}>
      <div>
        <label htmlFor="firstName">First name</label>
        <TextField
          type="text"
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
        <ImageUploader
          image={image}
          setImage={setImage}
          setImgFile={setImgFile}
        />
      </div>
      <Button type="submit" variant="contained" fullWidth />
    </form>
  );
}
