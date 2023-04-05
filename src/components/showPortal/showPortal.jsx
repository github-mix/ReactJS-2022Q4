import React, { useContext } from 'react';
import GlobalContext from '../../GlobalContext';

function ShowPortal(props) {
    const { children, content } = props;
    const { showPortal } = useContext(GlobalContext);

    return React.cloneElement(children, {
        onClick: () => {
            showPortal({ content });
        },
    });
}

export default ShowPortal;
