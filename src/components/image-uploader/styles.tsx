import { styled } from "@mui/material";

export const ImageUploaderWrapper = styled("div")`
  width: 200px;
  height: 100px;
  background-color: gray;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btn-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50;
    height: 50;

    .add-img {
      color: #ffffff;
      &:hover {
        color: #f5a002;
      }
    }

    .MuiButtonBase-root.MuiButton-root {
      background-color: black;
      min-width: 40px;
      min-height: 40px;
      padding: unset;
      border-radius: 0px;

      > span {
        margin: 0;
      }
    }
  }
`;
