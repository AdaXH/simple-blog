interface MsgModel {
  _id: string;
  avatar: string;
  content: string;
  date: string;
  name: string;
  userId: string;
}

interface Page {
  page: number;
  pageSize?: number;
}
