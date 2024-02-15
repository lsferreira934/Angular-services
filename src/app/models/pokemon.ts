export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string; url: string } }[];
};
