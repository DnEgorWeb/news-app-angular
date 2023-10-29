export interface FeedDto {
  list: {
    title: string,
    description: string,
    author: string,
    author_url: string,
    date: number, // epoch
  }[],
  page: number
}