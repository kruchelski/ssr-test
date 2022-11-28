import React from 'react';

const Teste = ({ serverData }) => {
  const { testMessage, todo } = serverData;

  const { id, title } = todo;
  return (
    <div>
      <h1>Essa é outra {testMessage}</h1>
      <p>
        {id} - {title}
      </p>
    </div>
  );
};

export default Teste;

const pupupu = async () => {
  const todoDataResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todoData = await todoDataResponse.json();
  return todoData;
};

export const getServerData = async (context) => {
  const todo = await pupupu();
  return {
    props: {
      testMessage: 'Testando a coisa',
      context,
      todo,
    },
  };
};
