import { css } from '@emotion/react'
import { Avatar } from 'rsuite'
export default function User() {
  return (
    <div className="flex  items-center justify-between">
      {/* user */}
      <section className="flex  items-center ">
        <Avatar
          circle
          src="https://avatars.githubusercontent.com/u/12592949"
          alt="@superman66"
          // size="lg"
        />
        <span className="ml-[8px]">用户名</span>
      </section>
      <div
        css={css`
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          letter-spacing: 0.05em;
          color: var(--jikeYellow);
        `}
      >
        <p>3215</p>
        <p
          css={css`
            font-size: 12px;
            line-height: 14px;
            opacity: 0.5;
            color: #ffffff;
            letter-spacing: 0.05em;
            margin: 0;
          `}
        >
          Kcal
        </p>
      </div>
    </div>
  )
}
