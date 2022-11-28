import React, { useEffect } from 'react';

const fetchData = async () => {
  const todoDataResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todoData = await todoDataResponse.json();
  return todoData;
};

export const getServerData = async (context) => {
  const todo = await fetchData();
  return {
    props: {
      testeMessage: 'Testando a coisa',
      context,
      todo,
    },
  };
};

const MainPage = ({ serverData }) => {
  const { testeMessage, todo } = serverData;
  useEffect(() => {
    // fetchData();
    console.log('Server data');
    console.log(serverData);
  }, []);

  const { id, title } = todo;

  return (
    <div>
      <h1>{testeMessage}</h1>
      <span>
        <b>{id}</b> - {title}
      </span>
    </div>
  );
};

export default MainPage;
