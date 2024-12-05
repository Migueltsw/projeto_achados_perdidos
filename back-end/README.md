# Cronograma de atividades para o desenvolvimento do projeto. 
LINK PARA ACESSO AO ARQUIVO NO FIGMA: https://www.figma.com/board/74guj4LbkRApMeNuNgI8yB/cronograma-atividades?node-id=0-1&t=ZEPiE1gZOuqOuHhZ-1

# 1# Projeto de Baixa Finalidade
LINK PARA ACESSAR AO ARQUIVO NO FIGMA: https://www.figma.com/design/IPDO36WBRNqGHnQ0vMhfuC/Projeto-achados-e-perdidos?node-id=0-1&t=lbFEFMpWCFxZWXHY-1

### Rodar laravel

```shell
composer install
```

```shell
php artisan migrate
```

```shell
php artisan key:generate
```

```shell
php artisan storage:link
```

Agora configure o '.env'.

Rode o comando para definir um usuário administrador no banco:

```shell
php artisan db:seed
```

### Usuario adm:
```
E-mail: admin@gmail.com
Senha: senhateste
```