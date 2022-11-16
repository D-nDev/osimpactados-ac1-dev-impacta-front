import { Box, Typography } from "@mui/material";

export const SubsidiaryList = (props: any) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Subsidiárias
      </Typography>
    </Box>
  </Box>
);
