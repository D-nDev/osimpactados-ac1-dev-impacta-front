import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { usermicroservice } from "@services/api";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useRef } from "react";
import Cookies from "universal-cookie";

export const ProductCard = ({
  product,
  establishmentid,
  subsidiaryid,
  establishmentname,
  subsidiaryname,
  ...rest
}: {
  product: any;
  establishmentid: any;
  subsidiaryid: any;
  establishmentname: any;
  subsidiaryname: any;
}) => {
  const router = useRouter();
  const quantityRef = useRef<any>();
  const cookies = new Cookies();

  const handlePurchase = async (product: any, quantity: any) => {
    try {
      const result = await usermicroservice.post(
        "/userpurchase",
        {
          metadata: {
            establishmentId: establishmentid,
            subsidiaryId: subsidiaryid,
            establishmentName: establishmentname,
            subsidiaryName: subsidiaryname,
            is_delivered: false,
            scheduled_date: null,
            delivered_date: null,
          },
          items: [
            {
              id: product.id,
              title: product.name,
              quantity: parseInt(quantity),
              unit_price: parseFloat(product.value),
              picture_url: product.photo,
            },
          ],
        },
        {
          headers: {
            token: cookies.get("token")
          },
        }
      );
      router.push(result.data.init_point);
    } catch (error: any) {
      Swal.fire({
        title: "Erro",
        text: "Erro ao Comprar produto",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar alt="Product" src={product.photo} variant="square" />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {product.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          R$ {product.value}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item md={6} xs={12}>
            <TextField
              style={{ paddingTop: "10px" }}
              fullWidth
              label="Quantidade"
              name="quantity"
              defaultValue={1 || 1}
              type="number"
              variant="outlined"
              inputRef={quantityRef}
            />
          </Grid>
          <Button
            style={{ marginLeft: "30px" }}
            color="secondary"
            variant="contained"
            onClick={() => {
              handlePurchase(product, quantityRef.current!.value);
            }}
          >
            Comprar
          </Button>
        </div>
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
