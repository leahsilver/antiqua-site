import React from "react";
import { FiSend } from "react-icons/fi";
import { BsPersonFill, BsChatFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdSubject } from "react-icons/md";
import { Link } from "react-router-dom";
import "./forum.css";
export default class Respond extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        val: "",
        views: 0,
        user: "",
        res: 0,
      },
      modalShow: false,
      subject: [],
      forum: [],
    };
  }
  ammountRes = (item) => {
    let nowRes = 0;
    this.state.forum.map((_item) => {
      if (_item.title == item.val) {
        nowRes++;
      }
    });
    this.setState({ res: nowRes });
  };

  addRes = () => {
    if (this.state.value.val !== "") {
      this.addRespond(this.state.value);
    }
    {
    }
    this.setState({ modalShow: false });
  };
  componentDidMount() {
    fetch(`http://localhost:3080/subject`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          subject: res,
        });
      });
  }
  foru() {
    fetch(`http://localhost:3080/forum`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          forum: res,
        });
      });
  }

  addRespond = async (res) => {
    await fetch("http://localhost:3080/subject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
    this.componentDidMount()
  };
  updateRespond = async (res) => {
    await fetch(`http://localhost:3080/subject`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
  };

  render() {
    return (
      <div className="all-forum">
        <h1 className="hedforum">FORUM</h1>

        <div className="add-subject">
          {this.props.user && (
            <button
              className="btn-add-subject"
              type="button"
              onClick={() => {
                this.setState({ modalShow: true });
              }}
            >
              new subject{" "}
            </button>
          )}
        </div>

        {this.state.modalShow && (
          <div className="div-add-sabject-all">
            <form>
              <div className="form-group">
                <textarea
                  className="area form-control"
                  id="message-text"
                  onChange={(e) => {
                    this.setState({
                      value: {
                        val: e.target.value,
                        views: 0,
                        user: this.props.user,
                        res: 0,
                      },
                    });
                  }}
                ></textarea>
              </div>
              <button
                className="btn-send1"
                style={{ color: "black" }}
                type="button"
                data-dismiss="modal"
                onClick={() => this.addRes()}
              >
                {" "}
                <FiSend />
                create forum
              </button>{" "}
              <button
                className="btn-send1"
                style={{ color: "black", marginBottom: "20px" }}
                type="button"
                onClick={() => this.setState({ modalShow: false })}
              >
                cancel
              </button>
            </form>
          </div>
        )}

        {this.state.subject &&
          this.state.subject.map((item) => {
            return (
              <div className="card-item-forum">
                <Link
                  onClick={() => {
                    item.views += 1;
                    this.updateRespond(item);
                  }}
                  style={{
                    textDecoration: "none",
                  }}
                  to={{
                    state: {
                      item: item,
                    },
                    pathname: `/for`,
                  }}
                >
                  <p className="p-subject">
                    <p className="p-icon">
                      <MdSubject />
                    </p>
                    {item.val}
                  </p>
                  <p className="p-name">
                    <p className="p-icon">
                      <BsPersonFill />
                    </p>
                    {item.user}
                  </p>
                  <p className="p-saw">
                    <p className="p-icon">
                      <IoEyeSharp />
                    </p>
                    {item.views}
                  </p>
                  <p className="p-respond">
                    <p className="p-icon">
                      <BsChatFill />
                    </p>{" "}
                    {item.res}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    );
  }
}
