import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, Link, NavLink } from 'react-router-dom';

import Clock from './Clock';
import Folder from './Folder';
import Weather from './Weather';
import AutoComplete from './Auto';

// const names = [
//     'Abba',
//     'Barney',
//     'Barbara',
//     'Jeff',
//     'Jenny',
//     'Sarah',
//     'Sally',
//     'Xander'
// ];

// const folders = [
//     { title: 'one', content: 'I am the first' },
//     { title: 'two', content: 'Second folder here' },
//     { title: 'three', content: 'Third folder here' }
// ];

const Widgets = ({ folders, names }) => (

    <div>
        <h1>Widgets</h1>
        <nav>
            <NavLink to='/clock'>Clock</NavLink>
            <NavLink to='/folder'>Folder</NavLink>
            <Link to='/weather'>Weather</Link>
            <Link to='/autocomplete'>Autocomplete</Link>
        </nav>
        <Switch>
            <Route path='/clock' render={() => <Clock></Clock>}></Route>
            <Route path='/folder' render={() => <Folder folders={folders} />}></Route>
            <Route path='/weather' component={Weather}></Route>
            <Route path='/autocomplete' render={() => <AutoComplete names={names} />}></Route>
            <Route exact path='/' render={() => <h1>Welcome to your widgets app!</h1>}></Route>
            <Route render={() => <h1>404: Page not found</h1>} />
        </Switch>
    </div>
);

export default Widgets;