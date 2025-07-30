/**
 * Convert Boomi-style field names into human-readable labels
 */
export default function labelMaker(label: string): string {
  try {
    const raw = label.split('/').pop()?.replace(/^@/, '') || label;
    const spaced = raw
      .replace(/([a-z])([A-Z])/g, '$1 $2')     // camelCase -> camel Case
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // ABCDef -> ABC Def
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2')   // numWord -> num Word
      .replace(/([a-zA-Z])([0-9])/g, '$1 $2');  // wordNum -> word Num
      
    return spaced
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  } catch (err) {
    console.error('labelMaker error:', err);
    return label;
  }
}