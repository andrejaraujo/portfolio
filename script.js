var listaFilmes = [
  "https://br.web.img2.acsta.net/pictures/23/04/25/20/10/1515852.jpg",
  "https://cdn.awsli.com.br/600x700/1610/1610163/produto/177685239/poster-os-vingadores-ultimato-f-df623b8d.jpg",
  "https://img.elo7.com.br/product/zoom/26881BB/big-poster-piratas-do-caribe-no-fim-do-mundo-lo01-90x60-cm-piratas-do-caribe.jpg",
  "https://m.media-amazon.com/images/I/81ROA+8mJBL._AC_UF1000,1000_QL80_.jpg",
  "https://images.justwatch.com/poster/259259722/s718/no-limite-do-amanha.jpg",
];

var listaseries = [
  "https://wallpapers.com/images/featured/supernatural-ga3xedbyom96tsya.jpg",
  "https://m.media-amazon.com/images/I/81kL7SpTBjL._AC_UF1000,1000_QL80_.jpg",
  "https://fazendoanossafesta.com.br/wp-content/uploads/2022/09/Convite-Virtual-Stranger-Things-para-whatsapp.jpg",
  "https://www.nexogc.com.br/fotos/Arremesso-Final.JPG",
  "https://media.fstatic.com/hb_7tR07kUbR7mDdsuN4urCeU8s=/322x478/smart/filters:format(webp)/media/movies/covers/2022/09/Formula1-DrivetoSurvive_1.jpg",
];

var listaLivros = [
  "https://osmelhoreslivros.com.br/wp-content/uploads/2020/02/harry-potter-e-o-enigama-do-principe-209x300.jpg",
  "https://www.intrinseca.com.br/upload/livros/ladrao-de-raios_243x349.jpg",
  "https://3.bp.blogspot.com/-rxJEV39kMTI/UXhsCnDpuHI/AAAAAAAAAIA/dH-vfCN476E/s1600/A_NOITE_MALDITA__1362085242P.jpg",
  "https://praalstore.com/wp-content/uploads/2022/02/livros-o-poder-da-acao-paulo-vieira-1573701374771.jpg",
  "https://m.media-amazon.com/images/I/51lQ-GKwxrL.jpg",
];

var anime = [
  "https://m.media-amazon.com/images/I/81dwTCF6+XL._AC_UF894,1000_QL80_.jpg",
  "https://64.media.tumblr.com/870b15f3fd1c7c65a93b12e84822476b/tumblr_oxqce2V6qk1wcqvsdo1_540.png",
  "https://picfiles.alphacoders.com/399/thumb-399521.png",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/7eb2c75e3d6c3f74760caf35c422879b.jpe",
  "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10987334_b_v10_ab.jpg",
];

var nomeFilmes = [
  "guardiões da galaxia 3",
  "vingadores ultimato",
  "piratas do caribe",
  "juntos para sempre",
  "no limite do amanha",
];

var nomeSeries = [
  "supernatural",
  "friends",
  "stranger things",
  "arremesso final",
  "dirigir para viver",
];

var nomeLivros = [
  "harry potter",
  "percy jackson",
  "noite maldita",
  "o poder da ação",
  "o monge e o executivo",
];

var nomeAnimes = [
  "naruto",
  "death note",
  "attack ao titan ",
  "dragon ball",
  "haikyuu",
];

document.write('<div class="container_todosFilmes">');
var i = 0;
while (i < listaFilmes.length) {
  if (listaFilmes[i].endsWith("jpg") || listaFilmes[i].endsWith("jpeg")) {
    document.write('<div class="container_filme">');
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p>" + nomeFilmes[i] + "</p>");
    document.write("</div>");
  } else {
    document.write(
      `<p> A imagem ${i} não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>`
    );
  }
  i++;
}
document.write("</div>")


document.write("<h1>series</h1>");
document.write('<div class="container_todasSeries">');

function Series(conteudo, nome) {
  for (var i = 0; i < conteudo.length; i++) {
    if (
      conteudo[i].endsWith("jpg") ||
      conteudo[i].endsWith("jpeg") ||
      conteudo[i].endsWith("jpe") ||
      conteudo[i].endsWith("JPG") ||
      conteudo[i].endsWith("png")
    ) {
      document.write('<div class="container_livros">');
      document.write("<img src=" + conteudo[i] + ">");
      document.write("<p>" + nome[i] + "</p>");
      document.write("</div>");
    } else {
      document.write(
        `<p> A imagem ${i} não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>`
      );
    }
  }
  return "";
}
document.write(Series(listaseries, nomeSeries));
document.write("</div>")


document.write("<h1>livros</h1>");
document.write('<div class="container_todosLivros">');
function livros(conteudo, nome) {
  for (var i = 0; i < conteudo.length; i++) {
    if (
      conteudo[i].endsWith("jpg") ||
      conteudo[i].endsWith("jpeg") ||
      conteudo[i].endsWith("jpe") ||
      conteudo[i].endsWith("png")
    ) {
      document.write('<div class="container_livros">');
      document.write("<img src=" + conteudo[i] + ">");
      document.write("<p>" + nome[i] + "</p>"); 
      document.write("</div>");
    } else {
      document.write(
        `<p> A imagem ${i} não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>`
      );
    }
  }
  return ""
}
document.write(livros(listaLivros,nomeLivros));
document.write("</div>")


document.write("<h1>animes</h1>");
document.write('<div class="container_todosLivros">');
function animes(conteudo, nome) {
  for (var i = 0; i < conteudo.length; i++) {
    if (
      conteudo[i].endsWith("jpg") ||
      conteudo[i].endsWith("jpeg") ||
      conteudo[i].endsWith("jpe") ||
      conteudo[i].endsWith("png")
    ) {
      document.write('<div class="container_livros">');
      document.write("<img src=" + conteudo[i] + ">");
      document.write("<p>" + nome[i] + "</p>");
      document.write("</div>");
    } else {
      document.write(
        `<p> A imagem ${i} não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>`
      );
    }
  }
  return "";
}
document.write(animes(anime,nomeAnimes));
document.write("</div>")
