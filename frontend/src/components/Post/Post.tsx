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
    interaction?: { countLike?: number, countComm?: number },
    content: string,
    tags?: Array<string>,
};

const Post: FC<PostProps> = ({ articleInfo, profile, interaction, content, tags }) => {
    let tagsHTML: any = '';

    if (tags) {
        tagsHTML = tags.map((tagsName) => {
            return <button className={s["post__tags"]} key={tagsName}>{tagsName}</button>
        });
    }

    const getDOMelement = (selector: string) =>
        Array.from(document.querySelectorAll(selector));

    const getPartContent = (content: string, maxWord: number = 33): string => content.split(' ').slice(0, maxWord).join(' ');

    const btnEvent = (btn: any) => {
        const postContent = btn.parentNode.childNodes[0]; /* span */

        postContent.classList.toggle(s['post__content--show']);

        if (postContent.classList.contains(s['post__content--show'])) {
            btn.innerText = 'Читать дальше';
            postContent.innerText = getPartContent(postContent.innerText);
        } else {
            btn.innerText = 'Скрыть';
            postContent.innerHTML = postContent.getAttribute('data-content');
        }
    };

    getDOMelement(`.${s['post__learn-more']}`)
        .forEach((btn: any) => btn.onclick = () => btnEvent(btn));

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
                    <div className={s["post__autor-icon"]}><img src={profile.icon} alt={profile.name} /></div>
                </div>
            </div>

            <div className={s["post__content"]}>
                <span data-content={content}>{getPartContent(content)}</span>
                <button className={s["post__learn-more"]}>Читать дальше</button>
            </div>

            <div className={s["post__tags-list"]}>
                {tagsHTML}
            </div>
        </article>
    );
};

export default Post;