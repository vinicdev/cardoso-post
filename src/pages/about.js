import styles from '@/styles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs'


export default function about() {
    return (
        <>
            <section className={styles.container}>
                <Image
                    src='/desenvolvedor-vinicius-cardoso.jpg'
                    alt='Desenvolvedor Vinicius Cardoso'
                    width={340}
                    height={340}
                    className={styles.container__logo}
                />

                <div className={styles.container__texts}>
                    <h1>Sobre</h1>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>
            </section>

            <section className={styles.container__info}>
                <h2>
                    Mais sobre o Cardoso
                </h2>

                <p>
                    Acesse minhas redes, entre em contato ou veja meus projetos.
                </p>

                <nav>
                    <ul>
                        <li>
                            <Link href="">
                                <BsGithub />
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                <BsLinkedin />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>

        </>
    )
}