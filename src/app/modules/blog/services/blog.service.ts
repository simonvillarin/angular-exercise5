import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1,
      title: 'Exploring the Wonders of Nature',
      description:
        'A blog dedicated to discovering the beauty and mysteries of the natural world.',
      author: 'Sarah Thompson',
      comments: [
        'Great article!',
        'I learned so much from this. Thanks for sharing!',
      ],
    },
    {
      id: 2,
      title: 'Tips for a Balanced Lifestyle',
      description:
        'Learn how to maintain a healthy lifestyle with practical tips and advice.',
      author: 'John Miller',
      comments: [
        'This is really helpful!',
        "I've tried some of these tips and they work wonders.",
      ],
    },
    {
      id: 3,
      title: 'The Art of Photography',
      description:
        'Discover the art and technique behind capturing stunning photographs.',
      author: 'Emily Carter',
      comments: [
        'Your photos are amazing!',
        'Could you share some editing tips too?',
      ],
    },
    {
      id: 4,
      title: 'Adventures Around the Globe',
      description:
        'Join me as I share my travel experiences and inspire others to explore the world.',
      author: 'David Anderson',
      comments: [
        'I love reading about your adventures!',
        'This makes me want to book a trip right now.',
      ],
    },
    {
      id: 5,
      title: 'Latest Gadgets and Innovations',
      description:
        'Stay updated on the latest technological advancements and gadget reviews.',
      author: 'Alex Johnson',
      comments: [
        'Great review!',
        "I'm considering buying this product. Is it worth the price?",
      ],
    },
    {
      id: 6,
      title: 'The Importance of Reading',
      description:
        'In this blog post, we explore the benefits and significance of reading books.',
      author: 'Jane Doe',
      comments: [
        "Great article! I couldn't agree more.",
        'Thanks for sharing your insights on this topic!',
      ],
    },
  ];

  constructor() {}

  getBlogs = () => {
    return this.blogs;
  };
}
