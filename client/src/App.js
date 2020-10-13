
import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
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
  'name':'Kate',
  'birthday': '960824',
  'gender': 'Female',
  'job': 'Waitress'
}
]


class App extends Component {
  render (){
    const { classes } = this.props?this.props:null;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Profile Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
          </TableBody>
      </Table>
      </Paper>
    );
  }
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

export default withStyles(styles)(App);
