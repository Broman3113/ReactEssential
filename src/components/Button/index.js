import React from "react";
import clsx from "clsx";
import {Icon} from "../Icon";
import styles from "./Button.module.css"

export const Button = (props) => {
    const {children, className, size, color, iconsType, ...rest} = props;
    const render = (
        <span>
            {iconsType && <Icon type={iconsType}/>}
            {children || null}
        </span>
    )

    return (
        <button
            className={
                clsx(
                    [
                        styles.container,
                        {
                            [styles[size]]: size,
                            [styles[`container_${color}`]]: color
                        },
                        className
                    ]
                )
            }
            {...rest}
        >
            {render}
        </button>
    );
}
