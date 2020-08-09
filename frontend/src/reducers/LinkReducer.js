import { 
    LINK_CREATE, 
    LINK_LIST, 
    LINK_GET, 
    LINK_UPDATE,
    LINK_REMOVE,
    LINK_TO_REMOVE,
} from '../actions/LinkActions';

const initialState = {
    link: null,
    links: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LINK_CREATE: {
            return { ...state, link: null };
        }

        case LINK_UPDATE: {
            const response = payload ? payload.data : null;
            const link = response ? response.data : null;

            return { ...state, link };
        }

        case LINK_GET: {
            const response = payload ? payload.data : null;
            const link = response ? response.data : null;

            return { ...state, link };
        }

        case LINK_LIST: {
            const response = payload ? payload.data : null;
            const links = response ? response.data : null;

            return { ...state, links };
        }

        case LINK_TO_REMOVE: {
            return { ...state, linkToRemove: payload };
        }

        case LINK_REMOVE: {
            const links = state.links.filter(link => link.id !== state.linkToRemove.id);
            return { ...state, linkToRemove: null, links };
        }

        default: {
            return state;
        }
    };
};