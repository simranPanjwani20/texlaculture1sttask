import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {FormHelperText, Stack, Typography} from '@mui/material';
//
import {Upload, UploadAvatar, UploadBox} from '../upload';
import UploadSingleFileByType from '../upload/UploadSingleFileByType';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
    name: PropTypes.string,
};

// ----------------------------------------------------------------------

export function RHFUploadAvatar({name, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <div>
                    <UploadAvatar
                        accept={{
                            'image/*': [],
                        }}
                        error={!!error}
                        file={field.value}
                        {...other}
                    />

                    {!!error && (
                        <FormHelperText error sx={{px: 2, textAlign: 'center'}}>
                            {error.message}
                        </FormHelperText>
                    )}
                </div>
            )}
        />
    );
}

// ----------------------------------------------------------------------

RHFUploadBox.propTypes = {
    name: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.string,
};

export function RHFUploadBox({name, width, height, label, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <Stack direction="row" justifyContent="flex-start">
                    <UploadBox files={field.value} error={!!error} {...other} sx={{width, height}}/>
                    {label && <Typography variant="h6" alignSelf="center">{label}</Typography>}
                </Stack>
            )}
        />
    );
}

// ----------------------------------------------------------------------

RHFUpload.propTypes = {
    name: PropTypes.string,
    multiple: PropTypes.bool,
    helperText: PropTypes.node,
};

export function RHFUpload({name, multiple, helperText, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => {
                console.log('');
                return multiple ? (
                    <Upload
                        multiple
                        accept={{'image/*': []}}
                        files={field.value}
                        error={!!error}
                        helperText={
                            (!!error || helperText) && (
                                <FormHelperText error={!!error} sx={{px: 2}}>
                                    {error ? error?.message : helperText}
                                </FormHelperText>
                            )
                        }
                        {...other}
                    />
                ) : (
                    <Upload
                        style={{maxWidth: 500, maxHeight: 500}}
                        accept={{'image/*': []}}
                        file={field.value}
                        error={!!error}
                        helperText={
                            (!!error || helperText) && (
                                <FormHelperText error={!!error} sx={{px: 2}}>
                                    {error ? error?.message : helperText}
                                </FormHelperText>
                            )
                        }
                        {...other}
                    />
                );
            }}
        />
    );
}

// ----------------------------------------------------------------------

RHFUploadSingleFileByType.propTypes = {
    name: PropTypes.string,
    fileType: PropTypes.string,
    fileTypeName: PropTypes.string,
    helperText: PropTypes.node,
};

export function RHFUploadSingleFileByType({name, fileType, fileTypeName, helperText, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => {
                const checkError = !!error && field.value;
                const type = {};
                type[fileType] = [];
                return (
                    <UploadSingleFileByType
                        accept={type}
                        fileTypeName={fileTypeName}
                        file={field.value}
                        error={checkError}
                        helperText={
                            (!!error || helperText) && (
                                <FormHelperText error={!!error} sx={{px: 2}}>
                                    {error ? error?.message : helperText}
                                </FormHelperText>
                            )
                        }
                        {...other}
                    />
                );
            }}
        />
    );
}
