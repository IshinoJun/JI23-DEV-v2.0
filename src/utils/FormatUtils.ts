import { format } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

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

const getTimeZoneValue = (): string => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const toDateJP = (date: Date): Date | null => {
  if (Number.isNaN(date.getTime())) {
    return null;
  } else {
    const timeZone = getTimeZoneValue();
    const utcDate = zonedTimeToUtc(date, timeZone);
    return utcToZonedTime(utcDate, 'Asia/Tokyo');
  }
};
