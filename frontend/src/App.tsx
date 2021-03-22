import './assets/styles/App.scss';
import wrapperIcon from './assets/images/wrapper.jpg';
import autorIcon from './assets/images/autor.png';
import Post from './components/Post/Post';

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


function App() {
  return (
    <div className="app">
      <Post articleInfo={articleInfoPost1}
            profile={profilePost1}
            interaction={interactionPost1}
            content="По рациону порядок. Но тело говорит, что не чувствуе чувствует чувствует чувствуетчувствует чувствует чувствуетт оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды."
            tags={tagPost1} />
             <Post articleInfo={articleInfoPost1}
            profile={profilePost1}
            interaction={interactionPost1}
            content="По рациону порядок. Но тело говорит, что не чувствует оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды. По рациону порядок. Но тело говорит, что не чувствует оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды."
            tags={tagPost1} />
    </div>
  );
}

export default App;