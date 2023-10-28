import PropTypes from 'prop-types';

import {Box, Stack, Tooltip} from '@mui/material';
//
import {fileData, fileFormat, fileThumb} from './utils';
import DownloadButton from './DownloadButton';

// ----------------------------------------------------------------------

FileThumbnail.propTypes = {
    sx: PropTypes.object,
    imgSx: PropTypes.object,
    tooltip: PropTypes.bool,
    imageView: PropTypes.bool,
    onDownload: PropTypes.func,
    onClick: PropTypes.func,
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default function FileThumbnail({file, tooltip, imageView, onDownload, onClick, sx, imgSx}) {
    const {name = '', path = '', preview = ''} = fileData(file);

    const format = fileFormat(path || preview);

    const renderContent =
        format === 'image' && imageView ? (
            <Box
                component="img"
                src={preview}
                onClick={onClick}
                sx={{
                    width: 1,
                    height: 1,
                    flexShrink: 0,
                    objectFit: 'cover',
                    ...imgSx,
                }}
            />
        ) : (
            <Box
                component="img"
                src={fileThumb(format)}
                onClick={onClick}
                sx={{
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    ...sx,
                }}
            />
        );

    if (tooltip) {
        return (
            <Tooltip title={name}>
                <Stack
                    flexShrink={0}
                    component="span"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        width: 'fit-content',
                        height: 'inherit',
                    }}
                >
                    {renderContent}
                    {onDownload && <DownloadButton onDownload={onDownload}/>}
                </Stack>
            </Tooltip>
        );
    }

    return (
        <>
            {renderContent}
            {onDownload && <DownloadButton onDownload={onDownload}/>}
        </>
    );
}
