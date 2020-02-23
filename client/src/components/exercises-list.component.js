import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>
        <button type="button" className="btn btn-outline-info">
          edit
        </button>
      </Link>{" "}
      |{" "}
      <button
        type="button"
        className="btn btn-outline-danger"
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        this.setState({
          exercises: response.data
        });
        console.log(response.data);
      })
      .catch(err => console.log("Произошла какая то хуйня  ---" + err));
  }

  deleteExercise = id => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    // Removing deleted exercise from UI
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  };

  exercisesList = () => {
    return this.state.exercises.map(currentexercise => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  render() {
    return (
      <div className="table-responsive-sm mt-5">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.exercisesList()}</tbody>
        </table>

        <div className="container" style={{ marginTop: "10rem" }}>
          <div className="">
            <h3 className="">Essential Fitness Exercises</h3>
          </div>
          <div className="row">
            <div className="card mt-5 col-md-4" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/4WFgWNagLFxOsTyuap/giphy.gif"
                className="card-img-top"
                alt="lunges"
              />
              <div className="card-body">
                <h5 className="card-title">Lunges</h5>
                <p className="card-text">
                  Challenging your balance is an essential part of a
                  well-rounded exercise routine. Lunges do just that, promoting
                  functional movement, while also increasing strength in your
                  legs and glutes.
                </p>
              </div>
            </div>

            <div className="card col-md-4 mt-5" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/5t9IcXiBCyw60XPpGu/giphy.gif"
                className="card-img-top"
                alt="pushup"
              />
              <div className="card-body">
                <h5 className="card-title">Pushups</h5>
                <p className="card-text">
                  Drop and give me 20! Pushups are one of the most basic yet
                  effective bodyweight moves you can perform because of the
                  number of muscles that are recruited to perform them.
                </p>
              </div>
            </div>

            <div className="card col-md-4 mt-5" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/3NwOzakbqzOrsfMKBC/giphy.gif"
                className="card-img-top"
                alt="squats"
              />
              <div className="card-body">
                <h5 className="card-title">Squats</h5>
                <p className="card-text">
                  Squats increase lower body and core strength, as well as
                  flexibility in your lower back and hips. Because they engage
                  some of the largest muscles in the body, they also pack a
                  major punch in terms of calories burned.
                </p>
              </div>
            </div>

            <div className="card col-md-4 mt-5" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/23hPPMRgPxbNBlPQe3/giphy.gif"
                className="card-img-top"
                alt="Burpess"
              />
              <div className="card-body">
                <h5 className="card-title">Burpees</h5>
                <p className="card-text">
                  An exercise we love to hate, burpees are a super effective
                  whole-body move that provides great bang for your buck for
                  cardiovascular endurance and muscle strength.
                </p>
              </div>
            </div>

            <div className="card  col-md-4 mt-5" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/7EeEk7QIUVKbV5RWzn/giphy.gif"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Glute bridge</h5>
                <p className="card-text">
                  The glute bridge effectively works your entire posterior
                  chain, which isn’t only good for you, but will make your booty
                  look perkier as well.
                </p>
              </div>
            </div>

            <div className="card col-md-4 mt-5" style={{ width: "18rem" }}>
              <img
                src="https://media.giphy.com/media/Pihv2leEf9UKQdloXA/giphy.gif"
                className="card-img-top"
                alt="Side planks"
              />
              <div className="card-body">
                <h5 className="card-title">Side planks</h5>
                <p className="card-text">
                  A healthy body requires a strong core at its foundation, so
                  don’t neglect core-specific moves like the side plank. Focus
                  on the mind-muscle connection and controlled movements to
                  ensure you’re completing this move effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
