export interface MockReplyItem {
  author: string;
  avatar: string;
  nickname: string;
  time: string;
  isLike: boolean;
  content: string;
}

export interface MockCommentItem {
  avatar: string;
  nickname: string;
  time: string;
  isLike: boolean;
  content: string;
  replyData: MockReplyItem[];
}

const commentMockSeed: MockCommentItem[] = [
  {
    avatar: "",
    nickname: "张三",
    time: "2023-10-31",
    isLike: true,
    content: "666",
    replyData: [
      {
        author: "张三",
        avatar: "",
        nickname: "张三",
        time: "2023-10-31",
        isLike: true,
        content: "666",
      },
    ],
  },
  {
    avatar: "",
    nickname: "张三",
    time: "2023-10-31",
    isLike: false,
    content: "666",
    replyData: [
      {
        author: "张三",
        avatar: "",
        nickname: "张三",
        time: "2023-10-31",
        isLike: true,
        content: "666",
      },
    ],
  },
];

export function getMockCommentList(): MockCommentItem[] {
  return commentMockSeed.map((item) => ({
    ...item,
    replyData: item.replyData.map((reply) => ({ ...reply })),
  }));
}
