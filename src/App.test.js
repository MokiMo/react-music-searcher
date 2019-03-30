import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import axios from 'axios';
import App from './App';
import { API_KEY } from './config/config';
import Dashboard from './containers/Dashboard/Dashboard';
import Footer from './containers/Footer/Footer';
import Sidebar from './containers/Sidebar/Sidebar';

Enzyme.configure({ adapter: new Adapter() });

// If the LastFM-search-API has breaking changes, use the snapshot to troubleshoot
describe.skip('API', () => {
  it('API-Request returns data matching Snapshot (TRACKS)', async () => {
    const response = await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=track.search&track=Jack&api_key=${API_KEY}&format=json&limit=30`
      )
      .then(res => res.data.results.trackmatches.track);
    expect(response).toMatchSnapshot();
  });

  it('API-Request returns data matching Snapshot (ALBUMS)', async () => {
    const response = await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=Jack&api_key=${API_KEY}&format=json&limit=30`
      )
      .then(res => res.data.results.albummatches.album);
    expect(response).toMatchSnapshot();
  });

  it('API-Request returns data matching Snapshot (ARTIST)', async () => {
    const response = await axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Jack&api_key=${API_KEY}&format=json&limit=30`
      )
      .then(res => res.data.results.artistmatches.artist);
    expect(response).toMatchSnapshot();
  });
});

describe('App', () => {
  it('shallow renders App without crashing', () => {
    Enzyme.shallow(<App />);
  });
});

describe('Dashboard', () => {
  it('shallow renders Dashboard without crashing', () => {
    Enzyme.shallow(<Dashboard />);
  });
});

describe('Footer', () => {
  it('shallow renders Footer without crashing', () => {
    Enzyme.shallow(<Footer />);
  });
});

describe('Sidebar', () => {
  it('shallow renders Sidebar without crashing', () => {
    Enzyme.shallow(<Sidebar />);
  });
});
