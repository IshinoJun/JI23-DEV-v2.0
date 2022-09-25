type EnumObject = Record<string, string | number>;

export type EnumUnionKey<T extends EnumObject> = keyof T;

export type EnumUnionValue<T extends EnumObject> = T[keyof T];

export const enumKeys = <T extends EnumObject>(
  enumObj: Record<keyof T, T[keyof T]>,
): (keyof T)[] => Object.keys(enumObj);

export const enumValues = <T extends EnumObject>(
  enumObj: Record<keyof T, T[keyof T]>,
): T[keyof T][] => Object.values(enumObj);

export const enumEntries = <T extends EnumObject>(
  enumObj: Record<keyof T, T[keyof T]>,
): [keyof T, T[keyof T]][] => Object.entries(enumObj);
