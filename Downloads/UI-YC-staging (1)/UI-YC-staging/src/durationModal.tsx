import { FunctionComponent, SetStateAction, useState } from "react";
import styles from "./css/durationModal.module.css";

interface Props {
  cancelModal: () => void;
}

const DurationModal = ({ cancelModal }: Props) => {
  const [duration, setDuration] = useState({
    figure: " ",
    time: "Days",
  });

  const { figure, time } = duration;

  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setDuration({ ...duration, [name]: value });
    console.log(duration);
  };

  const saveDuration = () => {
    alert(`${figure} and ${time}`);

    setDuration({
      figure: "",
      time: "",
    });

    cancelModal();
  };

  return (
    <>
      <div className={styles.modalDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.modalTitle}>
            Strategy Created Successfully 🎉
          </div>
          <div className={styles.modalSubtitle}>
            Your strategy has been created, please set how frequently you want
            the strategy to keep running e.g every 3 days, 8 hours, or every 2
            weeks etc.
          </div>
          <div className={styles.inputTitle}>Duration</div>

          <div className={styles.inputGrp}>
            <input
              type="number"
              name="figure"
              value={figure}
              placeholder="Enter Number"
              className={styles.durationInput}
              onChange={handleChange}
              required
            />
            <select
              name="time"
              id="duration"
              value={time}
              className={styles.durationDropdown}
              onChange={handleChange}
            >
              <option>Days</option>
              <option>Weeks</option>
              <option>Months</option>
            </select>
          </div>
          <div className={styles.btns}>
            <button className={styles.cancelBtn} onClick={cancelModal}>
              Cancel
            </button>
            <button
              type="submit"
              className={styles.saveBtn}
              onClick={saveDuration}
            >
              Save Duration
            </button>
          </div>
        </div>
        <div className={styles.frameDiv2}>
          <img src="modal-img.png" alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.wrapper}></div>
    </>
  );
};

export default DurationModal;
