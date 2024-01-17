import styles from '@/styles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs'


export default function about() {
    return (
        <>
            <section className={styles.aboutBlog}>
                <h1 className={styles.aboutBlog__title}>Sobre o blog Cardoso Post</h1>

                <p>
                    Eu criei este blog com o intuito de auxiliar programadores e disseminar conhecimento. Acredito que a troca de informações e experiências é fundamental para o crescimento e aprimoramento da comunidade de desenvolvedores. Por isso, meu objetivo é oferecer conteúdo de qualidade, com dicas, tutoriais e boas práticas que possam ser aplicadas no dia a dia dos profissionais da área.
                </p>
            </section>

            <section className={styles.aboutCreator}>
                <Image
                    src='/desenvolvedor-vinicius-cardoso.jpg'
                    alt='Desenvolvedor Vinicius Cardoso'
                    title='Desenvolvedor front-end Vinicius Cardoso'
                    width={340}
                    height={340}
                    className={styles.aboutCreator__logo}
                />

                <div className={styles.aboutCreator__texts}>
                    <h2>Conheça o criador</h2>

                    <div>
                        <p>
                            Eu sou Vinicius Cardoso, um jovem desenvolvedor front-end com paixão pela tecnologia. Fui formado como técnico em informática e atualmente estou cursando o quarto período análise e desenvolvimento de sistemas para expandir meus conhecimentos e habilidades na área.
                        </p>

                        <p>
                            Com apenas 23 anos, já possuo experiência prática como desenvolvedor front-end júnior, onde tive a oportunidade de colocar em prática minhas habilidades e aprender com profissionais experientes em minha equipe. Estou sempre em busca de novos desafios e oportunidades para crescer em minha carreira, e acredito no poder da tecnologia para transformar o mundo em um lugar melhor.
                        </p>

                        <p>
                            Criei um blog com o objetivo principal de consolidar meus conhecimentos em NextJS e aprender sobre novos assuntos relacionados a ele. Além de aprimorar minhas habilidades, também quero compartilhar conteúdos relevantes para desenvolvedores que, em minha opinião, são super interessantes.
                        </p>

                    </div>
                </div>
            </section>

            <section className={styles.card__info}>
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