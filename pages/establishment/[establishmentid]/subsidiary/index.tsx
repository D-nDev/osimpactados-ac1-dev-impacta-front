import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../../../../components/Account/dashboard-layout";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { establishmentmicroservice } from "@services/api";
import { SubsidiaryCard } from "@components/SubsidiaryCard/subsidiary-card";
import { SubsidiaryList } from "@components/SubsidiaryCard/subsidiary-list";

const Page = () => {
  const router = useRouter();
  const { establishmentid, establishmentname } = router.query;
  const [subsidiaries, setSubsidiaries] = useState<any>();

  const fetchData = useCallback(async () => {
    if (!router.isReady) return;
    try {
      const result = await establishmentmicroservice.get(
        `/public/subsidiaries/${establishmentid}`
      );
      setSubsidiaries(result.data.subsidiaries);
    } catch (error: any) {
      console.log(error);
    }
  }, [establishmentid, router.isReady]);

  useEffect(() => {
    if (!router.isReady) return;
    fetchData();
  }, [fetchData, router.isReady]);

  return (
    router.isReady && (
      <DashboardLayout>
        <Head>
          <title>Subsidiárias</title>
        </Head>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <SubsidiaryList />
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {router.isReady &&
                  subsidiaries &&
                  subsidiaries.map((subsidiary: any) => (
                    <Grid item key={subsidiary.id} lg={4} md={6} xs={12}>
                      <SubsidiaryCard
                        subsidiary={subsidiary}
                        establishmentId={establishmentid}
                        establishmentName={establishmentname}
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
    )
  );
};

export default Page;
