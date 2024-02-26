## Docker 🐳🚀

**Por que os containers são mais leves?**

Os containers são mais leves porque funcionam como processos no host, sem a necessidade de instalar um sistema operacional separado. Isso os torna mais eficientes em termos de recursos.

**Como garantem o isolamento?**

Os containers garantem o isolamento usando namespaces, que fornecem ambientes separados para processos, redes, sistemas de arquivos, etc.

**Como funcionam sem "instalar um SO"?**

Os containers compartilham o kernel do sistema operacional hospedeiro, o que significa que não precisam instalar um sistema operacional completo para cada instância, tornando-os mais rápidos e eficientes.

**Como fica a divisão de recursos do sistema?**

A divisão de recursos do sistema nos containers é gerenciada através de cgroups, que controlam e limitam os recursos que cada container pode usar.

**Perguntas e respostas:**

1. **Conflitos e versionamento**

   Se precisarmos lidar com conflito de portas ou controle de versionamento em uma das aplicações que estivermos desenvolvendo, de que forma poderemos resolver estes problemas?

   - [x] Podemos utilizar máquinas virtuais a fim de garantir o isolamento entre as aplicações.
     Máquinas virtuais são capazes de isolar sistemas, com isso, o controle sobre a aplicação fica mais fácil.

   - [x] Podemos utilizar containers com o objetivo de isolar as aplicações.
     Containers podem isolar diversas aplicações, facilitando o controle acerca de portas e versões.

2. **Containers por baixo dos panos**

   Recentemente aprendemos como os containers agem para garantir isolamento entre eles e o host, a fim de manter os comportamentos independentes entre cada um dos sistemas e aplicações.

   Por qual meio os containers conseguem atingir tal objetivo?
   - [x] Através de namespaces.

**Recapitulando:**

- Máquinas virtuais possuem camadas adicionais de virtualização em relação a um container.
- Containers funcionam como processos no host.
- Containers atingem isolamento através de namespaces.
- Os recursos dos containers são gerenciados através de cgroups.

O **Docker** é uma plataforma que implementa virtualização de software e utiliza a tecnologia de contêineres para facilitar a implantação e execução de aplicações. Os contêineres são unidades leves e portáteis que incluem tudo o necessário para executar um software. Eles oferecem benefícios como isolamento de contextos e versionamento de aplicações.

**Isolamento de Contextos**

Cada contêiner possui seu próprio sistema de arquivos, processo, espaço de rede e recursos, garantindo alta independência e isolamento.

**Versionamento de Aplicações**

No Docker, as aplicações são encapsuladas em imagens imutáveis e autossuficientes, permitindo versionamento eficiente e reutilização de partes comuns entre diferentes aplicações através de Dockerfiles.

O Docker proporciona uma abordagem eficiente para o desenvolvimento, empacotamento e execução de aplicações, trazendo benefícios como isolamento de contextos, consistência entre ambientes e versionamento controlado. Essas características tornam o Docker uma ferramenta poderosa para equipes de desenvolvimento e operações que buscam eficiência e confiabilidade em todo o ciclo de vida de uma aplicação. 🐳🚀

/Maquina Virtual: 
![maquinaVirtual](https://github.com/mewmewdevart/Courses/assets/50052600/7a16d08c-f08e-4797-98b4-a0721ab5f1c1)

/Container:
![container](https://github.com/mewmewdevart/Courses/assets/50052600/cbe905cf-1eb3-43ce-9ae8-25d709e29586)
