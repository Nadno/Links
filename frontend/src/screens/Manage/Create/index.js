import React from 'react';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { linkCreate } from '../../../actions/LinkActions';
import FormGroup from '../../../components/FormGroup';
import FormCheck from '../../../components/FormCheck';
import { getFormData } from '../../../helpers/form';

import Layout from '../../Layouts/Manage';

const Create = ({ link, linkCreate }) => {
    const history = useHistory();

    if (link) {
        return <Redirect to="/manage/links" />;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = getFormData(e);

        await linkCreate(data);
        history.push('/manage/links');
    };

    return (
        <Layout>
            <h1>Create Link</h1>

            <div className="d-flex flex-column h-100">
            <form onSubmit={submitHandler}>
                    <FormGroup label="Label" name="label" data={link} type="text" />
                    <FormGroup label="Url" name="url" data={link} type="text" />
                    <FormCheck label="isSocial" name="isSocial" data={link} />
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

const mapStateToProps = state => ({
    link: state.link.link
});

export default connect(mapStateToProps, { linkCreate })(Create);