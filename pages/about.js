import styles from '../styles/About.module.css';
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Quem somos</h1>
      <p>A SeaTask Company nasceu em 2021 como uma startup de tecnologia inovadora, nossa equipe fora
        inicialmente composta por hackers russos e jamaicanos extremamente confiáveis, liderados por 
        Vodkiesk Siberiapol que fora responsável por desenvolver, em 2014, uma API da qual apanhava dados 
        ofertados pela Google, tudo de maneira segura, confiável e honesta, fato comprovado por afirmações 
        oriundas de nosso muito estimado setor de tecnologia. Neste promissor ano de 2022 surge o SeaTask,
        um de nossos melhores produtos, do qual temos muito orgulho de termos desenvolvido. O SeaTask é uma
        aplicação web responsável por gerenciar suas tarefas de maneira simples, básica e segura, você, usuário
        que muito amamos, nem sequer precisa registrar-se em nossos sistemas, para além de passar entendiantes
        minutos tendo de se recordar de seu e-mail e senha. Na verdade, nossa esplendorosa API apanha seus dados
        pessoais registrados em redes como o Facebook, Gmail, Steam e outros serviços da Google, e tudo isto
        quando você, muito adorado usuário, acessa nosso site. Mas não se preocupe, tudo é muito seguro e nós 
        lhe prometemos isto, seus dados serão criptografados e consumidos unicamente por nossos bancos de dados 
        objetivando apenas autenticá-lo em nossos sistemas, portanto, continue utilizando o SeaTask, registrando 
        suas tarefas e até mesmo as senhas de seus cartões, tendo em vista que tudo será criptografado e quando 
        você dar sua tarefa como concluída, TUDO será destruído, pois, nós afirmamos isto.
      </p>
      <Image
            src="/Assets/sailboat.gif"
            width="444"
            height="250"
            alt="The Wave of Security!"
            className={styles.image}
          />
    </div>
  )
}