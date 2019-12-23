export default function simpleUniqueId() {
  const random = () => Math.random().toString(36)
  return (random() + random())
    .replace(/0\./, '')
    .slice(0, 15)
    .toUpperCase()
}
