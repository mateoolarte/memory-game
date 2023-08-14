export async function getAnimals(nItems = 6) {
  try {
    const response = await fetch(
      `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=${nItems}`
    );
    const jsonRes = await response.json();
    const data = jsonRes?.entries || [];

    return data;
  } catch (error) {
    throw new Error("Oops! something was wrong");
  }
}
