import React from "react"
import ContentLoader from "react-content-loader"

const BrandSkeleton = () => (
  <ContentLoader
    speed={3}
    width={200}
    height={230}
    viewBox="0 0 200 230"
    backgroundColor="#f5f5f5"
    foregroundColor="#e3e3e3"
  >
    <rect x="0" y="0" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="35" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="70" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="105" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="140" rx="5" ry="5" width="200" height="25" />
    <rect x="0" y="175" rx="5" ry="5" width="200" height="25" />
  </ContentLoader>
)

export default BrandSkeleton