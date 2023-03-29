import styles from "./Button.module.css";

const Button = (props) => {

  const styleButton = {
    backgroundColor: props.color,
  };

  return (
    <button
      disabled={props.disabled}
      className={styles.btn}
      style={styleButton}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;