import React, { useState } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        // .support-chat-container {
        //   display: none;
        // }
        .support-chat-container.show {
          display: block !important;
        }
        .support-chat {
          position: fixed;
          bottom: 3rem;
          right: 0;
          max-width: 27.87rem;
          width: 100%;
          transform: scale(0);
          opacity: 0;
          transform-origin: bottom right;
          z-index: 1045;
          transition: .3s ease-out;
          padding-bottom: 3rem;
        }
        .support-chat.show-chat {
          transform: scale(1);
          opacity: 1;
        }
        .support-chat {
          right: 2rem;
        }
        .support-chat+.btn-support-chat {
          position: fixed;
          bottom: 2.5rem;
          right: 1rem;
          width: 9rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: var(--phoenix-white) !important;
          z-index: 1045;
          border-radius: var(--phoenix-border-radius-pill);
          box-shadow: 0px 0px 32px 0px rgba(36, 40, 46, .12);
          transition: .3s ease;
        }
        .support-chat+.btn-support-chat {
          right: 3rem;
        }
        .support-chat+.btn-support-chat.btn-chat-close {
          border-radius: 50%;
          width: 3rem;
        }
        button:focus:not(:focus-visible) {
          outline: 0;
        }
      `}</style>

      <div className={`support-chat-container ${open ? "show" : ""}`}>
        <div className={`container-fluid support-chat ${open ? "show-chat" : ""}`}>
          {/* --- Chat content --- */}
          <div className="card bg-white">
            <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom">
              <h5 className="mb-0 d-flex align-items-center gap-2">
                Demo widget
                <span className="fa-solid fa-circle text-success fs--3"></span>
              </h5>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                  type="button"
                  id="support-chat-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="fas fa-ellipsis-h text-900"></span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end py-2"
                  aria-labelledby="support-chat-dropdown"
                >
                  <a className="dropdown-item" href="#!">Request a callback</a>
                  <a className="dropdown-item" href="#!">Search in chat</a>
                  <a className="dropdown-item" href="#!">Show history</a>
                  <a className="dropdown-item" href="#!">Report to Admin</a>
                  <a
                    className="dropdown-item btn-support-chat"
                    href="#!"
                    onClick={(e) => { e.preventDefault(); setOpen(false); }}
                  >
                    Close Support
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body chat p-0">
              <div className="d-flex flex-column-reverse scrollbar h-100 p-3">
                <div className="text-end mt-6">
                  <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p className="mb-0 fw-semi-bold fs--1">I need help with something</p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p className="mb-0 fw-semi-bold fs--1">I can’t reorder a product I previously ordered</p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a className="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p className="mb-0 fw-semi-bold fs--1">How do I place an order?</p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                  <a className="false d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3" href="#!">
                    <p className="mb-0 fw-semi-bold fs--1">My payment method not working</p>
                    <span className="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span>
                  </a>
                </div>
                <div className="text-center mt-auto">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-white"
                      src="src/assets/img/team/30.webp"
                      alt=""
                    />
                  </div>
                  <h5 className="mt-2 mb-3">Eric</h5>
                  <p className="text-center text-black mb-0">
                    Ask us anything – we’ll get back to you here or by email within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex align-items-center gap-2 border-top ps-3 pe-4 py-3">
              <div className="d-flex align-items-center flex-1 gap-3 border rounded-pill px-4">
                <input
                  className="form-control outline-none border-0 flex-1 fs--1 px-0"
                  type="text"
                  placeholder="Write message"
                />
                <label
                  className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                  htmlFor="supportChatPhotos"
                >
                  <span className="fa-solid fa-image"></span>
                </label>
                <input className="d-none" type="file" accept="image/*" id="supportChatPhotos" />
                <label
                  className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
                  htmlFor="supportChatAttachment"
                >
                  <span className="fa-solid fa-paperclip"></span>
                </label>
                <input className="d-none" type="file" id="supportChatAttachment" />
              </div>
              <button className="btn p-0 border-0 send-btn">
                <span className="fa-solid fa-paper-plane fs--1"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          className={`btn p-0 border border-200 btn-support-chat ${open ? "btn-chat-close" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className="fs-0 btn-text text-primary text-nowrap">Chat demo</span>
          <span className="fa-solid fa-circle text-success fs--1 ms-2"></span>
          <span className="fa-solid fa-chevron-down text-primary fs-1"></span>
        </button>
      </div>
    </>
  );
};

export default ChatBot;
