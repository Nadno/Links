import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../../Layouts/Manage';
import { linkList, linkRemove, setLinkToRemove } from '../../../actions/LinkActions';

const Links = ({ 
    links, linkList, linkRemove, linkToRemove, setLinkToRemove 
}) => {

    useEffect(() => {
        linkList();
    }, [linkList]);

    const confirmDelete = e => (linkToRemove ? linkRemove(linkToRemove) : null);
    const cancelDelete = e => setLinkToRemove(null);

    return (
        <Layout notLinksPage={false}>
            <div className="row">
                <div className="col">
                    <h1>Links</h1>
                </div>
                <div className="col text-right align-self-bottom pt-2">
                    <Link to="/manage/links/create" className="btn btn-primary">
                        Add
                    </Link>
                </div>
            </div>

            <ul>
                {
                    links && links.length ? (
                        links.map(link => {
                            const handleDelete = e => setLinkToRemove(link);

                            const border = (linkToRemove && linkToRemove.id === link.id) ?
                                'border border-danger rounded' : 'border border-transparent';

                            return (

                                <li key={link.id} className={`pb-2 pt-2 pl-3 pr-3 d-flex flex-row justify-content-between ${border}`}>
                                    <div className="pr-3 d-flex align-items-center">
                                        <img src="https://via.placeholder.com/100" alt="Link icon" />
                                    </div>
                                    <div className="align-self-center">
                                        <span className="text-primary clearfix">{link.label}</span>
                                        <span className="text-primary clearfix">{link.url}</span>
                                    </div>
                                    <div className="ml-auto p-2 clearfix d-flex flex-column justify-content-center align-items-center">
                                        <Link to={`/manage/links/edit/${link.id}`} className="w-100">
                                            <div className="btn btn-primary w-100">
                                                Edit
                                            </div>
                                        </Link>
                                        <button className="w-100 btn btn-danger" onClick={handleDelete} >Delete</button>
                                    </div>
                                </li>
                            );
                        })) : null
                }
            </ul>

            {
                linkToRemove ? (
                    <div className="alert alert-danger rounderd float-center shadow-bold">
                        <h4 className="alert-heading">Delete Confirmation!</h4>
                        <p>Are you sure you want to delete, this action cannot be undone.</p>
                        <hr />
                        <div className="w-100 d-flex justify-content-center">
                            <button className="btn btn-light w-25 mr-5" onClick={cancelDelete}>Cancel</button>
                            <button className="btn btn-danger w-25" onClick={confirmDelete} >Delete</button>
                        </div>
                    </div>
                ) : null
            }

        </Layout>
    );
};

const mapStateToProps = state => ({
    links: state.link.links,
    linkToRemove: state.link.linkToRemove,
});

export default connect(mapStateToProps, { linkList, setLinkToRemove, linkRemove })(Links);