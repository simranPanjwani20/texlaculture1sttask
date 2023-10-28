import PropTypes from 'prop-types';
import {Controller, useFormContext} from 'react-hook-form';
import {TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

RHFMonthDatePicker.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
    InputProps: PropTypes.object,
    min: PropTypes.any,
    max: PropTypes.any,
};

export default function RHFMonthDatePicker({name, helperText, InputProps, min, max, ...other}) {
    const {control} = useFormContext();

    // Get the first and last day of the month based on the current date
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState: {error}}) => (
                <DatePicker
                    {...field}
                    views={['month', 'date']}
                    inputFormat="dd/MM"
                    min={min || firstDayOfMonth}
                    max={max || lastDayOfMonth}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            error={!!error}
                            helperText={error ? error.message : helperText}
                            size="small"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: null, // Remove the calendar icon
                                endAdornment: null,
                            }}
                        />
                    )}
                    {...other}
                />
            )}
        />
    );
}
