import PerfectScrollbar from 'react-perfect-scrollbar';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

export const PurchaseHistoryResults = ({ purchases, ...rest }: {purchases: any}) => {

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Empresa
                </TableCell>
                <TableCell>
                  Subsidiária
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Nome do Produto
                </TableCell>
                <TableCell>
                  Quantidade
                </TableCell>
                <TableCell>
                  Valor unitário do Produto
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {purchases && purchases.map((purchase: any) => (
                <TableRow
                  hover
                  key={purchase.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={purchase.products[0].picture_url}
                        sx={{ mr: 2 }}
                      >
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {purchase.establishmentName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {purchase.subsidiaryName}
                  </TableCell>
                  <TableCell>
                    {purchase.status}
                  </TableCell>
                  <TableCell>
                  {purchase.products[0].title}
                  </TableCell>
                  <TableCell>
                  {purchase.products[0].quantity}
                  </TableCell>
                  <TableCell>
                  {parseFloat(purchase.products[0].unit_price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};
