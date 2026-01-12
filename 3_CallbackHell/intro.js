const getData = (username, onSuccess, onFailure) => {
  console.log("User Data fetching");
  setTimeout(() => {
    if (username === "ABC") {
      onSuccess({
        name: "abc",
        id: "21121",
        age: 21,
      });
    } else {
      onFailure("oops");
    }
  }, 2000);
};

const getPost = (userId, onSuccess, onFailure) => {
  console.log("User Posts fetching");
  setTimeout(() => {
    if (userId) {
      onSuccess({
        caption: "Travel to London",
        id: "21121",
      });
    } else {
      onFailure("oops");
    }
  }, 2000);
};
const getComment = (postId, onSuccess, onFailure) => {
  console.log("Post Comments fetching");
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Good Luck",
        id: "3232",
      });
    } else {
      onFailure("oops");
    }
  }, 2000);
};

getData(
  "ABC",
  (user) => {
    console.log(user);
    getPost(
      user.id,
      (post) => {
        console.log(post);
        getComment(
          post.id,
          (comment) => {
            console.log(comment);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);
