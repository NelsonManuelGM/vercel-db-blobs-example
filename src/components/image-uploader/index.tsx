"use client";

import { useState } from "react";
import { ImageUploaderWrapper } from "./styles";
import { Button } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

export default function ImageUploader({
  image,
  setImage,
}: {
  image: string;
  setImage: (image: string) => void;
}) {
  const onButtonClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    if (image && image.length > 0) {
      e.preventDefault();
      setImage("");
      return;
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);

      reader.onload = (e: any) => {
        setImage(e.target.result);
      };
    }
  };

  return (
    <ImageUploaderWrapper>
      <img src={image} alt="" />
      <span className="btn-container">
        <Button
          component="label"
          startIcon={image ? <Delete /> : <Add />}
          className="add-img"
          fullWidth
          onClick={onButtonClick}
        >
          {image ? null : (
            <input
              type="file"
              style={{ display: "none" }}
              onChange={onInputChange}
            />
          )}
        </Button>
      </span>
    </ImageUploaderWrapper>
  );
}
