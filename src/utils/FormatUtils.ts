import { format } from 'date-fns';

export const dateFormat = {
  dateDot: 'yyyy.MM.dd',
  dateHyphen: 'yyyy-MM-dd',
};

export const formatDate = (
  value: Date | undefined | null,
  formatKey: keyof typeof dateFormat,
  defaultValue = '',
): string => {
  if (value === undefined || value === null || Number.isNaN(value.getTime()))
    return defaultValue;

  return format(value, dateFormat[formatKey]);
};
