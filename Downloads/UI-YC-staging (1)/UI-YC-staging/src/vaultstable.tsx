import {
  Table,
  TableBody,
  TableCell as BaseTableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "../src/css/vaultstable.module.css";
import { VaultData, VaultHeader } from "./vaults";

const TableCell = styled(BaseTableCell)({
  color: "#fff",
  border: "none",
  padding: 0,
  paddingTop: "30px",
  fontFamily: "Athletics",
  fontweight: 700,
  fontSize: "16px",
  lineHeight: "24px",
});

const VaultsTable = () => {
  return (
    <div className={styles.vaulttable}>
      <div className={styles.vaultTitle}>All Vaults</div>
      <TableContainer
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              {VaultHeader.map((item) => (
                <TableCell
                  sx={{
                    color: "#676771",
                    fontFamily: "Athletics",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "24px",
                    border: "none",
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {VaultData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className={styles.flexDiv}>
                    <img src={item.token.img} />
                    <div>{item.token.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={styles.flexDiv}>
                    <span>{item.apy.one}%</span>
                    <span className={styles.prevAPY}>{item.apy.two}%</span>
                  </div>
                </TableCell>
                <TableCell>{item.TVL}</TableCell>
                <TableCell>
                  <div className={styles.flexDiv}>
                    <img src={item.token.img} />
                    <div>{item.network.name}</div>
                  </div>
                </TableCell>
                <TableCell>{item.deposits}</TableCell>
                <TableCell>{item.earnings}</TableCell>
                <TableCell>
                  <div className={styles.flexDiv}>
                    <div>{item.website}</div>
                    <img src="Vector (11).png" />
                  </div>
                </TableCell>
                <TableCell>
                  <button className={styles.enterBtn}>Enter</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VaultsTable;
