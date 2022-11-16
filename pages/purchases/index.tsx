import Head from "next/head";
import { Box, Container } from "@mui/material";
import { PurchaseHistoryResults } from "../../components/PurchaseHistory/purchasehistory-list.result";
import { PurchaseHistoryList } from "../../components/PurchaseHistory/purchasehistory-list-toolbar";
import { DashboardLayout } from "../../components/Account/dashboard-layout";
import Cookies from "universal-cookie";
import { useCallback, useEffect, useState } from "react";
import { purchasemicroservice } from "@services/api";

const Page = () => {
  const [products, setProducts] = useState<any>();
  const cookies = new Cookies();

  const fetchData = useCallback(async () => {
    try {
      const result = await purchasemicroservice.get(
        `/purchases`, {headers: {
          token: cookies.get('token')
        }}
      );
      setProducts(result.data);
    } catch (error: any) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
  <DashboardLayout>
    <Head>
      <title>FoodOnClick | Histórico de compras</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <PurchaseHistoryList />
        <Box sx={{ mt: 3 }}>
          <PurchaseHistoryResults purchases={products} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
  );

}

export default Page;
