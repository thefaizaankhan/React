import PropTypes from 'prop-types';

function Card({username, buttonText = "Visit me"}) {
  // console.log("props", props)
  // console.log(props.username);
  console.log(username);
  return (
    <div className="mt-2 max-w-lg rounded-2xl bg-white flex flex-col items-center" >
      <img src="https://cdn.pixabay.com/photo/2017/03/27/12/50/flower-2178507__340.jpg" className="rounded-lg overflow-hidden w-full rounded-b-none" />
      <div className="my-4 p-4">
          <h1 className="text-black text-3xl font-bold">{username}</h1>
          <p className="mt-2 text-black text-xl font-medium">Create Exercises for any subject with the topics you and your students care about.
          </p>
          <div className="mt-5">
              <button type="button" className="inline-flex items-center rounded-lg px-3 py-2 font-medium text-xl text-white">{buttonText}</button>
          </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  username : PropTypes.string.isRequired,
  buttonText: PropTypes.string
}

export default Card

// Props in React 

// Hidden Scope in JavaScript - [[Prototype]]