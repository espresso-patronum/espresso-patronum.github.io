/**
 * reated by Resti during Expose Phase on IT ProDIGI Program.
 */
import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginTop: 15,
    marginBottom: 15
  },
  container: {
    padding: 10
  }
});

export class SocialIcons extends PureComponent {
  static propTypes: Props = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired
  };

  static defaultProps: Props = {
    color: "white"
  };

  _openTab(url) {
    window.open(url, "_blank");
  }

  render() {
    const { classes, color } = this.props;
    return (
      <Grid
        item
        container
        align="center"
        justify="center"
        spacing={0}
        className={classes.container}
      >
        <SocialIcon
          className={classes.button}
          url="https://www.facebook.com/"
          fontSize="24px"
          color={color}
        />
        <SocialIcon
          className={classes.button}
          url="https://twitter.com/restiyanada"
          fontSize="24px"
          color={color}
        />
        <SocialIcon
          className={classes.button}
          url="https://www.linkedin.com/"
          fontSize="24px"
          color={color}
        />
        <SocialIcon
          className={classes.button}
          url="https://github.com/restiyanada"
          fontSize="24px"
          color={color}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(SocialIcons);
