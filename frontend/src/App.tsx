import './assets/styles/App.scss';
import wrapperIcon from './assets/images/wrapper.jpg';
import autorIcon from './assets/images/autor.png';
import Header from "./components/Header/Header";
import Post from './components/Post/Post';
import Menu from './components/Menu/Menu';

const articleInfoPost1 = {
  title: 'Дневник питания за 07.03.2021',
  wrapper: wrapperIcon,
  datePublic: '49 минут назад',
};

const profilePost1 = {
  name: 'andreyev',
  icon: autorIcon
};

const interactionPost1 = {
  countLike: 11,
  countComm: 22
};

const tagPost1 = ['Спорт', 'Здоровье'];
const tagPost2 = ['Спорт', 'Здоровье', 'Сила', 'Дух'];

const profile = {
  name: 'Иван Андреев',
  nickname: 'andreyev',
  avatar: autorIcon
};

const purse = {
  hash: 'Mx4a8112bf81876240b8880de975f33f98f4289ebb',
  countBIP: 100000
};

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <Post articleInfo={articleInfoPost1}
            profile={profilePost1}
            interaction={interactionPost1}
            content="По рациону порядок. Но тело говорит, что не чувствует оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды."
            tags={tagPost1} />
          <Post articleInfo={articleInfoPost1}
            profile={profilePost1}
            interaction={interactionPost1}
            content="По рациону порядок. Но тело говорит, что не чувствует оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды."
            tags={tagPost2} />
        </div>
      </main>
      <Menu isActive={true} profile={profile} purse={purse} notifCount={10} />
    </div>
  );
}

export default App;