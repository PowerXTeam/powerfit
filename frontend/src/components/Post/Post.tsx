import { FC } from 'react';
import s from './Post.module.scss';
import Interaction from './SubComponents/Interaction/Interaction';

type PostProps = {
    articleInfo: {
        title: string,
        datePublic: string,
        wrapper: any
    },
    profile: { name: string, icon: any },
    interaction?: { countLike?: number | string, countComm?: number | string },
    content: string,
    tags: Array<string>,
};

const Post: FC<PostProps> = ({ articleInfo, profile, interaction, content, tags = [] }) => {
    const listTags = tags.map((tagsName) => {
        return (<button className={s["post__tags"]}>{tagsName}</button>);
    });

    return (
        <article className={s["post"]}>
            <div className={s["post__head"]}>
                <h2 className={s["post__title"]}>{articleInfo.title}</h2>
                <p className={s["post__public-date"]}>{articleInfo.datePublic}</p>
            </div>

            <div className={s["post__wrapper"]}>
                <img src={articleInfo.wrapper} alt={profile.name + "post"} />
            </div>

            <div className={s["post__info"]}>
                <Interaction countLike={interaction?.countLike} countComm={interaction?.countComm} />

                <div className={s["post__autor"]}>
                    <p className={s["post__autor-name"]}>{profile.name}</p>
                    <div className={s["post__autor-icon"]}><img src={profile.icon} alt={profile.name}/></div>
                </div>
            </div>

            <div className={s["post__content"]}>
                <p>{content}</p>
            </div>

            <div className={s["post__tags-list"]}>
                {listTags}
            </div>
        </article>
    );
};

export default Post;