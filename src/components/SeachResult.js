import React from 'react'
import { Grid } from 'semantic-ui-react';
import { Image } from './Image';
import { Link } from 'react-router-dom';

export const SearchResult = (props) => {
  const { images, handleImageResultClick } = props;
  console.log('SearchResult', props);
  return (
    <div className='imageSearch'>
      <Grid>
        {
          images && images.map(
            (item, index) => (
              <Grid.Column width="3" floated="left" key={index}>
                <Link
                  to="/face-detect"
                  onClick={handleImageResultClick}
                >
                  <Image src={item.thumbnail} />
                </Link>
              </Grid.Column>
            )
          )
        }
      </Grid>
    </div>
  )
}

export default SearchResult;
