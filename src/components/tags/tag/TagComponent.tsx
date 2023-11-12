import React from 'react';
import {Tag} from "../../../services/projects";
// @ts-ignore
import * as styles from "./TagComponent.module.scss";

type Props = {
    tag: Tag
}

const TagComponent = ({tag}: Props) => {
    return (
        <div
            className={styles.tag}
            style={{backgroundColor: tag.color}}
        >
            {tag.name}
        </div>
    )
}

export default TagComponent;