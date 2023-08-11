export function Username() {
  const clientSide = typeof window !== "undefined";
  const username = clientSide && window.localStorage.getItem("username");

  if (!username) return null;

  return <h1>Username</h1>;
}
