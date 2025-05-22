import type { Theme, SxProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ScrollbarProps = &
  React.ComponentProps<'div'> & {
    sx?: SxProps<Theme>;
    fillContent?: boolean;
    slotProps?: {
      wrapperSx?: SxProps<Theme>;
      contentSx?: SxProps<Theme>;
      contentWrapperSx?: SxProps<Theme>;
    };
  };
