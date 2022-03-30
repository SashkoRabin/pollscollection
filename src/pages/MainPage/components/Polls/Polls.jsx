import React from 'react';
import PollItem from './PollItem';
import cl from './Polls.module.css';

const Polls = () => {
  const polls = [
    {
      id: 0,
      title: 'Темперамент',
      description:
        'Тест на темперамент по Айзенку - узнай, кто ты: холерик, меланхолик, сангвиник или же флегматик?',
      icon: 'fa-solid fa-user',
    },
    {
      id: 1,
      title: 'Психологический возраст',
      description:
        'Тест на психологический возраст. Результаты не имеют ничего общего с уровнем интеллекта',
      icon: 'fa-solid fa-person-cane',
    },
    {
      id: 2,
      title: 'Тест личности',
      description:
        'Тест личности по Энграмме, поможет раскрыть себя через личный и карьерный рост, социальные отношения.',
      icon: 'fa-solid fa-user-pen',
    },
  ];
  return (
    <div className={cl.polls_wrapper}>
      {polls.map((poll) => (
        <PollItem key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default Polls;
