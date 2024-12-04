import { Stack, TextField } from '@mui/material';

type NameFieldValue = [string, string];

interface NameFieldProps {
  value: NameFieldValue;
  onChange: (val: NameFieldValue) => void;
}

export function NameField(props: NameFieldProps) {
  const nameValues = props.value;
  const [lastName, firstName] = nameValues;

  const handleChange = (value: string, index: number) => {
    const newNameValues = nameValues.map((nv, i) => {
      if (i == index) return value;
      return nv;
    }) as NameFieldValue;

    props.onChange(newNameValues);
  };

  return (
    <Stack alignItems="center" direction="row" gap={1}>
      <TextField
        sx={{ width: '100px' }}
        variant="outlined"
        name="introducer_adresses"
        placeholder="例）山田"
        onChange={(e) => handleChange(e.target.value || '', 0)}
        value={lastName}
      />
      <TextField
        sx={{ width: '100px' }}
        variant="outlined"
        name="introducer_adresses"
        placeholder="例）太郎"
        onChange={(e) => handleChange(e.target.value || '', 1)}
        value={firstName}
      />
    </Stack>
  );
}
