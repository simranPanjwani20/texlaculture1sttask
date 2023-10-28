import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import '../../utils/highlight';
import {Quill} from 'react-quill';
//
import {StyledEditor} from './styles';
import EditorToolbar, {formats} from './EditorToolbar';
import RHFReactQuill from '../hook-form/RHFReactQuill';

// ----------------------------------------------------------------------

Editor.propTypes = {
    id: PropTypes.string,
    sx: PropTypes.object,
    error: PropTypes.bool,
    simple: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    helperText: PropTypes.object,
};

export default function Editor({
                                   id = 'minimal-quill',
                                   error,
                                   value,
                                   onChange,
                                   simple = false,
                                   helperText,
                                   sx,
                                   ...other
                               }) {
    const quillRef = useRef();
    const modules = {
        toolbar: {
            container: `#${id}`,
            handlers: {
                font: handleFontStyleChange, // Custom font style change handler
            },
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true,
        },
        syntax: true,
        clipboard: {
            matchVisual: false,
        },
    };

    // Custom font style change handler
    function handleFontStyleChange(quill, valuea) {
        const range = quill.getEditor().getSelection();
        if (range) {
            const {index, length} = range;
            quill.getEditor().formatText(index, length, {font: valuea});
        }
    }

    useEffect(() => {
        // Register custom font style option with Quill
        const Font = Quill.import('formats/font');
        Font.whitelist = ['Nunito']; // Add the desired font name
        Quill.register(Font, true);
    }, []);

    return (
        <>
            <StyledEditor
                sx={{
                    ...(error && {
                        border: (theme) => `solid 1px ${theme.palette.error.main}`,
                    }),
                    ...sx,
                }}
            >

                {/* eslint-disable-next-line react/jsx-no-bind */}
                <EditorToolbar id={id} isSimple={simple} handleFontStyleChange={handleFontStyleChange}/>

                {/* <ReactQuill
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder="Write something awesome..."
          {...other}
        /> */}
                <RHFReactQuill
                    name="body"
                    modules={modules}
                    formats={formats}
                    placeholder="Write something awesome..."
                    {...other}
                    ref={quillRef}
                />
            </StyledEditor>

            {helperText && helperText}
        </>
    );
}
