// PropTypes
import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {Autocomplete, TextField} from '@mui/material';

// ----------------------------------------------------------------------

RHFMultiCustomAutoComplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
    options: PropTypes.array.isRequired,
    multiple: PropTypes.bool,
};

export default function RHFMultiCustomAutoComplete({
                                                       name,
                                                       label,
                                                       helperText,
                                                       options,
                                                       multiple = false,
                                                       ...other
                                                   }) {
    const {control, setValue} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <Autocomplete
                    {...field}
                    onChange={(event, newValue) => setValue(name, newValue, {shouldValidate: true})}
                    multiple={multiple}
                    options={options}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <TextField
                            label={label}
                            error={!!error}
                            helperText={error ? error?.message : helperText}
                            {...params}
                        />
                    )}

                    {...other}
                />
            )}
        />
    );
}
