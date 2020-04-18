const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
  { title: "post three", body: "this is post three" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
      console.log(output);
    }),
      (document.body.innerHTML = output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // return resolve(post);
      const error = false;
      if (!error) {
        return resolve(post);
      } else {
        reject("something went wrong");
      }
    }, 1000);
  });
}

// async function init() {
//   await createPost({ title: "post 4", body: "four post" });
//   getPosts();
// }
// init();

createPost({ title: "post 5", body: "five post" })
  .then(getPosts)
  .catch(err => console.log(err));
