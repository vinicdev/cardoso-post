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
                        Vinicius Cardoso é um jovem desenvolvedor front-end com uma grande
                        paixão pela tecnologia. Ele se formou como técnico em informática 
                        e está atualmente cursando análise e desenvolvimento de sistemas 
                        para expandir ainda mais seus conhecimentos e habilidades na área.
                    </p>

                    <p>
                        Com apenas 22 anos de idade, Vinicius já possui experiência prática
                        como desenvolvedor front-end junior, onde tem tido a oportunidade 
                        de colocar em prática suas habilidades e aprender com os profissionais 
                        mais experientes em sua equipe. Ele está sempre em busca de novos desafios e 
                        oportunidades para crescer em sua carreira, e é um grande defensor do poder 
                        da tecnologia para transformar o mundo em um lugar melhor.
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
                            <Link href="https://github.com/vinicdev" target={'_blank'}>
                                <BsGithub />
                            </Link>
                        </li>

                        <li>
                            <Link href="https://www.linkedin.com/in/vinicdev/" target={'_blank'}>
                                <BsLinkedin />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>

        </>
    )
}