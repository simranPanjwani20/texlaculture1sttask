import {Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {useState} from 'react';
import Label from './Label';

CopyLabel.propTypes = {
    text: PropTypes.string,
}

export default function CopyLabel({text}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        // setTimeout(() => setCopied(false), 1000);
    };

    return (
        <Typography
            sx={{m: 1, textTransform: 'none', cursor: 'pointer'}}
            variant="soft"
            color="secondary"
            onClick={handleCopy}
        >
            <Label variant="soft" m={1} color="secondary">{text.replace(/##/g, '')}</Label> {copied &&
            <span style={{color: 'primary'}}>Copied!</span>}
        </Typography>
    );
}
