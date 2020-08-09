import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Layout from '../../Layouts/Manage';
import FormGroup from '../../../components/FormGroup';
import FormCheck from '../../../components/FormCheck';

import { linkGet, linkUpdate } from '../../../actions/LinkActions';
import { getFormData } from '../../../helpers/form';

const Edit = ({ link, linkGet }) => {
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        linkGet(id);
    }, [id, linkGet]);

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);

        linkUpdate(id, data);
        history.replace('/manage/links');
        history.go(0);
    };

    return (
        <Layout>
            <h1>Edit Link</h1>
            <div>
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
    link: state.link.link,
});

export default connect(mapStateToProps, { linkGet })(Edit);
