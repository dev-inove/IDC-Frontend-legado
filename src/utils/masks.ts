export function addZeros(value: number | string, zerosToAdd: number): string {
    const stringValue = String(value);
    const zeros = "0".repeat(zerosToAdd);
    return zeros.substring(0, zeros.length - stringValue.length) + stringValue;
  }
  