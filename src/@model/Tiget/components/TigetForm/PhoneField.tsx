import { Stack, TextField } from '@mui/material';

type PhoneFieldValue = [string, string, string];

interface PhoneFieldProps {
  value: PhoneFieldValue;
  onChange: (v: PhoneFieldValue) => void;
}

export function PhoneField(props: PhoneFieldProps) {
  const phoneValues = props.value;

  const handleChange = (value: string, index: number) => {
    const newValue = phoneValues.map((pv, i) => {
      if (i === index) return value;
      return pv;
    }) as PhoneFieldValue;

    props.onChange(newValue);
  };

  return (
    <Stack alignItems="center" direction="row" gap="5px">
      <TextField
        sx={{ width: '25%', '& input': { textAlign: 'start' } }}
        variant="outlined"
        name="introducer_tell_1"
        placeholder="090"
        onChange={(e) => handleChange(e.target.value || '', 0)}
        value={phoneValues[0]}
      />
      -
      <TextField
        sx={{ width: '25%', '& input': { textAlign: 'start' } }}
        variant="outlined"
        name="introducer_tell_2"
        placeholder="1234"
        onChange={(e) => handleChange(e.target.value || '', 1)}
        value={phoneValues[1]}
      />
      -
      <TextField
        sx={{ width: '25%', '& input': { textAlign: 'start' } }}
        variant="outlined"
        name="introducer_tell_3"
        placeholder="5678"
        onChange={(e) => handleChange(e.target.value || '', 2)}
        value={phoneValues[2]}
      />
    </Stack>
  );
}
