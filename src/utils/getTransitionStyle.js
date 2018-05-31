const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: "translate3D(10px,0,0)"
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: "translate3D(0,0,0)"
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: "translate3D(10px,0,0)"
    },
  }
}

const getTransitionStyle = ({
    timeout,
    status
  }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle