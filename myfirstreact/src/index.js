import React from 'react';
import ReactDOM from 'react-dom';


const myfirstelement = (
<div>
<h1>Hello React!</h1>
<table>
  <th>
    <td>Name</td>
  </th>
  <tr>
    <td>Heyson</td>
  </tr>
  <tr>
    <td>Antonio</td>
  </tr>
  <tr>
    <td>Severino</td>
  </tr>
</table>
<h2> React is {5+5} times better with JSX</h2>
<input type="text"/>
</div>
);

/** Pick up w/ W3Schools Tutorial https://www.w3schools.com/react/react_components.asp **/

ReactDOM.render(myfirstelement, document.getElementById('root'));
