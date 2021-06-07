
import React, { useEffect } from 'react'
import KakaoShareButton from './KakaoShareButton'

const Layout = () => {
  // 카카오톡 공유 기능을 사용하기 위한 script 가져옴
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  })

  return (
    <div className="layout">
      <KakaoShareButton />
    </div>
  )
}

export default Layout