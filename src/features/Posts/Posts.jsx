import HeroPost from "./HeroPost";
import PostsSection from "./PostsSection";

export default function Posts() {
  return (
    <div className="posts">
      <div className="section">
        <HeroPost />
        <PostsSection />
      </div>
    </div>
  );
}
