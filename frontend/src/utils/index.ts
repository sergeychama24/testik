export function formatProductType(type: string) {
  const types = new Map([
    ["tech", "Электроника"],
    ["food", "Еда"],
    ["clothes", "Одежда"],
  ]);

  return types.get(type);
}
