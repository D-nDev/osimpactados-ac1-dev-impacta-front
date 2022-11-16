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

export const SubsidiaryCard = ({
  subsidiary,
  establishmentName,
  establishmentId,
  ...rest
}: {
  subsidiary: any;
  establishmentName: any,
  establishmentId: any,
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
      <CardContent onClick={() => {
        router.push({
          pathname: `/establishment/${establishmentId}/subsidiary/${subsidiary.id}/products`,
          query: { establishmentname: establishmentName, subsidiaryname: subsidiary.name}
        }, `/establishment/${establishmentId}/subsidiary/${subsidiary.id}/products`)
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar alt="Product" src={subsidiary.photo} variant="square" />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {subsidiary.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {subsidiary.mobileNumber}
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
