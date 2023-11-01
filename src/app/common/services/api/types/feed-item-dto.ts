export interface FeedItemDto {
  id: number,
  title: string,
  description: string,
  author: string,
  author_url: string,
  date: number, // epoch
  content: string,
  comments: {
    id: number
    content: string
    author: string
    author_url: string
    date: number, // epoch
  }[],
}