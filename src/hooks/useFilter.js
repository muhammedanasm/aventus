import { useState, useMemo } from "react";

export const useFilter = (items) => {
  const [filter, setFilter] = useState("All");

  const filteredData = useMemo(() => {
    return filter === "All"
      ? items
      : items.filter((i) => i.category === filter);
  }, [items, filter]);

  return { filter, setFilter, filteredData };
};
