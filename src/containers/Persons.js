import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../reducers/action.js';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        id={person.id}
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: () => dispatch(
            { 
                type: actionTypes.ADDPERSON, 
                newPerson: {
                    id: Math.random(), // not really unique but good enough here!
                    name: 'Max',
                    age: Math.floor( Math.random() * 40 )
                }
            }
        ),
        deletePerson: (id) => dispatch(
            {
                type: actionTypes.DELETEPERSON,
                id: id
            }
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);