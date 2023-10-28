import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {TextField} from '@mui/material';

RHFDateAndTimePicker.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
    InputProps: PropTypes.object,
    min: PropTypes.any,
    max: PropTypes.any,
};

export default function RHFDateAndTimePicker({name, helperText, InputProps, min, max, ...other}) {
    const {control} = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={max || ''}
            render={({field, fieldState: {error}}) => (
                <DateTimePicker
                    {...field}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            error={!!error}
                            helperText={error ? error.message : helperText}
                            size="small"
                        />
                    )}
                    minDateTime={min}
                    maxDateTime={max}
                    inputFormat="dd/MM/yyyy HH:mm a"
                    {...other}
                />
            )}
        />
    );
}
