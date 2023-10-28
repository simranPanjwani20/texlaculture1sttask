import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react';

import {m} from 'framer-motion';

import {Typography} from '@mui/material';

import {MotionContainer, varBounce} from '../animate';

import {PageNotFoundIllustration} from '../../assets/illustrations';

ErrorBoundary.propTypes = {
    children: PropTypes.any,
};

export default function ErrorBoundary({children}) {

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const onError = (error, errorInfo) => {
            setHasError(true);
            console.error(error, errorInfo);
        };

        window.addEventListener('error', onError);
        return () => {
            window.removeEventListener('error', onError);
        };
    }, []);

    if (hasError) {
        return (
            <>
                {/* <Helmet>
        <title> 404 Page Not Found | Minimal UI</title>
      </Helmet> */}
                <MotionContainer>
                    <m.div variants={varBounce().in}>
                        <Typography variant="h3" textAlign="center" paragraph>
                            Sorry, An error has occured!
                        </Typography>
                    </m.div>

                    <m.div variants={varBounce().in}>
                        <Typography variant="h4" sx={{color: 'text.secondary'}} textAlign="center">
                            Sorry, we couldn’t find the page you’re looking for. We are working hard to fix it!
                        </Typography>
                    </m.div>

                    <m.div variants={varBounce().in}>
                        <PageNotFoundIllustration
                            sx={{
                                height: 260,
                                my: {xs: 5, sm: 10},
                            }}
                        />
                    </m.div>

                    <m.div variants={varBounce().in}>
                        <Typography variant="h4" sx={{color: 'text.secondary'}} textAlign="center">
                            Please reload this page!
                        </Typography>
                    </m.div>

                </MotionContainer>
            </>
        );
    }

    return children;
};

