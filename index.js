const newPhoto = "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg";

const changePhotos = () => {
  const profilePhotos = document.querySelectorAll(
    'img.evi-image.ember-view.profile-photo-edit__preview, img[class*="EntityPhoto-circle"], img[class*="EntityPhoto-square"], img[class*="feed-identity-module__member-photo"]'
  ); // Since photos are of different, I have used all the necessary selectors.

  profilePhotos.forEach((photo) => {
    if (photo.src !== newPhoto) {
      photo.src = newPhoto;
    }
  });
};

// Check if the DOM has already been changed
const DOMChanges = () => {
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList" || mutation.type === "subtree") {
        changePhotos();
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

changePhotos();

DOMChanges();
