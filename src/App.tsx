import { css } from '@emotion/react'
import { Avatar, Input } from 'rsuite'
import './App.css'
import 'rsuite/dist/rsuite.min.css'
import User from './components/User'
import clsx from 'clsx'

function App() {
  return (
    <div
      css={css`
        background: black;
        width: 100vw;
        height: 100vh;
        padding: 24px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #dae0ee;

        .user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            color: var(--jikeYellow);
          }
        }

        .panel {
          position: relative;
          margin: 40px auto 0 auto;
          width: 238px;
          height: 145px;
          border-radius: 15px;

          background: linear-gradient(
            180deg,
            rgba(41, 47, 63, 0) 0%,
            rgba(41, 47, 63, 0.8) 100%
          );

          /* &::after {
            content: '稍后可以修改';
            color: #fff;
            line-height: 17px;
            opacity: 0.3;
            font-size: 12px;
            font-weight: 400;
          } */

          .destination {
            left: 50%;
            transform: translatex(-50%);
            position: relative;
            .rs-input {
              background: transparent;
              border: none;
              font-size: 50px;
              font-weight: 700;
              line-height: 58.2px;
              color: inherit;
              text-align: center;
            }
          }

          .kcal {
            position: absolute;
            left: 50%;
            bottom: 33px;
            transform: translatex(-50%);

            &::after {
              content: '';
              width: 40px;
              position: absolute;
              border: solid 1px #fff;
              top: 14px;
              opacity: 0.2;
              margin-left: 16px;
            }

            &::before {
              content: '';
              width: 40px;
              position: absolute;
              border: solid 1px #fff;
              top: 14px;
              opacity: 0.2;
              /* margin-right: 16px; */
              right: 50px;
            }
          }
        }
        .tips {
          color: #fff;
          line-height: 17px;
          opacity: 0.3;
          font-size: 12px;
          font-weight: 400;
          margin-top: 33px;
          text-align: center;
        }
        .rankListPanelWrapper {
          width: 327px;
          /* background: linear-gradient(
            180deg,
            rgba(41, 47, 63, 0) 0%,
            rgba(41, 47, 63, 0.8) 100%
          );
          border: 0.2px solid rgba(217, 217, 217, 0.15);
          box-sizing: border-box;
          filter: drop-shadow(14px 18px 34px rgba(0, 0, 0, 0.32));
          border-radius: 15px; */
          padding: 14.5px 16px;
          font-family: 'PingFang SC';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          /* identical to box height, or 157% */

          text-align: justify;
          letter-spacing: 0.22px;

          color: #ffffff;
          /* .rankListPanel {
          } */
        }
      `}
    >
      {/* 欢迎用户 */}
      <section className="user">
        <div>
          Hi, <span>用户名字</span>
          <p>来设定你的运动目标吧</p>
        </div>
        <Avatar
          circle
          src="https://avatars.githubusercontent.com/u/12592949"
          alt="@superman66"
          // size="lg"
        />
      </section>
      {/* 目标设置面板 */}
      <section className="panel">
        <p className="destination">
          <Input placeholder="180" />
        </p>
        <p className="kcal">Kcal</p>
        {/* <div>-- Kcal --</div> */}
      </section>
      <p className="tips">稍后可以修改</p>
      {/* 排行榜 */}
      <section>
        <header className={clsx('title', 'flex justify-between mb-[8px]')}>
          <span>排行榜</span>
          <span
            css={css`
              color: var(--jikeYellow);
            `}
          >
            查看全部
          </span>
        </header>
        <main className={clsx('rankListPanelWrapper card', ' space-y-2')}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              css={css`
                display: grid;
                grid-template-columns: 32px 1fr;
                align-items: center;
              `}
            >
              <span>{item}</span>
              <User />
            </div>
          ))}
        </main>
      </section>
      {/* 每日目标进度 */}
      <section className={clsx('card')}>
        <span>每日目标进度</span>
        <img src="./assets/calendar.png" alt="" />
      </section>
      {/* 与好友 pk */}
    </div>
  )
}

export default App
