export const countPostsByCategory = (posts: any) => {
  const categoryCountMap: Record<
    number,
    { id: number; title: string; count: number }
  > = {};

  posts.forEach((post: any) => {
    const category = post.category;

    if (category && category.id) {
      if (!categoryCountMap[category.id]) {
        categoryCountMap[category.id] = {
          id: category.id,
          title: category.title,
          count: 0,
        };
      }
      categoryCountMap[category.id].count += 1;
    }
  });

  return Object.values(categoryCountMap);
};
