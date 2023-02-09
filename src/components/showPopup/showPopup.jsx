import React, { useContext } from 'react';
import GlobalContext from '../../GlobalContext';

function ShowPopup(props) {
    const {
        children, title, body, footer, actionsFooter,
    } = props;
    const { showPopup } = useContext(GlobalContext);

    return React.cloneElement(children, {
        onClick: () => {
            showPopup({
                title,
                body,
                footer,
                actionsFooter,
            });
        },
    });
}

export default ShowPopup;
