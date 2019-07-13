import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
// components
import { FaceRecognitionResult } from '../containers/FaceRecognitionResult';
import { SearchResult } from './SeachResult';
import { Home } from '../containers/Home';

export class ContentRouter extends Component {
  render() {
    const { images, imageUrl, faces, handleImageResultClick } = this.props;
    console.log('ContentRouter', this.props);
    return (
      <Switch>
        <Route exact 
          path="/"
          Component={Home}
        />
        <Route
          path="/search-result"
          render={
            () => (
              <SearchResult
                images={images}
                handleImageResultClick={handleImageResultClick}
              />
            )
          }
        />
        <Route
          path="/face-detect"
          render={ () => (
            <FaceRecognitionResult
              imageUrl={imageUrl}
              faces={faces}
            />
          )}
        />
      </Switch>
    )
  }
}


export default ContentRouter;
