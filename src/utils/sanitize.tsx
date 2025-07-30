
/**
 * Strips the y cordinate of a function from and id
 */
export default function stripYFromId(id: string): string {
  try {
    return id.replace(/@@y:-?\d+/, '');
  } catch (err) {
    console.error('stripYFromId Error:', err);
    return id;
  }
}

 