import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../../../../../../components/Account/dashboard-layout";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { establishmentmicroservice } from "@services/api";
import { ProductCard } from "@components/ProductsCard/product-card";
import { ProductList } from "@components/ProductsCard/product-list";

const Page = () => {
  const router = useRouter();
  const { subsidiaryid, establishmentid, establishmentname, subsidiaryname } =
    router.query;
  const [products, setProducts] = useState<any>();

  const fetchData = useCallback(async () => {
    try {
      const result = await establishmentmicroservice.get(
        `/public/products/${subsidiaryid}`
      );
      setProducts(result.data[0].products);
    } catch (error: any) {
      console.log(error);
    }
  }, [subsidiaryid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DashboardLayout>
      <Head>
        <title>Produtos</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductList />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {products &&
                products.map((product: any) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <ProductCard
                      product={product}
                      establishmentid={establishmentid}
                      establishmentname={establishmentname}
                      subsidiaryid={subsidiaryid}
                      subsidiaryname={subsidiaryname}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          ></Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default Page;
