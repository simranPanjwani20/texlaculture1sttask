import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {Autocomplete, TextField} from '@mui/material';

// ----------------------------------------------------------------------

RHFAutocomplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFAutocomplete({name, label, placeholder, helperText, ...other}) {
    const {control, setValue} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <Autocomplete
                    {...field}
                    onChange={(event, newValue) => setValue(name, newValue, {shouldValidate: true})}
                    renderInput={(params) => (
                        <TextField
                            size='small'
                            label={label}
                            placeholder={placeholder}
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
