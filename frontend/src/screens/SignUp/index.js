import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { signUp } from '../../actions/AccountActions';
import { getFormData } from '../../helpers/form';

const SignUp = props => {
    const { account, signUp } = props;

    if(account) {
        return <Redirect to="/manage/links" />;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);

        signUp(data);
    };

    return (
        <div className="container h-100 pt-5">
            <h1>Sing Up</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" className="form-control" name="password_confirmation" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>

                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Already have an account?</div>
                    <Link to="/sign-in">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    account: state.account.account,
});

export default connect(mapStateToProps, { signUp })(SignUp);