import React, { useEffect } from 'react';

// const fetchData = async () => {
//   const todoDataResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const todoData = await todoDataResponse.json();
//   return todoData;
// };

// export const getServerData = async (context) => {
//   // const todo = await fetchData();
//   return {
//     props: {
//       testeMessage: 'Testando a coisa',
//       context,
//       todo,
//     },
//   };
// };

const Index = () => {
  // const { testeMessage, todo } = serverData;
  // useEffect(() => {
  //   // fetchData();
  //   console.log('Server data');
  //   console.log(serverData);
  // }, []);

  // const { id, title } = todo;

  const id = 123;
  const title = 'fuck';
  const testMessage = 'que odioooo';

  return (
    <div>
      <h1>{testMessage}</h1>
      <span>
        <b>{id}</b> - {title}
      </span>
    </div>
  );
};

export default Index;
