    //Paulo Henrique Author
    //github.com/paulohenriquesn
    ChangeImages = () => {
      const __Images__ = [
        "https://images2.minutemediacdn.com/image/upload/c_scale,w_912,h_516,c_fill,g_auto/shape/cover/sport/58d145c464a57e122c000022.jpeg",
        "https://conteudo.imguol.com.br/c/esporte/71/2018/07/26/ronaldinho-posa-com-traje-boliviano-durante-viagem-do-atletico-mg-a-la-paz-em-2013-1532630762014_615x300.jpg",
        "https://pbs.twimg.com/media/DZOr0CyWkAApm8K.jpg",
        "https://abrilcapricho.files.wordpress.com/2018/07/ronaldinho-gaucho-final-copa-do-mundo-russia.jpg?quality=85&strip=info&crop=262px%2C91px%2C494px%2C336px&resize=680%2C453",
        "https://images2.minutemediacdn.com/image/upload/c_scale,w_912,h_516,c_fill,g_auto/shape/cover/sport/58d1458a64a57e122c000007.jpeg",
        "http://cdn.istoe.com.br/wp-content/uploads/sites/14/2016/10/ronaldo-02-ie.jpg",
        "http://img.ibxk.com.br/ns/rexposta/2018/06/13/13132630996509.jpg?watermark=neaki&w=600",
        "https://images2.minutemediacdn.com/image/upload/c_scale,w_912,h_516,c_fill,g_auto/shape/cover/sport/58d145ec59c8d3a8ac000027.jpeg",
        "https://assets.naointendo.com.br/uploads/post/media/19838/open_graph_6fbadc8e-d54c-4845-8516-057f71d0ba31.jpg",
        "http://s.glbimg.com/es/ge/f/original/2013/04/12/ronaldinho_musica_div.jpg_95.jpg",
        "http://s2.glbimg.com/RsEbtuo9J1CqtfLLuFZIipc6sU8=/smart/s.glbimg.com/es/ge/f/original/2016/02/04/ronaldinho4.png",
        "https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.0-9/40103321_1084759111679278_1866955814657327104_n.jpg?_nc_cat=1&oh=783bac5ee46425d432bc629327488ff0&oe=5C01FE12"
      ];
      var rand = Math.floor(Math.random() * __Images__.length);
      var object = document.getElementsByTagName("img");
      setInterval(()=> {
        for (var x = 0; x < object.length;x++){
          var rand = Math.floor(Math.random() * __Images__.length);
          if(__Images__.indexOf(object[x].getAttribute('src')) == -1){
            object[x].setAttribute('src',__Images__[rand]);
          }
        }
      },1500); //1.5s
    }


    ChangeImages();
