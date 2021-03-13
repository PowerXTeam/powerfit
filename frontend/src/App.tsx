import React from 'react';
import logo from './logo.svg';
import './assets/styles/App.scss';
import wrapperIcon from './assets/images/wrapper.jpg';
import autorIcon from './assets/images/autor.png';
import Header from "./components/Header/Header";
import Post from './components/Post/Post';

type articleInfo = {
  title: string,
  datePublic: string,
  wrapper: any
}

type profile = {
  name: string,
  icon: any
}

type inter = {
  countLike?: number | string,
  countComm?: number | string
}

type tag = Array<string>;

const articleInfoPost1: articleInfo = {
  title: 'Дневник питания за 07.03.2021',
  wrapper: wrapperIcon,
  datePublic: '49 минут назад',
}

const profilePost1: profile = {
  name: 'andreyev',
  icon: autorIcon
}

const interactionPost1: inter = {
  countLike: 11,
  countComm: 22
}

const tagPost1: tag = ['Спорт', 'Здоровье']

function App() {
  return (
    <div className="app">
      <Post articleInfo={articleInfoPost1} profile={profilePost1} interaction={interactionPost1} content="По рациону порядок. Но тело говорит, что не чувствует оно дефицита, это его типа сохранка. Стою на 68 кг уже месяц. Я решила, что пусть будет так. Скоро весна и форсировать нет нужды." tags={tagPost1} />
    </div>
  );
}

export default App;
