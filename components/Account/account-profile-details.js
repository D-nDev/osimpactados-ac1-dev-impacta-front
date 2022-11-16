import { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { UserContext } from "contexts/UserContext";
import { v4 as uuidv4 } from 'uuid';

export const AccountProfileDetails = (props) => {
  const userContext = useContext(UserContext);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setValues({ ...userContext.user });
    console.log("akiii", userContext);
  }, [userContext]);

  const [values, setValues] = useState({
    name: userContext.user.name,
    email: userContext.user.email,
    mobileNumber: userContext.user.mobileNumber,
    cpf: userContext.user.cpf,
    twofactor: userContext.user.twofactor_enabled,
  });
  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="Informações da sua conta" title="Perfil" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nome completo"
                name="name"
                disabled
                onChange={handleChange}
                value={values.name || ""}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                disabled
                name="email"
                onChange={handleChange}
                value={values.email || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Telefone"
                name="mobileNumber"
                disabled
                onChange={handleChange}
                type="number"
                value={parseInt(values.mobileNumber) || ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="CPF"
                name="cpf"
                disabled
                onChange={handleChange}
                value={values.cpf || ""}
                variant="outlined"
              />
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained">
            Salvar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
