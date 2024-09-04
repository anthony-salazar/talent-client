import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const DataForm = ({ open, onClose, onSave, onDelete, data, fields, modalTitle }) => {
  const [formData, setFormData] = React.useState(data);

  const handleFieldChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <React.Fragment key={field.name}>
            {field.type === 'select' ? (
              <FormControl fullWidth margin="dense">
                <InputLabel>{field.label}</InputLabel>
                <Select
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(e, field.name)}
                  disabled={field.readonly}  // Disable select if readonly
                >
                  {field.options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                label={field.label}
                value={typeof formData[field.name] === 'object' && formData[field.name] !== null 
                    ? formData[field.name]['id'] 
                    : formData[field.name] || ''}
                onChange={(e) => !field.readonly && handleFieldChange(e, field.name)} // Handle change only if not readonly
                fullWidth
                margin="dense"
                type={field.type}
                multiline={field.type === 'text' && field.rows > 0} // Set multiline if type is text and rows is defined
                rows={field.rows || undefined} // Use rows if defined
                InputProps={{
                  readOnly: field.readonly // Set input to readOnly if readonly
                }}
              />
            )}
          </React.Fragment>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onSave(formData)} color="primary">Save</Button>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onDelete} color="secondary">Delete</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DataForm;
