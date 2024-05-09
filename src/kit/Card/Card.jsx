import { IconPlus } from "../../icons";
import styles from "./Card.module.scss";

function Card() {
   return (
      <article className={styles.card}>
         <img src="./img/cards/card-1.jpg" width={133} height={112} alt="Мужские Кроссовки Nike Blazer Mid Suede" />
         <h3 className={styles.card__name}>Мужские Кроссовки Nike Blazer Mid Suede</h3>
         <div className="flex items-center justify-between mt-[14px]">
            <div className="flex flex-col gap-[2px]">
               <span className={styles.card__field}>Цена:</span>
               <span className={styles.card__price}>12 999 руб.</span>
            </div>
            <button className={styles.card__button}>
               <IconPlus width={11} height={11} />
            </button>
         </div>
      </article>
   );
}

export default Card;
