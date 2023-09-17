import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="User Namespaces: Now Supports Running Stateful Pods in Alpha!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Comparing Local Kubernetes Development Tools: Telepresence, Gefyra, and mirrord" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Kubernetes Legacy Package Repositories Will Be Frozen On September 13, 2023" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Kubernetes and GPT-3" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Gateway API v0.8.0: Introducing Service Mesh Support" />
      </div>
    </div>
  </div>
);

export default Blog;
