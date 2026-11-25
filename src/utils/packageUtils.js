
export function getPackageById(packages, id) {
  return packages.find((item) => item.id === id);
}

export function filterPackages(packages, search, category) {
  return packages.filter((item) => {
    const searchMatch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || item.category === category;

    return searchMatch && categoryMatch;
  });
}

export function sortPackages(packages, sortBy) {
  const sorted = [...packages];

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.pricePerPerson - b.pricePerPerson);

    case "price-high":
      return sorted.sort((a, b) => b.pricePerPerson - a.pricePerPerson);

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    default:
      return sorted;
  }
}
