import * as React from 'react';
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

CustomAutocomplete.propTypes = {
    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.array,
    handler: PropTypes.func,
    autocompleteRef: PropTypes.func
};


export default function CustomAutocomplete({options, label, placeholder, value, handler, autocompleteRef}) {
    const [selectedOptions, setSelectedOptions] = React.useState([]);

    const handleChange = (_, newValue) => {
        setSelectedOptions(newValue);
        handler(newValue);
    };
    return (
        <Autocomplete
            multiple
            value={selectedOptions}
            limitTags={1}
            onChange={handleChange}
            options={options}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            getOptionSelected={(option, newValue) => option === newValue}
            // renderOption={(props, option, { selected }) => (
            //   <li {...props}>
            //     <Checkbox
            //       icon={icon}
            //       checkedIcon={checkedIcon}
            //       style={{ marginRight: 8 }}
            //       checked={selected}
            //     />
            //     {option}
            //   </li>
            // )}
            ref={autocompleteRef}
            style={{width: "100%"}}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={placeholder} size="small"/>
            )}
        />
    );
}

