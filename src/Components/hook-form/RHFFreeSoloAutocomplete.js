import * as React from 'react';
import PropTypes from "prop-types";
import {Controller, useFormContext} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

const filter = createFilterOptions();

RHFFreeSoloAutoComplete.propTypes = {
    name: PropTypes.any,
    label: PropTypes.any,
}

export default function RHFFreeSoloAutoComplete({name, label, ...other}) {
    const {control, setValue} = useFormContext();
    const [value, setValueState] = React.useState('');
    const [tags, setTags] = React.useState([]);

    const handleInputChange = (event) => {
        setValueState(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && value.trim()) {
            setTags([...tags, value.trim()]);
            setValue(name, tags.join(','));
            setValueState('');
        }
    };

    const handleDelete = (tag) => {
        const updatedTags = tags.filter((t) => t !== tag);
        setTags(updatedTags);
        setValue(name, updatedTags.join(','));
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <div>
                    <div>
                        {tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                onDelete={() => handleDelete(tag)}
                                style={{marginRight: '8px', marginBottom: '8px'}}
                            />
                        ))}
                    </div>
                    <Autocomplete
                        freeSolo
                        {...field}
                        value={field.value || ''}
                        onChange={(event, newValue) => {
                            setValue(name, newValue);
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const {inputValue} = params;
                            // Suggest the creation of a new value
                            const isExisting = options.some((option) => inputValue === option);
                            if (inputValue !== '' && !isExisting) {
                                filtered.push(inputValue);
                            }

                            return filtered;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id={name}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                value={value}
                            />
                        )}
                        {...other}
                    />
                </div>
            )}
        />
    );
}
