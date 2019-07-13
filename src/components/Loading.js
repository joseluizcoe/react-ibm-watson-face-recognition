import React from 'react';
import {Progress} from 'semantic-ui-react';


export const Loading = (props) => {
  const {loading} = props;

  return (
    <>
      { loading &&
        <Progress percent={100} active>
          Carregando dados
        </Progress>
      }
    </>
  )
}

export default Loading;
