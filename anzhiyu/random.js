var posts=["2024/12/21/hello-world/","2024/12/21/I-m-RedStoneShark/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };