import React from 'react';
import commonStyles from '../css/common.module.css'

const Container = (props) => {
    const { containerStyle, style, children } = props;

    return (
        <div style={containerStyle} style={style}>
            <div className={commonStyles.container} style={style}>
                {children}
            </div>
        </div>
    )
}
export default Container;