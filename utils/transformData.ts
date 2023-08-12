import { v4 as uuidv4 } from "uuid";

export function transformData(data) {
  const result = [];

  data.forEach((item) => {
    const { fields } = item;
    const { image } = fields || {};

    const payload = {
      name: image?.title || "",
      reference: image?.uuid || "",
      image: image?.url || "",
    };

    result.push({ ...payload, id: uuidv4() }, { ...payload, id: uuidv4() });
  });

  return result.sort(() => Math.random() - 0.5);
}
