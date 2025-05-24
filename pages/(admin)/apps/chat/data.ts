import type { IChatItem } from "./(components)/ChatItem.vue";

export const chatsData: IChatItem[] = [
  {
    id: 1,
    image: "/images/avatars/2.png",
    name: "Debra C. Glen",
    messages: [
      { message: "Conversation Started", sendAt: "04:30 PM", sender: "other" },
      { message: "Hey, how's it going?", sendAt: "04:31 PM", sender: "other" },
      { message: "I'm doing well, thanks! How about you?", sendAt: "04:33 PM", sender: "me" },
      {
        message: "Just finished a great book. Have any recommendations?",
        sendAt: "04:34 PM",
        sender: "other",
      },
      {
        message: "That's awesome! I'd recommend 'The Silent Observer.'",
        sendAt: "04:36 PM",
        sender: "me",
      },
      { message: "Thanks! I'll check it out.", sendAt: "04:37 PM", sender: "other" },
      {
        message: "Did you catch the latest movie? It's fantastic!",
        sendAt: "04:38 PM",
        sender: "me",
      },
      { message: "No, I haven't. What's the title?", sendAt: "04:40 PM", sender: "other" },
      { message: "It's called 'Dreamscape.' A must-watch!", sendAt: "04:42 PM", sender: "me" },
      {
        message: "Sounds intriguing. I'll add it to my watchlist.",
        sendAt: "04:44 PM",
        sender: "other",
      },
      {
        message: "Great! Let me know what you think after watching.",
        sendAt: "04:46 PM",
        sender: "me",
      },
    ],
  },
  {
    id: 2,
    image: "/images/avatars/3.png",
    name: "Gary N. Roache",
    unreadCount: 2,
    messages: [
      { message: "I just finished a great workout!", sendAt: "02:15 PM", sender: "other" },
      { message: "Has anyone seen my keys?", sendAt: "02:18 PM", sender: "me" },
      { message: "What's for dinner tonight?", sendAt: "02:20 PM", sender: "other" },
      { message: "I can't believe it's almost the weekend!", sendAt: "02:22 PM", sender: "me" },
      {
        message: "Just got a new book. Excited to start reading.",
        sendAt: "02:25 PM",
        sender: "other",
      },
      { message: "Looking forward to the upcoming vacation!", sendAt: "02:30 PM", sender: "me" },
      { message: "Any recommendations for a good movie?", sendAt: "02:35 PM", sender: "other" },
      { message: "Just adopted a cute puppy! Meet Max.", sendAt: "02:40 PM", sender: "me" },
      { message: "Enjoying a quiet evening with some music.", sendAt: "02:50 PM", sender: "other" },
      { message: "Yeah", sendAt: "02:51 PM", sender: "me" },
    ],
  },
  {
    id: 3,
    image: "/images/avatars/4.png",
    name: "Roberta K. Simons",
    messages: [
      { message: "Hey there!", sendAt: "03:00 PM", sender: "other" },
      { message: "How's your day going?", sendAt: "03:02 PM", sender: "me" },
      { message: "Did you catch the latest news?", sendAt: "03:05 PM", sender: "other" },
      {
        message: "I'm planning a weekend getaway. Any suggestions?",
        sendAt: "03:10 PM",
        sender: "me",
      },
      {
        message: "Just tried a new recipe. Turned out delicious!",
        sendAt: "03:15 PM",
        sender: "other",
      },
      {
        message: "Looking forward to the weekend. Any exciting plans?",
        sendAt: "03:20 PM",
        sender: "me",
      },
      {
        message: "Have you seen the new movie everyone is talking about?",
        sendAt: "03:30 PM",
        sender: "other",
      },
    ],
  },
  {
    id: 4,
    image: "/images/avatars/5.png",
    name: "Michael S. Gillen",
    messages: [
      { message: "Hey, what's up?", sendAt: "05:00 PM", sender: "other" },
      { message: "Did you catch the game last night?", sendAt: "05:02 PM", sender: "me" },
      {
        message: "Thinking of trying a new recipe for dinner.",
        sendAt: "05:05 PM",
        sender: "other",
      },
      { message: "Just finished a great workout at the gym.", sendAt: "05:10 PM", sender: "me" },
      {
        message: "Planning a weekend getaway. Any suggestions?",
        sendAt: "05:15 PM",
        sender: "other",
      },
      { message: "Excited about the upcoming project at work.", sendAt: "05:20 PM", sender: "me" },
      {
        message: "Looking forward to the weekend. Any fun plans?",
        sendAt: "05:25 PM",
        sender: "other",
      },
    ],
  },
  {
    id: 5,
    image: "/images/avatars/6.png",
    name: "Pamela W. Boggess",
    messages: [
      { message: "Hey there! How's your day going?", sendAt: "01:00 PM", sender: "other" },
      { message: "Just wanted to say hi and catch up.", sendAt: "01:02 PM", sender: "me" },
      { message: "Any exciting plans for the weekend?", sendAt: "01:05 PM", sender: "other" },
      { message: "Have you tried the new restaurant downtown?", sendAt: "01:10 PM", sender: "me" },
      {
        message: "Thinking of starting a new hobby. Any suggestions?",
        sendAt: "01:15 PM",
        sender: "other",
      },
      { message: "Did you see that amazing sunset yesterday?", sendAt: "01:20 PM", sender: "me" },
      {
        message: "Found a great podcast - 'Mindful Moments.' Highly recommend!",
        sendAt: "01:25 PM",
        sender: "other",
      },
    ],
  },
  {
    id: 6,
    image: "/images/avatars/7.png",
    name: "Troy G. Ward",
    messages: [
      { message: "How's your day going?", sendAt: "11:00 AM", sender: "other" },
      { message: "Just finished a great workout!", sendAt: "11:02 AM", sender: "me" },
      { message: "Any plans for the weekend?", sendAt: "11:05 AM", sender: "other" },
      { message: "What's your favorite hobby?", sendAt: "11:10 AM", sender: "me" },
      { message: "Excited for the upcoming holidays!", sendAt: "11:15 AM", sender: "other" },
      { message: "Trying out a new recipe for dinner tonight.", sendAt: "11:20 AM", sender: "me" },
      { message: "Any book recommendations?", sendAt: "11:25 AM", sender: "other" },
    ],
  },
  {
    id: 7,
    image: "/images/avatars/8.png",
    name: "Alicia W. Calvillo",
    messages: [
      { message: "Hey, how's it going?", sendAt: "06:00 PM", sender: "other" },
      { message: "I just finished a great workout!", sendAt: "06:02 PM", sender: "me" },
      {
        message: "Did you watch the latest episode of that show?",
        sendAt: "06:05 PM",
        sender: "other",
      },
      { message: "What's your favorite hobby?", sendAt: "06:10 PM", sender: "me" },
      { message: "Excited for the weekend plans!", sendAt: "06:15 PM", sender: "other" },
      { message: "Any good book recommendations?", sendAt: "06:20 PM", sender: "me" },
      {
        message: "Just tried a new recipe. It turned out amazing!",
        sendAt: "06:25 PM",
        sender: "other",
      },
    ],
  },
];
