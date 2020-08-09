import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { signIn } from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const SignIn = props => {
    const { account, signIn } = props;

    if (account) {
        return <Redirect to="/manage/links" />;
    };
    
    const submitHandler = e => {
        e.preventDefault();
        const data = getFormData(e);

        signIn(data);
    };

    return (
        <div className="container h-100 pt-5">
            <h1>Sing In</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>

                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Don't have an account?</div>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    account: state.account.account,
});

export default connect(mapStateToProps, { signIn })(SignIn);