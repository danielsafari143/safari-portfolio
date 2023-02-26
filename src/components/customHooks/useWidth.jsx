import { useMediaQuery } from "@mui/material";

export function useWidth () {
    const matches = useMediaQuery('(min-width:530px)');
    return matches;
}
