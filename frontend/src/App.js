import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Create';
import ManageLinksEdit from './screens/Manage/Edit';

import { initAccount } from './actions/AccountActions';


const App = ({ initAccount }) => {

    useEffect(() => {
        initAccount();
    }, [initAccount]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/manage/links/create" component={ManageLinksCreate} />
                <Route path="/manage/links/edit/:id" component={ManageLinksEdit} />
                <Route path="/manage/links" exact component={ManageLinks} />
            </Switch>
        </BrowserRouter>
    );
};

const mapStateToProps = state => ({
    account: state.account.account,
});

export default connect(mapStateToProps, { initAccount })(App);