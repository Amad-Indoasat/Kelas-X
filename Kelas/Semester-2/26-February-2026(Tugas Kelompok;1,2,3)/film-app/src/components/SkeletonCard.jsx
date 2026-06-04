import { memo } from "react";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-poster skeleton-shimmer" />
      <div className="skeleton-title skeleton-shimmer" />
      <div className="skeleton-rating skeleton-shimmer" />
    </div>
  );
}

export default memo(SkeletonCard);
