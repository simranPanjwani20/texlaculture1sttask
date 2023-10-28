import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {Autocomplete, TextField} from '@mui/material';

// ----------------------------------------------------------------------

RHFCustomAutocomplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFCustomAutocomplete({name, label, helperText, ...other}) {
    const {control, setValue} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <Autocomplete
                    {...field}
                    onChange={(event, newValue) => {
                        const value = newValue ? newValue.value : null;
                        setValue(name, value, {shouldValidate: true});
                    }}
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
