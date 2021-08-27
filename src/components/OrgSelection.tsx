import React, { useState } from 'react';
import { MenuItem, TextField } from '@material-ui/core';

export default function OrgSelection() {
  const [org, setOrg] = useState('acme');

  const handleChangeOrg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrg(e.target.value);
  };

  return (
    <TextField
      fullWidth
      select
      variant="outlined"
      label="Switch Organization"
      size="small"
      value={org}
      onChange={handleChangeOrg}
    >
      <MenuItem value={`acme`}>Acme, Inc</MenuItem>
      <MenuItem value={`bob`}>Bob's Burgers</MenuItem>
      <MenuItem value={`ads`}>EasyWire Marketing Solutions</MenuItem>
    </TextField>
  )
}
