
import styles from './Products.module.css';

export default function Products({ produto }) {

    return (
        <>
            <h2 className={styles.h2}>{produto.nome}</h2>
            <img className={styles.img} src={produto.image} alt={`imagem do produto ${produto.nome}`} />
            <h3 className={styles.h3}>{produto.preco}</h3>
        </>
    )
}