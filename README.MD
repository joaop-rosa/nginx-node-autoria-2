### Nginx com Node e express

O projeto utiliza `Docker`para subir um container com `Node` e um com `NGINX` e assim poder fornecer um curriculo em `http://www.teste-faccat.com/curriculo`

##### Como rodar o projeto:

- Ter o `Docker` instalado e rodando no sistema

- Adicionar nos hosts do sistema: `127.0.0.1  www.teste-faccat.com`

- Após isso rodar: `docker-compose up --build`
