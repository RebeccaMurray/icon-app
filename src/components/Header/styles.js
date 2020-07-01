import React from "react"

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const headerStyles = {
    header: css`
    font-size: 80px;
    color: white;
    background-color: #5b5b5b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: CabinSketch;
    h1 {
        font-size: 80px;
        margin-left: 24px;
    }
    `,
};

export default headerStyles;