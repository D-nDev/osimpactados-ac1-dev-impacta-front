/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { UploadContext } from "contexts/UploadContext";
import { UserContext } from "contexts/UserContext";
import { ChangeEvent, useContext, useRef, useState } from "react";
import { LoadingButton } from "@mui/lab";
import Modal from "@mui/material/Modal";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import { usermicroservice } from "@services/api";
import Swal from "sweetalert2";

const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const AccountProfile = (props: any) => {
  const userContext = useContext<any>(UserContext);
  const uploadContext = useContext<any>(UploadContext);
  const savephotoRef = useRef<any>();
  const [SavePhotoButtonDisabled, setSavePhotoButtonDisabled] =
    useState<boolean>(false);
  const [SavePhotoButtonLoading, setSavePhotoButtonLoading] =
    useState<boolean>(false);

  const [Save2FAButtonDisabled, setSave2FAButtonDisabled] =
    useState<boolean>(false);
  const [Save2FAButtonLoading, setSave2FAButtonLoading] =
    useState<boolean>(false);

  const [Disable2FAButtonLoading, setDisable2FALoading] =
    useState<boolean>(false);

    const [twofactorhelper, settwofactorhelper] =
    useState<string>("");

  const twofactorcodeRef = useRef<any>();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [twofactorqr, settwofactorqr] = useState<any>();

  const [twofactorerror, settwofactorError] = useState<boolean>(false);

  function getImgData(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target!.files![0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          userContext.setUser({ ...userContext.user, photo: result });
        }
      };
      fileReader.readAsDataURL(files);
    }
  }

  const onSavePhoto = async () => {
    savephotoRef.current!.style.opacity = "0.9";
    setSavePhotoButtonDisabled(true);
    setSavePhotoButtonLoading(true);
    await uploadContext.fileUploadHandler();
    setSavePhotoButtonDisabled(false);
    setSavePhotoButtonLoading(false);
    location.reload();
  };

  const enableTwoFactor = async () => {
    try {
      settwofactorhelper("")
      settwofactorError(false);
      twofactorcodeRef.current!.style.opacity = "0.9";
      setSave2FAButtonDisabled(true);
      setSave2FAButtonLoading(true);
      await usermicroservice.post(
        "/validate2fatoken",
        {
          code: twofactorcodeRef.current!.value,
        },
        {
          withCredentials: true,
        }
      );
      setSave2FAButtonDisabled(false);
      setSave2FAButtonLoading(false);
      location.reload();
    } catch (error: any) {
      if (error.response) {
        if (error.response.status == 400) {
          setSave2FAButtonDisabled(false);
          setSave2FAButtonLoading(false);
          settwofactorError(true);
          settwofactorhelper("Código 2FA Inválido")
        }
      } else {
        Swal.fire({
          title: "Erro",
          text: "Erro ao ativar 2FA",
          icon: "error",
        });
      }

      console.log(error);
    }
  };

  const disableTwoFactor = async () => {
    try {
      setDisable2FALoading(true);
      await usermicroservice.delete("/delete2fatoken", {
        withCredentials: true,
      });
      setDisable2FALoading(false);
      location.reload();
    } catch (error: any) {
      Swal.fire({
        title: "Erro",
        text: "Erro ao desativar 2FA",
        icon: "error",
      });
      console.log(error);
    }
  };

  const generateQRCodeTwoFactor = async () => {
    try {
      const result = await usermicroservice.post("/create2fatoken");
      settwofactorqr(result.data);
      handleOpen();
    } catch (error: any) {
      Swal.fire({
        title: "Erro",
        text: "Erro ao gerar o QRCODE",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          Leia o código QR e após insira o código do seu app de autenticação
          para validar
          <img
            style={{ marginLeft: "auto", marginRight: "auto" }}
            src={twofactorqr}
            alt="QR Code 2FA"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Código"
                name="twofactorcodetoenable"
                variant="outlined"
                error={twofactorerror}
                helperText={twofactorhelper}
                inputRef={twofactorcodeRef}
              />
            </Grid>
            <LoadingButton
              style={{ marginLeft: "30px" }}
              color="primary"
              variant="contained"
              loading={Save2FAButtonLoading}
              disabled={Save2FAButtonDisabled}
              onClick={enableTwoFactor}
            >
              Enviar
            </LoadingButton>
          </Box>
        </Box>
      </Modal>

      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={userContext.user.photo}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {userContext.user.name}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" component="label" fullWidth variant="text">
            Alterar foto
            <input
              onChange={function (event) {
                uploadContext.fileSelectedHandler(event);
                getImgData(event);
              }}
              type="file"
              hidden
            />
          </Button>

          <LoadingButton
            loading={SavePhotoButtonLoading}
            disabled={SavePhotoButtonDisabled}
            color="primary"
            onClick={onSavePhoto}
            ref={savephotoRef}
            component="label"
            fullWidth
            variant="text"
          >
            Salvar foto
          </LoadingButton>
        </CardActions>
      </Card>

      <Card {...props} style={{ marginTop: "40px" }}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LooksTwoIcon />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {"Autenticação Dois Fatores"}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            onClick={generateQRCodeTwoFactor}
            disabled={userContext.user.twofactor_enabled == true ? true : false}
            component="label"
            fullWidth
            variant="text"
          >
            Ativar
          </Button>

          <LoadingButton
            loading={Disable2FAButtonLoading}
            color="primary"
            onClick={disableTwoFactor}
            component="label"
            fullWidth
            variant="text"
            disabled={userContext.user.twofactor_enabled == true ? false : true}
          >
            Desativar
          </LoadingButton>
        </CardActions>
      </Card>
    </>
  );
};
