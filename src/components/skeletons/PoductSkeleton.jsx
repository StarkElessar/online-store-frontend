import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={3}
    width={240}
    height={464}
    viewBox="0 0 240 464"
    backgroundColor="#f5f5f5"
    foregroundColor="#e3e3e3"
  >
    <rect x="11" y="11" rx="6" ry="6" width="218" height="280" /> 
    <rect x="11" y="421" rx="5" ry="5" width="220" height="32" /> 
    <rect x="11" y="309" rx="4" ry="4" width="120" height="15" /> 
    <rect x="11" y="331" rx="4" ry="4" width="218" height="30" /> 
    <rect x="11" y="379" rx="2" ry="2" width="90" height="10" /> 
    <rect x="11" y="398" rx="3" ry="3" width="120" height="15" />
  </ContentLoader>
)

export default MyLoader