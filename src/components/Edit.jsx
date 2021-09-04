import React from 'react';
import EditAccount from './EditAccount';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';


const Edit = () => {
    let history = useHistory();
    let { id } = useParams();

    return (
        <>
          <EditAccount id={id} history={history} />
        </>
    );
}

export default Edit;
