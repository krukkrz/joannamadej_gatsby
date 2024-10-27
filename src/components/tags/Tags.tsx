import React from 'react'
import { Tag } from "../../services/tags";
import TagComponent from "./tag/TagComponent";
// @ts-ignore
import * as styles from "./Tags.module.scss";

type Props = {
    tags?: Tag[]
}

const Tags = ({tags}: Props) => {
    if (!tags) return (<> </>);
    return (
        <div className={styles.tags}>
            {tags.map((tag: Tag, index) => <TagComponent tag={tag} key={`tag_${index}`}/>)}
        </div>
    )
}

export default Tags;