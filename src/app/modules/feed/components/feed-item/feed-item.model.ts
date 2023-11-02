export interface FeedItem {
  id: number
  title: string
  description: string
  author: string
  authorImgURL: string
  date: Date
  content: string
  comments: {
    id: number
    content: string
    author: string
    authorImgURL: string
    date: Date
  }[]
}
