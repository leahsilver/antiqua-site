import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Card } from "react-bootstrap";
import { RiReplyFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "./for.css";
import { FiSend } from "react-icons/fi";

export default function For(props) {
  const { name, email } = props;
  const url = useLocation();
  const item = url.state.item;
  const [forum, setForum] = useState([]);
  const [subject, setSubject] = useState([]);

  const [value, setValue] = useState({
    replay: "",
    title: item.val,
    user: name,
    lastReply: "",
    lastName: "",
    email: email,
  });
  const [New, setNew] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: "auto",
    });
  };
  const addRes = () => {
    if (name != "") setValue({ ...value, user: name });
    if (value !== "") {
      addRespond(value);
    }
    setNew(false);
    subject.map((item) => {
      if (item.val == value.title) {
        item.res += 1;
        updateRespond(item, "subject");
      }
    });
  };
  const getForum = async (kind,res) => {
    let foru;
    await fetch(`http://localhost:3080/`+kind, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    })
      .then((res) => res.json())
      .then((res) => {
        foru = res;
      });
    return foru;
  };

  async function fetchData() {
    let forum = await getForum("forum"); 
    setForum(forum);
    let subject=await getForum("subject"); 
    setSubject(subject)
  }
  useEffect(() => {
    fetchData();
  },[]);
  const addRespond = async (res) => {
    await fetch("http://localhost:3080/forum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
    fetchData();
  };
  
  const updateRespond = async (res, kind) => {
    await fetch(`http://localhost:3080/${kind}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
  };

  return (
    <div className="allres">
      <h1 className="hed-subject-in">{item.val}</h1>
      {forum&&
        forum.map((i) => {
          return (
            <div className="cardcon">
              {item.val == i.title && (
                <Card className="replay-div">
                  {i.lastName && (
                    <div className="last-replay-all">
                      <div className="last-replay-name">
                        {" "}
                        {i.lastName} said:
                      </div>
                      <div className="last-replay-replay"> {i.lastReply}</div>
                    </div>
                  )}
                  <div className="replay-div-p">
                    {i.replay}
                    
                  </div>

                  <div className="all-small-replay">
                    <div className="text-muted-replay">{i.user}</div>
                    <button
                      className="quote-replay"
                      onClick={() => {
                        scrollToBottom();
                        setNew(true);
                        setValue({
                          ...value,
                          lastReply: i.replay,
                          lastName: i.user,
                        });
                      }}
                    >
                      {console.log(value.lastReply)}
                      <RiReplyFill />
                    </button>{" "}
                  </div>
                </Card>
              )}
            </div>
          );
        })}{" "}
      {New && (
        <div className="add-respond-new">
          <form>
            <div className="form-group">
              <textarea
                className="area form-control"
                id="message-text"
                onChange={(e) => {
                  setValue({
                    ...value,
                    replay: e.target.value,
                  });
                }}
              ></textarea>
              {!name && (
                <input
                  placeholder="name"
                  onChange={(e) =>
                    setValue({
                      ...value,
                      user: e.target.value,
                    })
                  }
                ></input>
              )}
            </div>
            <button
              style={{ color: "black" }}
              type="button"
              className="btn-send1"
              data-dismiss="modal"
              onClick={() => addRes()}
            >
              post
              <FiSend />
            </button>
            <button
              style={{ color: "black" }}
              type="button"
              className="btn-send1"
              onClick={() => setNew(false)}
            >
              cancel
            </button>
          </form>
        </div>
      )}
      <button
        style={{ color: "black" }}
        type="button"
        className="new-replay-btn"
        onClick={() => {
          setNew(true);
          setValue({
            ...value,
            lastReply: "",
            lastName: "",
          });
        }}
      >
        new replay
      </button>
    </div>
  );
}
