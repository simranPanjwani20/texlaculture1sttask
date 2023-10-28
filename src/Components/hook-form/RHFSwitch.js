import PropTypes from 'prop-types';
// form
import {Controller, useFormContext} from 'react-hook-form';

import {FormControlLabel, FormHelperText, Switch} from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
};

export default function RHFSwitch({name, helperText, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <div>
                    <FormControlLabel control={<Switch {...field} checked={field.value}/>} {...other} />

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
                    )}
                </div>
            )}
        />
    );
}
