import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import musicSearchActions from "../../../redux/musicSearch/actions";

const { favoriteMusicAdded, favoriteMusicRemoved } = musicSearchActions;

const styles = theme => ({
  icon: {
    fontSize: 18,
    paddingLeft: 5
  }
});

class Favorite extends React.Component {
  state = {
    favorite: true
  };

  addMusic = name => {
    this.setState({
      favorite: true
    });
    this.props.favoriteMusicAdded(name);
  };
  removeMusic = name => {
    this.setState({
      favorite: false
    });
    this.props.favoriteMusicRemoved(name);
  };
  render() {
    const { classes, name } = this.props;
    return this.state.favorite ? (
      <FavoriteIcon
        className={classes.icon}
        onClick={() => this.removeMusic(name)}
      />
    ) : (
      <FavoriteBorder
        className={classes.icon}
        onClick={() => this.addMusic(name)}
      />
    );
  }
}

Favorite.propTypes = {
  classes: PropTypes.object.isRequired
};

const styledFavorite = withStyles(styles)(Favorite);
export default connect(null, { favoriteMusicAdded, favoriteMusicRemoved })(
  styledFavorite
);
