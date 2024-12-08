<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Pessoal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#" onclick="alterarFundo('sobre')">Sobre mim</a></li>
                <li><a href="#" onclick="alterarFundo('formacao')">Formação</a></li>
                <li><a href="#" onclick="alterarFundo('portfolio')">Portfólio</a></li>
                <li><a href="#" onclick="alterarFundo('contato')">Contato</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h1>Bem-vindo ao meu portfólio!</h1>
            <p>Use o menu para navegar entre as páginas e alterar o fundo.</p>
        </section>
    </main>

    <script>
        function alterarFundo(cor) {
            switch(cor) {
                case 'sobre':
                    document.body.style.backgroundColor = '#d9eaf7'; // Cor para "Sobre mim"
                    break;
                case 'formacao':
                    document.body.style.backgroundColor = '#f7e3d9'; // Cor para "Formação"
                    break;
                case 'portfolio':
                    document.body.style.backgroundColor = '#eaf7d9'; // Cor para "Portfólio"
                    break;
                case 'contato':
                    document.body.style.backgroundColor = '#d9f7e3'; // Cor para "Contato"
                    break;
                default:
                    document.body.style.backgroundColor = '#ffffff'; // Cor padrão
            }
        }
    </script>
</body>
</html>
