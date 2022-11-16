import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export const EstablishmentCard = ({
  establishment,
  ...rest
}: {
  establishment: any;
}) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      {...rest}
    >
      <CardContent
        onClick={() => {
          router.push({
            pathname: `/establishment/${establishment.id}/subsidiary`,
            query: { establishmentname: establishment.name },
          }, `/establishment/${establishment.id}/subsidiary`);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar alt="Product" src={establishment.photo} variant="square" />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {establishment.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {establishment.mobileNumber}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        ></Grid>
      </Box>
    </Card>
  );
};
