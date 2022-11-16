import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { EstablishmentList } from "../../components/EstablishmentCard/establishment-list";
import { EstablishmentCard } from "../../components/EstablishmentCard/establishment-card";
import { DashboardLayout } from "../../components/Account/dashboard-layout";
import { useCallback, useEffect, useState } from "react";
import { establishmentmicroservice } from "@services/api";

const Page = () => {
  const [establishments, setEstablishments] = useState<any>();

  const fetchData = useCallback(async () => {
    try {
      const result = await establishmentmicroservice.get(
        "/public/establishments"
      );
      setEstablishments(result.data);
    } catch (error: any) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DashboardLayout>
      <Head>
        <title>Estabelecimentos</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <EstablishmentList />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
            {establishments && establishments.map((establishment: any) => (
              <Grid
                item
                key={establishment.id}
                lg={4}
                md={6}
                xs={12}
              >
                <EstablishmentCard establishment={establishment} />
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
          >
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default Page;
