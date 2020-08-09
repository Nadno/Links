import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../../actions/AccountActions';

const Layout = ({ children, signOut, account, notLinksPage = true }) => {

    if (!account) {
        return <Redirect to="/sign-in" />;
    };

    const signOutHandler = e => {
        e.preventDefault();

        signOut();
    };

    return (
        <div className="layout">
            <nav className="navbar navbar-expand-lg bg-primary text-light">
                <div className="container d-flex w-100 justify-content-between">
                    <div>
                        {notLinksPage && <Link to="/" className="btn btn-clear">
                            Back
                        </Link>}
                    </div>
                    <div className="text-center">
                        <strong>Links</strong>
                    </div>
                    <div>
                        <button onClick={signOutHandler} className="btn btn-clear" >Exit</button>
                    </div>
                </div>
            </nav>

            <div className="container">{children}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return { account: state.account.account };
};

export default connect(mapStateToProps, { signOut })(Layout);