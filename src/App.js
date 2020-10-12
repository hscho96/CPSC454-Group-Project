import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name':'James',
  'birthday': '980505',
  'gender': 'Male',
  'job': 'Student'
},
{
    'id': 2,
    'image': 'https://placeimg.com/64/64/1',
    'name':'John',
    'birthday': '920413',
    'gender': 'Male',
    'job': 'Teacher'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name':'James',
  'birthday': '960824',
  'gender': 'Female',
  'job': 'Waitress'
}
]

function App() {
  return (
    <div>
      {
      customers.map(c => {
        return(
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />
        );
      })
    }
    </div>
  );
}

/* Not efficient way
    <Customer
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
    />
    <Customer
      id={customers[1].id}
      image={customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
    />
    <Customer
      id={customers[2].id}
      image={customers[2].image}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
    />
*/

export default App;
