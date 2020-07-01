import React from "react";
import headerStyles from './styles.js'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

class Header extends React.Component {

    render() {
        return (
            <div css={headerStyles.header}>
                <p>Rebecca<br></br>Murray</p>
            </div>
        );
    }
}

export default Header;