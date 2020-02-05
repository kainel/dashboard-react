import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PlusIcon from "@material-ui/icons/KeyboardArrowUp";
import MinusIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import OneIcon from "@material-ui/icons/LooksOne";
import TwoIcon from "@material-ui/icons/LooksTwo";
import ThreeIcon from "@material-ui/icons/Looks3";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    borderRadius: 0,
    boxShadow: "none"
  },
  table: {
    minWidth: 700
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    wordWrap: "break-word",
    backgroundColor: "white",
    backgroundClip: "border-box",
    border: "0px solid transparent",
    borderRadius: 3,
    marginBottom: 20,
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  cardBody: {
    flex: "1 1 auto",
    padding: "1.25rem"
  },
  button: {
    margin: theme.spacing.unit,
    "&:hover": {
      color: "white",
      backgroundColor: purple[700]
    }
  }
});

let id = 0;
function createData(img, name, made, color, size, price, qty) {
  id += 1;
  let amount = price * qty;
  return { img, name, made, color, size, price, qty, amount };
}

const rows = [
  createData(
    "https://shopping-phinf.pstatic.net/main_9992359/9992359408.20170106103502.jpg?type=f300",
    "Warmer T-Shirt",
    "by DANDI",
    "Red",
    "M",
    49,
    1
  ),
  createData(
    "https://shop-phinf.pstatic.net/20190226_196/cjfrbs233@naver.com_1551145506338UfjA2_JPEG/74452665959809213_1013004539.jpg?type=m510",
    "Champion Short-T",
    "by Cahmpion",
    "Yellow",
    "M",
    29,
    2
  ),
  createData(
    "https://shop-phinf.pstatic.net/20180911_214/karring12_1536639609473tA2KN_JPEG/19358468321330918_645593110.jpg?type=m510",
    "Moozi Short-T",
    "by Moozi",
    "Black",
    "M",
    30,
    1
  ),
  createData(
    "https://cdn.pixabay.com/photo/2017/06/19/18/44/t-shirt-2420558_960_720.png",
    "Adidas Short-T",
    "by Adidas",
    "Navy",
    "L",
    32,
    2
  ),
  createData(
    "https://cdn.pixabay.com/photo/2016/01/12/12/53/t-shirt-1135367_960_720.png",
    "Short-T",
    "by unknown",
    "White",
    "S",
    5,
    3
  )
];

class BasicTables extends React.Component {
  handleQuantity = val => {
    switch (val) {
      case 1:
        return (
          <IconButton disabled>
            <OneIcon />
          </IconButton>
        );
      case 2:
        return (
          <IconButton disabled>
            <TwoIcon />
          </IconButton>
        );
      case 3:
        return (
          <IconButton disabled>
            <ThreeIcon />
          </IconButton>
        );
      default:
        return null;
    }
  };

  render() {
    const { classes } = this.props;
    let total = 0;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Cart Table
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }} />
                <TableCell style={{ textAlign: "center" }}>PRODUCT</TableCell>
                <TableCell style={{ textAlign: "center" }}>COLOR</TableCell>
                <TableCell style={{ textAlign: "center" }}>SIZE</TableCell>
                <TableCell style={{ textAlign: "center" }}>PRICE</TableCell>
                <TableCell style={{ textAlign: "center" }}>QTY</TableCell>
                <TableCell style={{ textAlign: "center" }}>AMOUNT</TableCell>
                <TableCell style={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                total += row.amount;
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <img src={row.img} style={{ width: 180, height: 180 }} />
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <Typography variant="h4">{row.name}</Typography>
                      <Typography variant="subtitle1">{row.made}</Typography>
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.color}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      {row.size}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      $ {row.price}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <IconButton
                        style={{
                          padding: 3,
                          backgroundColor: "#90caf9",
                          borderRadius: 5
                        }}
                      >
                        <MinusIcon style={{ color: "white" }} />
                      </IconButton>
                      {this.handleQuantity(row.qty)}
                      <IconButton
                        style={{
                          padding: 3,
                          backgroundColor: "#90caf9",
                          borderRadius: 5
                        }}
                      >
                        <PlusIcon style={{ color: "white" }} />
                      </IconButton>
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      $ {row.amount}
                    </TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <IconButton
                        style={{
                          padding: 3,
                          backgroundColor: "red",
                          borderRadius: 5
                        }}
                      >
                        <DeleteIcon style={{ color: "white" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colspan="6" />
                <TableCell style={{ textAlign: "center" }}>
                  <Typography variant="h6">Total</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <Typography variant="h5">$ {total}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colspan="7" />
                <TableCell style={{ textAlign: "center" }}>
                  <Typography variant="h6">
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Purchase >
                    </Button>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BasicTables);
