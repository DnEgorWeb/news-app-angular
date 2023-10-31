export interface FeedDto {
  list: {
    id: number,
    title: string,
    description: string,
    author: string,
    author_url: string,
    date: number, // epoch
  }[],
  page: number
}