const newPhoto = "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg";

const changePhotos = () => {
  const profilePhotos = document.querySelectorAll(
    'img.evi-image.ember-view.profile-photo-edit__preview, img[class*="EntityPhoto-circle"], img[class*="EntityPhoto-square"], img[class*="feed-identity-module__member-photo"]'
  ); // Since photos are of different sizes, I have used common selectors like EntityPhoto-circle and EntityPhoto-square. This will target all the photos within these specific classes.

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
