import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MaskedInput from "react-text-mask";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import green from "@material-ui/core/colors/green";

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
  textField: {
    marginLeft: "calc(100% - 85%)",
    marginRight: theme.spacing.unit,
    width: "70%"
  },
  dense: {
    marginTop: 19
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  cssOutline: {
    borderRadius: 4,
    border: "2px solid #ced4da",
    "&:hover": {
      borderColor: "black"
    },
    "&:after": {
      borderColor: green[500]
    }
  }
});

function InternationalPhone(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        /\d/,
        /\d/,
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function Phone(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholder={"Enter a phone number"}
    />
  );
}

function DateMask(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        /[0-3]/,
        /[0-9]/,
        "/",
        /[0-3]/,
        /[0-9]/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholder={"Enter Date"}
    />
  );
}

class MaskInput extends React.Component {
  state = {
    internationalPhone: "+ (  )    -    ",
    phone: "(  )   -    ",
    dateMask: "dd/mm/yyyy",
    outInterPhone: "+ (  )    -    ",
    outPhone: "(  )   -    ",
    outDateMask: "dd/mm/yyyy",
    fillInterPhone: "+ (  )    -    ",
    fillPhone: "(  )   -    ",
    fillDateMask: "dd/mm/yyyy"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const {
      internationalPhone,
      phone,
      dateMask,
      outInterPhone,
      outPhone,
      outDateMask,
      fillInterPhone,
      fillPhone,
      fillDateMask
    } = this.state;
    return (
      <div className={classes.card}>
        <div className={classes.cardBody}>
          <Typography variant={"h4"} style={{ float: "left" }}>
            Masked Elements
          </Typography>
        </div>
        <InputLabel
          htmlFor="international-phone-mask"
          className={classes.textField}
        >
          <Typography align="left" style={{ display: "flex" }} variant="title">
            International Number{" "}
            <Typography
              variant="subtitle1"
              style={{ color: "#a1aab2", marginLeft: 10 }}
            >
              +19 999 999 999
            </Typography>
          </Typography>
        </InputLabel>
        <Input
          value={internationalPhone}
          onChange={this.handleChange("internationalPhone")}
          id="international-phone-mask"
          inputComponent={InternationalPhone}
          className={classes.textField}
        />
        <InputLabel htmlFor="phone-mask" className={classes.textField}>
          <Typography align="left" style={{ display: "flex" }} variant="title">
            Phone Number{" "}
            <Typography
              variant="subtitle1"
              style={{ color: "#a1aab2", marginLeft: 10 }}
            >
              (999) 999-9999
            </Typography>
          </Typography>
        </InputLabel>
        <Input
          value={phone}
          onChange={this.handleChange("phone")}
          id="phone-mask"
          inputComponent={Phone}
          className={classes.textField}
        />
        <InputLabel htmlFor="date-mask" className={classes.textField}>
          <Typography align="left" style={{ display: "flex" }} variant="title">
            Date{" "}
            <Typography
              variant="subtitle1"
              style={{ color: "#a1aab2", marginLeft: 10 }}
            >
              dd/mm/yyyy
            </Typography>
          </Typography>
        </InputLabel>
        <Input
          value={dateMask}
          onChange={this.handleChange("dateMask")}
          id="date-mask"
          inputComponent={DateMask}
          className={classes.textField}
        />
        <TextField
          id="outline-international-phone"
          label="International Number"
          className={classes.textField}
          value={outInterPhone}
          onChange={this.handleChange("outInterPhone")}
          margin="normal"
          InputProps={{
            inputComponent: InternationalPhone
          }}
          variant="outlined"
        />
        <TextField
          id="outline-phone"
          label="Phone Number"
          className={classes.textField}
          value={outPhone}
          onChange={this.handleChange("outPhone")}
          margin="normal"
          InputProps={{
            inputComponent: Phone
          }}
          variant="outlined"
        />
        <TextField
          id="outline-phone"
          label="Date"
          className={classes.textField}
          value={outDateMask}
          onChange={this.handleChange("outDateMask")}
          margin="normal"
          InputProps={{
            inputComponent: DateMask
          }}
          variant="outlined"
        />
        <TextField
          id="outline-international-phone"
          label="International Number"
          className={classes.textField}
          value={fillInterPhone}
          onChange={this.handleChange("fillInterPhone")}
          margin="normal"
          InputProps={{
            inputComponent: InternationalPhone
          }}
          variant="filled"
        />
        <TextField
          id="outline-phone"
          label="Phone Number"
          className={classes.textField}
          value={fillPhone}
          onChange={this.handleChange("fillPhone")}
          margin="normal"
          InputProps={{
            inputComponent: Phone
          }}
          variant="filled"
        />
        <TextField
          id="outline-phone"
          label="Date"
          className={classes.textField}
          value={fillDateMask}
          onChange={this.handleChange("fillDateMask")}
          margin="normal"
          InputProps={{
            inputComponent: DateMask
          }}
          variant="filled"
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MaskInput);
