import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import { Header } from './views/common';
import LibraryList from './views/LibraryList';

const App = () => (
    <Provider store={createStore(rootReducers)}>
        <View>
            <Header headerText='Intro to Redux' />
            <LibraryList />
        </View>
    </Provider>
);

export default App;
