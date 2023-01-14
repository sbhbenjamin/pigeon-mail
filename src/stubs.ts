export const inboxMailStub = [
  {
    id: 1,
    from: 'dog@pen.com',
    content: 'grilled chicken',
    timestamp: 1673735120415,
  },
  {
    id: 2,
    from: 'pig@pen.com',
    content: 'chicken rice',
    timestamp: 1673735120415,
  },
  {
    id: 3,
    from: 'cat@pen.com',
    content: 'mlxg is the best',
    timestamp: 1673735120415,
  },
];

export const outboxMailStub = [
  {
    id: 4,
    to: 'bunny@pen.com',
    content: 'grilled chicken',
    delay: 2.5,
    timestamp: 1673735238221,
  },
  {
    id: 5,
    to: 'sheep@pen.com',
    content: 'chicken rice',
    delay: 3,
    timestamp: 1673735238221,
  },
  {
    id: 6,
    to: 'cat@pen.com',
    content: 'mlxg is the best',
    delay: 1,
    timestamp: 1673735238221,
  },
];
