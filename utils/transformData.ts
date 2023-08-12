export function transformData(data) {
  const result = [];

  data.forEach((item) => {
    const { fields } = item;
    const { image } = fields || {};

    const payload = {
      id: Math.floor(Math.random() * 1000), // TODO: Search for a better implementation
      name: image?.title || "",
      reference: image?.uuid || "",
      image: image?.url || "",
    };

    result.push(payload, payload);
  });

  return result.sort(() => Math.random() - 0.5);
}
