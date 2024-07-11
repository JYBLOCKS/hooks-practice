import { useEffect, useState } from "react";

export function ItemList({ getItems }: { getItems: Function }) {
  const [items, setItems] = useState<[]>([]);
  useEffect(() => {
    setItems(getItems());
  }, [getItems]);
  return <h2>{items.join(", ")}</h2>;
}
