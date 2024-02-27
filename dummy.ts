export const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"



const getRandomDate = (start : Date, end : Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};


export const dummyUsers = [
  { id: 'user1',student_role: "STUDENT", name: 'John', email: 'john@example.com', username: 'john_doe', bio: 'I love cats lol!', role: 'Admin' ,createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: -4},
  { id: 'user2',student_role: "STUDENT", name: 'Alice', email: 'alice@example.com', username: 'alice_smith', bio: 'I love cats lol!', role: 'Admin',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()) , updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 1},
  { id: 'user3', student_role: "STUDENT",name: 'Bob', email: 'bob@example.com', username: 'bob_jones', bio: 'I love cats lol!', role: 'User',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 2},
  { id: 'user4',student_role: "STUDENT", name: 'Eva', email: 'eva@example.com', username: 'eva_miller', bio: 'I love cats lol!', role: 'User',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()) , updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 3},
  { id: 'user5',student_role: "STUDENT", name: 'Chris', email: 'chris@example.com', username: 'chris_wilson', bio: 'I love cats lol!', role: 'Mod' ,createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 5},
  { id: 'user6', student_role: "STUDENT",name: 'Sophie', email: 'sophie@example.com', username: 'sophie_brown', bio: 'I love cats lol!', role: 'Mod',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 6 },
  { id: 'user7', student_role: "STUDENT",name: 'David', email: 'david@example.com', username: 'david_smith', bio: 'I love cats lol!', role: 'User',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 7},
  { id: 'user8', student_role: "STUDENT",name: 'Emma', email: 'emma@example.com', username: 'emma_watson', bio: 'I love cats lol!', role: 'User' ,createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 8},
  { id: 'user9', student_role: "STUDENT",name: 'Michael', email: 'michael@example.com', username: 'michael_jackson', bio: 'I love cats lol!', role: 'Admin' ,createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 9},
  { id: 'user10', student_role: "STUDENT",name: 'Olivia', email: 'olivia@example.com', username: 'olivia_williams', bio: 'I love cats lol!', role: 'Mod' ,createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 0},
  { id: 'user11', student_role: "STUDENT",name: 'Ryan', email: 'ryan@example.com', username: 'ryan_adams', bio: 'I love cats lol!', role: 'User',createdAt: getRandomDate(new Date(2022, 0, 1), new Date()), updatedAt: getRandomDate(new Date(2022, 0, 1), new Date()), points: 10},
  // Add more dummy user data as needed
];
  
  export const dummyNotifications = [
    {
      body: "Your post has reached 10 points!",
      postId: "1",
      seen: false,
      userId: "user1",
    },
    {
        body: "Your comment has reached 20 points!",
      postId: "2",
      seen: true,
      userId: "user2",
    },
    // Add more dummy notifications as needed
  ];
  export const flairMap = {
   "GENERAL": "bg-red-500",
    "NEWS": "bg-blue-500",
    "DISCUSSION": "bg-green-500",
    "QUESTION": "bg-yellow-500",
    "ANNOUNCEMENT": "bg-purple-500",
    "EVENT": "bg-pink-500",
    "TECH": "bg-indigo-500",
    "ENTERTAINMENT": "bg-teal-500",
    "SPORTS": "bg-gray-500",
    "ART": "bg-blue-700",
    "FOOD": "bg-green-700",
  };
  
  const flairKeys = Object.keys(flairMap);
  const randomFlairKey = flairKeys[Math.floor(Math.random() * flairKeys.length)];
  // Define dummy post data
  const dummyPosts = [
    { id: 'post1', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'First Post', text: 'This is the 1 post.', userId: 'user1' , likedIds:[1,1,1,1,1,1,1], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post2', flair:{name:"announcement", color : "bg-blue-500"}, title: 'Second Post', text: 'This is the 2 post.', userId: 'user2' , likedIds:[1,1,1,1,1,1,1], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post3', flair:{name:"discussion", color : "bg-blue-500"}, title: 'Third Post', text: 'This is the 3 post.', userId: 'user3' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post4', flair:{name:"event", color : "bg-blue-500"}, title: 'Fourth Post', text: 'This is the 4 post.', userId: 'user4' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post5', flair:{name:"news", color : "bg-blue-500"}, title: 'Fifth Post', text: lorem + lorem, userId: 'user5' , likedIds:[1,1,1,1,1,1,1,1,1,1,1], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post6', flair:{name:"question", color : "bg-blue-500"}, title: 'Sixth Post', text: 'This is the 6 post.', userId: 'user6' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post7', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Seventh Post', text: 'This is the 7 post.', userId: 'user7' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post8', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Eighth Post', text: 'This is the 8 post.', userId: 'user8' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post9', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Ninth Post', text: 'This is the 9 post.', userId: 'user9' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post10', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Tenth Post', text: 'This is the 10 post.', userId: 'user10' , likedIds:[], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post11', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Eleventh Post', text: 'This is the 11 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post12', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Twelfth Post', text: 'This is the 12 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post13', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Twelfth Post', text: 'This is the 13 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post14', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Twelfth Post', text: 'This is the 14 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post15', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Twelfth Post', text: 'This is the 15 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},
    { id: 'post16', flair:{name:flairKeys[Math.floor(Math.random() * flairKeys.length)], color : "bg-blue-500"}, title: 'Twelfth Post', text: 'This is the 16 post.', userId: 'user11' , likedIds:[5,9,9,9,9,9], dislikedIds: [], createdAt: getRandomDate(new Date(2022, 0, 1), new Date())},

    // Add more dummy post data as needed
  ];

  // Define dummy comment data
  export const dummyComments = [
    {
      id: 'comment1',
      children: [
        {
          id: 'comment3',
          parentId: 'comment1',
          text: 'Nice one!',
          userId: 'user1',
          postId: 'post1',
          createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
          likedIds: [1, 1],
          dislikedIds: [1, 1, 1],
        },
      ],
      text: 'Great post!',
      userId: 'user2',
      postId: 'post1',
      createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
      likedIds: [1, 1, 1, 1, 1, 1, 1, 1],
      dislikedIds: [1, 1, 1],
    },
    {
      id: 'comment2',
      children: [],
      text: 'Nice article!',
      userId: 'user1',
      postId: 'post1',
      createdAt: getRandomDate(new Date(2022, 0, 1), new Date()),
      likedIds: [1, 1],
      dislikedIds: [1, 1, 1],
    },
    // Remove the trailing comma after the last comment
  ];
  
  const assignUserAndPost = (comment) => {
    comment.user = dummyUsers.find((user) => user.id === comment?.userId);
    comment.post = dummyPosts.find((post) => post.id === comment?.postId);
  
    // Recursively assign user and post to nested children
    if (comment.children && comment.children.length > 0) {
      comment.children.forEach((childComment) => {
        assignUserAndPost(childComment);
      });
    }
  };
  
  dummyComments.forEach((comment) => {
    assignUserAndPost(comment);
  });
  // Associate comments with posts and users
  dummyPosts.forEach((post) => {
    post.comments = dummyComments.filter((comment) => comment.postId === post.id);
    post.user = dummyUsers.find((user) => user.id === post.userId);
    post.comments.forEach((comment) => {
      comment.user = dummyUsers.find((user) => user.id === comment.userId);
    });
  });
  
  
  
  export const dummyPostArray = dummyPosts;

  export const dummyUsers2 = [
    {
        id: 1,
      name: "John Doe",
      email: "john@example.com",
      username: "johndoe",
      bio: "I love cats lol!",
      ban_reason: null,
      emailVerified: null,
      image: null,
      password: "hashed_password",
      student_role: "ALUMNI",
      major: "Computer Science",
      role: "USER",
      accounts: [],
      isTwoFactorEnabled: false,
      twoFactorConfirmation: null,
      posts: [],
      comments: [],
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      notifications: []
    },
    {
        id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      username: "janedoe",
      bio: lorem,
      ban_reason: null,
      emailVerified: null,
      image: null,
      password: "hashed_password",
      student_role: "STUDENT",
      major: "Biology",
      role: "USER",
      accounts: [],
      isTwoFactorEnabled: false,
      twoFactorConfirmation: null,
      posts: [],
      comments: [],
      lastLogin: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      notifications: []
    },
    {
      id: 3,
    name: "Jane Doe",
    email: "jane@example.com",
    username: "janedoe",
    bio: lorem,
    ban_reason: null,
    emailVerified: null,
    image: null,
    password: "hashed_password",
    student_role: "STUDENT",
    major: "Biology",
    role: "USER",
    accounts: [],
    isTwoFactorEnabled: false,
    twoFactorConfirmation: null,
    posts: [],
    comments: [],
    lastLogin: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    notifications: []
  },
  {
    id: 4,
  name: "Jane Doe",
  email: "jane@example.com",
  username: "janedoe",
  bio: lorem,
  ban_reason: null,
  emailVerified: null,
  image: null,
  password: "hashed_password",
  student_role: "STUDENT",
  major: "Biology",
  role: "USER",
  accounts: [],
  isTwoFactorEnabled: false,
  twoFactorConfirmation: null,
  posts: [],
  comments: [],
  lastLogin: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  notifications: []
},
{
  id: 5,
name: "Jane Doe",
email: "jane@example.com",
username: "janedoe",
bio: lorem,
ban_reason: null,
emailVerified: null,
image: null,
password: "hashed_password",
student_role: "STUDENT",
major: "Biology",
role: "USER",
accounts: [],
isTwoFactorEnabled: false,
twoFactorConfirmation: null,
posts: [],
comments: [],
lastLogin: null,
createdAt: new Date(),
updatedAt: new Date(),
notifications: []
},
{
  id: 7,
name: "Jane Doe",
email: "jane@example.com",
username: "janedoe",
bio: lorem,
ban_reason: null,
emailVerified: null,
image: null,
password: "hashed_password",
student_role: "STUDENT",
major: "Biology",
role: "USER",
accounts: [],
isTwoFactorEnabled: false,
twoFactorConfirmation: null,
posts: [],
comments: [],
lastLogin: null,
createdAt: new Date(),
updatedAt: new Date(),
notifications: []
},

  ]