import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

export interface Post {
  title : string;
  post : string;
  date : string;
}

export const posts : Post[] = [
  {
    title : "Welcome",
    post : "A quick site I put up to keep everyone up to date with the campaign",
    date : "3/24/2020"
  }
];


@observer
export class Posts extends React.Component {
  constructor(props : Readonly<{}>) {
    super(props);
  }

  render() {
    return(
      <section className="posts-container">
        {posts.map((post)=>{
          return(
            <section className="post">
              <section className="post-title">
                <span>{post.date}</span>
                <h4>{post.title}</h4>
              </section>
              <section className="post-body">
                {post.post}
              </section>
            </section>
          );
        })}
      </section>
    );
  }
}