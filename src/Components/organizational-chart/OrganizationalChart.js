import PropTypes from 'prop-types';
import {Tree, TreeNode} from 'react-organizational-chart';

import {useTheme} from '@mui/material/styles';
import flattenArray from '../../utils/flattenArray';
//
import {GroupNode, SimpleNode, StandardNode} from './node';

// ----------------------------------------------------------------------

OrganizationalChart.propTypes = {
    sx: PropTypes.object, variant: PropTypes.string, data: PropTypes.shape({
        name: PropTypes.string, children: PropTypes.array,
    }),
};

export default function OrganizationalChart({data, variant = 'simple', sx, ...other}) {
    const theme = useTheme();
    return (<Tree
            lineWidth="1.5px"
            nodePadding="4px"
            lineBorderRadius="24px"
            lineColor={theme.palette.divider}
            label={(variant === 'simple' && <SimpleNode sx={sx} node={data}/>) || (variant === 'standard' && (
                <StandardNode
                    sx={sx}
                    node={data}
                    onEdit={() => console.log('EDIT', data.name)}
                    onDelete={() => console.log('DELETE', data.name)}
                />)) || (variant === 'group' && <GroupNode sx={sx} node={data}/>)}
                  {...other}
        >
            {data?.children.map((list) => (<List key={list.name} depth={0} data={list} variant={variant} sx={sx}/>))}
              </Tree>);
}

// ----------------------------------------------------------------------

List.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string, children: PropTypes.array,
    }), sx: PropTypes.object, depth: PropTypes.number, variant: PropTypes.string,
};

export function List({data, depth, variant, sx}) {
    const hasChild = data.children && !!data.children;

    return (<TreeNode
            label={(variant === 'simple' && <SimpleNode sx={sx} node={data}/>) || (variant === 'standard' && (
                <StandardNode
                    sx={sx}
                    node={data}
                    onEdit={() => console.log('EDIT', data.name)}
                    onDelete={() => console.log('DELETE', data.name)}
                />)) || (variant === 'group' && (<GroupNode
                    sx={sx}
                    node={data}
                    depth={depth || 0}
                    length={hasChild ? flattenArray(data.children, 'children')?.length : 0}
                />))}
        >
            {hasChild && <SubList data={data.children} depth={depth} variant={variant} sx={sx}/>}
        </TreeNode>);
}

// ----------------------------------------------------------------------

SubList.propTypes = {
    sx: PropTypes.object, data: PropTypes.array, depth: PropTypes.number, variant: PropTypes.string,
};

function SubList({data, depth, variant, sx}) {
    return (<>
            {data.map((list) => (<List key={list.name} data={list} depth={depth || 0} variant={variant} sx={sx}/>))}
        </>);
}
