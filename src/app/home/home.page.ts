import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassandoDadosService } from '../servicos/passando-dados.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public noticias: Array<object> = [
    {
      textoCurto: 'Brasil na Otam',imagem: 'https://renovamidia.com.br/wp-content/uploads/2018/11/depositphotos_95769450-stock-photo-puzzle-with-the-national-flag.jpg', Texto: 'Após encontro de Donald Trump com Jair Bolsonaro, o Brasil pode ter acesso preferencial a equipamentos militares norte-americanos. No entanto, a medida dificilmente evoluirá para um ingresso do país na Otan, dizem professores.', Titulo: 'Entrada do brasil na Otam', Data: '8 de maio de 2019'
    },
    {
      textoCurto:'Estão Abertas as inscrições para o Processo Seletivo Simplificado de Docentes(Etec). ',imagem: 'https://www.anitagaribaldi.sc.gov.br/uploads/486/imagens/2412961.jpg', Texto: 'Estão abertas as inscrições para o Processo Seletivo Simplificado de Docentes, objetivando a formação de cadastro para a contratação temporária de excepcional caráter público, para diversos Componentes Curriculares, no período de 08/05/2019 à 22/05/2019 (exceto aos sábados, domingos, feriados e pontos facultativos) no horário das 08:00 às 11:00, das 14:00 às 16:00 e das 19:00 às 21:00. Para conhecer as condições para inscrição e as fases do Processo Seletivo, leia os Editais de Abertura: Edital de Abertura – 040-02-2019 Edital de Abertura – 040-03-2019 Edital de abertura – 040-04-2019 Para mais informações, acesse a página de processos seletivos.', Titulo: 'Processo Seletivo Simplificado de Docentes', Data: '8 de maio de 2019'
    },
    {
      imagem: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2019/01/20190114Convocacao.jpg', Texto: 'Aviso de Convocação  nº 2 – Aviso de Abertura nº 040/02/2018 – Processo 2877/2018, Aviso de Convocação  nº 2 – Aviso de Abertura nº 040/03/2017 – Processo 3891/2017', Titulo: 'Aviso de convocação 2', Data: '30 de jan, 2019', textoCurto:'Aviso de convocação 2 para matrícula do 1º semestre de 2019 (Etec)'
    },
    {
      imagem: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/201811-Olimpiada-Brasileira-de-Astronomia.jpeg', Texto: 'Na edição 2018 da OBA – Olimpíada Brasileira de Astronomia e Astronáutica, os alunos da Etec Comendador João Rays – Barra Bonita se destacaram com excelentes resultados. Paulo Cesar Ferrarez Filho conquistou medalha de bronze e Vitor Francisco Pullini, a medalha de prata, tendo se classificado para participar das seletivas para formação das equipes que representarão o Brasil na Olimpíada Internacional de Astronomia e Astrofísica, e na Olimpíada Latino Americana de Astronomia e Astronáutica, que serão realizadas em 2019.Parabéns Paulo e Vitor, por essa importante conquista. E continuaremos na torcida pelo Vitor, para que consiga representar bem o Brasil.', Titulo: 'Etec representada nas Seletivas para Olimpíadas Internacionais de Astronomia', Data: '05 dez, 2018', textoCurto:'Etec representada nas Seletivas para Olimpíadas Internacionais de Astronomia(Etec).'
    },
    {
      imagem: 'https://www.fundacred.org.br/site/wp-content/uploads/2017/07/pedidovistoportugal-640x340.jpg', Texto: 'Resultado de um acordo firmado em 2018 entre o CEETEPS e o Instituto Politécnico de Coimbra – IPC, a iniciativa visa promover programas de mobilidade (intercâmbio), em todas as áreas de conhecimento, de interesse de ambas as instituições, promovendo projetos de internacionalização e fortalecendo as relações acadêmicas entre Brasil e Portugal.', Titulo: 'Programa de Graduação em Portugal', Data: '04 dez, 2018', textoCurto:'Programa de Graduação em Portugal(Etec).'
    },
    {
      imagem: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/20181122_ORMUB.jpg', Texto: 'Na edição 2018 da Olimpíada Regional de Matemática da Unesp – Bauru, as alunas Emily Vitória De Sousa Da Silva Ferreira (2º série do ensino médio) e Anyelle Meneghesso (3º série do ensino médio) conseguiram ótimas classificações na categoria Escolas Públicas, colocando em destaque o nome da nossa Etec Comendador João Rays e a qualidade de nossos cursos. Parabéns Emily e Anyelle por essa importante conquista.', Titulo: 'Alunas da Etec conquistam medalhas na ORMUB 2018', Data: '27 nov, 2018', textoCurto:'Alunas da Etec conquistam medalhas na ORMUB 2018(Etec).'
    },
    {
      imagem: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2018/11/EtecPortasAbertas.jpg', Texto: 'Em mais uma edição do evento Etec de Portas Abertas, realizado segunda-feira, 29 de outubro, tivemos a oportunidade de novamente proporcionar à comunidade e estudantes da região uma visão sobre nossos cursos, instalações e projetos pedagógicos.Os visitantes puderam conhecer nossa infraestrutura, participar de apresentações, minicursos e palestras abordando temas de interesse profissional, em um importante momento de troca de experiências, principalmente para os alunos interessados em ingressar em nossos cursos, os quais puderam interagir com professores e alunos dos cursos técnicos e ensino médio.Dentre as atividades realizadas, figuraram: Apresentações sobre os cursos de Administração, Logística, Desenvolvimento de Sistemas, Ensino Médio e Ensino Médio Integrado. Mini palestra: “Prepare-se para uma seleção de emprego”, com Amanda Zanetti. Mini palestra: “Conflitos no ambiente de trabalho: Ter razão? Eis a questão”, com Amanda Bragion. Mini cursos: Photoshop e Excel. Também foi feita a divulgação do Vestibulinho, cujas inscrições já estão abertas e vão até às 15h do dia 12 de novembro. O exame será realizado às 13:30h do dia 16 de dezembro.', Titulo: 'Etec de Portas Abertas para a comunidade', Data: '06 nov, 2018', textoCurto:'Etec de Portas Abertas para a comunidade(Etec).'
    },
    {
      imagem: 'http://www.etecanhanguera.com.br/wp-content/uploads/2016/12/Microsoft-Imagine.jpg', Texto: 'É uma WebStore onde, os alunos e professores poderão realizar o download dos produtos Microsoft gratuitamente. Para obter este benefício, alunos ou professores deverão ter seu e-mail institucional e vínculo ativo com a Etec ou Fatec, ou seja, somente será permitido o download para os alunos durante o período em que estiver cursando uma Etec, Fatec ou professor em exercício. O Microsoft Imagine dirige-se a instituições de ensino secundário, profissional e superior que pretendam oferecer aos seus alunos o acesso gratuito a tecnologias Microsoft. É um acordo especial entre o Centro Paula Souza e a Microsoft que inclui as mais recentes ferramentas de desenvolvimento, plataformas e servidores da Microsoft.', Titulo: 'Microsoft Imagine – Parceria Microsoft e Centro Paula Souza', Data: '24 abr, 2018', textoCurto:'Microsoft Imagine – Parceria Microsoft e Centro Paula Souza(Etec).'
    },
    {
      imagem: 'http://i1.wp.com/eteab.com.br/cms/wp-content/uploads/2017/03/ms_imagine.jpg?resize=638%2C300', Texto: 'Caros alunos e professores, Referente à parceria Microsoft – Centro Paula Souza, gostaríamos de apresentar as seguintes notas de atualização: Loja de Softwares (softwares gratuitos para alunos e professores) No começo desse ano, a Microsoft implementou alterações na sua loja de Softwares, o que tem gerado algumas dúvidas no acesso. Esclarecemos que seus benefícios de software gratuitos estão disponíveis no portal Azure Dev Tools for Teaching, no endereço https://azureforeducation.microsoft.com/devtools Leia o documento 2019 Instruções – Azure Dev Tools for Teaching para saber como acessar o portal e os softwares disponíveis para o seu perfil. E-mail institucional (alunos e professores) Nenhuma alteração foi realizada nos acessos referentes aos e-mails já existentes. Sobre a criação de e-mails novos, informamos que esse processo está ocorrendo automaticamente tanto para alunos (quando realiza a matrícula no curso) quanto para professores (quando são contratados pela instituição de ensino)..', Titulo: 'Parceria Microsoft – Centro Paula Souza (Nota de Atualização)', Data: '22 maio, 2019', textoCurto:'Parceria Microsoft – Centro Paula Souza - Nota de Atualização(Etec).'
    },

    {
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHwZqFcswga-LJf9LSpclLMlXBFOvQOhABHuradeWJB9B1_KL', Texto: 'Confira as normas e  regulamentos para a elaboração do Trabalho de Conclusão de Curso. Regulamento Geral  do TCC Manual do TCC Portaria 354 – 25.02.2015 Estes e outros documentos também estão disponíveis em nosso servidor local, em Mural.', Titulo: 'Dúvidas na elaboração do seu TCC?', Data: '16 maio, 2019', textoCurto:'Dúvidas na elaboração do seu TCC?(Etec).'
    },

    {
      imagem: 'http://www.etecbarrabonita.com.br/wp-content/uploads/2019/05/Maiara-Menezes-Lopes-189x300.jpg', Texto: 'Meu nome é Maiara Menezes Lopes, tenho 27 anos, me formei no ano de 2008 no Curso de Técnico em Secretariado na ETEC Comendador João Rays de Barra Bonita, onde também fiz o curso de Técnico em Administração. O curso em Técnico em Secretariado me proporcionou algumas oportunidades de trabalho na área e fora dela, pois é um curso que abrange várias áreas administrativas, o que facilita o ingresso ao mercado de trabalho. Os professores que lecionam no curso são excelentes e, além do conhecimento técnico, também tive um grande crescimento pessoal. Atualmente, trabalho em uma empresa de grande porte da cidade de Jaú e, embora já tenha me graduado em Administração de Empresa e atualmente esteja cursando especialização em Gestão de Saúde, pretendo continuar na área Secretarial. Agradeço a todos da ETEC e professores pelo aprendizado e incentivo nas minhas escolhas..', Titulo: 'Minha história na Etec: Maiara Menezes Lopes (Secretariado)', Data: '15 maio, 2019', textoCurto:'Minha história na Etec: Maiara Menezes Lopes - Secretariado (Etec).'
    },

 ];

  constructor(private rota: Router, public enviaDados: PassandoDadosService) { }

  public enviarDados(noticia) {
    this.enviaDados.setDados('noticia', noticia);
    this.rota.navigate(['/noticia01']);
  }

  ngOnInit() {
  }

}
