import { Stack, Checkbox } from '@mui/material';
import { ReactNode } from 'react';

export interface ICheckboxFieldProps {
  name: string;
  desc?: ReactNode;
  value: boolean;
  onChange: (val: boolean) => void;
}
export function CheckboxField(props: ICheckboxFieldProps) {
  const handleChange = (val: boolean) => {
    props.onChange(val);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" gap={1} mt={1}>
        <Checkbox
          checked={props.value}
          onChange={(e) => handleChange(e.target.checked)}
          sx={{
            '& input': {
              width: '100%',
              height: '100%',
              marginRight: '0',
              position: 'absolute',
            },
          }}
        />
        {props.desc}
      </Stack>
    </>
  );
}
