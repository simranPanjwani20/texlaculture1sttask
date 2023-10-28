import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';
import {forwardRef, useEffect} from 'react';
import TagManager from "react-gtm-module";

import {Box} from '@mui/material';
import UtilityService from "../services/UtilityService";

// ----------------------------------------------------------------------

const Page = forwardRef(({children, title = '', meta, ...other}, ref) => {
    useEffect(() => {
        const tagManagerArgs = {
            dataLayer: {
                cId: UtilityService.getCompany()?.companyId,
                ucmId: UtilityService.getCompany()?.id,
                page: title
            },
            dataLayerName: 'PageDataLayer'
        }
        TagManager.dataLayer(tagManagerArgs)
    })

    return (
        <>
            <Helmet>
                <title>{`${title} | TexlaCulture`}</title>
                {meta}
            </Helmet>

            <Box ref={ref} {...other}>
                {children}
            </Box>
        </>
    )
});

Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
};

export default Page;
