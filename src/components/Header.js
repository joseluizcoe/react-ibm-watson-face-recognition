import React from 'react';
import {Menu} from 'semantic-ui-react';
import {FaceRecognitionForm} from '../containers/FaceRecognitionForm';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <Menu pointing>
        <Menu.Item>
          <h1>Face Detecting</h1>
        </Menu.Item>
        <Menu.Item
          name='home'>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          name='images'>
          <Link to="/search-result">Images</Link>
        </Menu.Item>
        <Menu.Item name='faces'>
          <Link to="/face-detect">Faces</Link>
        </Menu.Item>
        <Menu.Item>
        <FaceRecognitionForm
          handleSubmit={props.setStateObject}
        />
        </Menu.Item>
      </Menu>
  );
}

export default Header;
