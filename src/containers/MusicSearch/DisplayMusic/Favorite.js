import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {
  favoriteMusicAdded,
  favoriteMusicRemoved,
} from '../../../redux/musicSearch/actions';

const styles = () => ({
  icon: {
    fontSize: 18,
    paddingLeft: 5,
  },
});

class Favorite extends React.Component {
  state = {
    favorite: false,
  };

  // in real world, you wouldn't alter the favorite state like that but have a seperate component
  // in this example, it's the optimal way, since the display is very equal to MapMusic
  componentDidMount() {
    if (this.props.favorite) {
      this.setState({ favorite: true });
    }
  }

  addMusic = track => {
    this.setState({
      favorite: true,
    });
    this.props.favoriteMusicAdded(track);
  };

  removeMusic = track => {
    this.setState({
      favorite: false,
    });
    this.props.favoriteMusicRemoved(track);
  };

  render() {
    const { classes, track } = this.props;
    return this.state.favorite ? (
      <FavoriteIcon
        cypressId="favoriteIcon"
        className={classes.icon}
        onClick={() => this.removeMusic(track)}
      />
    ) : (
      <FavoriteBorder
        cypressId="cypress=favoriteIcon"
        className={classes.icon}
        onClick={() => this.addMusic(track)}
      />
    );
  }
}

Favorite.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledFavorite = withStyles(styles)(Favorite);
export default connect(
  null,
  { favoriteMusicAdded, favoriteMusicRemoved }
)(styledFavorite);
