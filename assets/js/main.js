(function () {
  new cookieNoticeJS({
    // Localizations of the notice message
    messageLocales: {
      en: "We use anonymous cookies on this website to monitor and improve upon site performance.<br/> By continuing to use our site you agree to this use. For more information, please review our",
    },

    // Localizations of the dismiss button text
    buttonLocales: {
      en: "I ACCEPT",
    },

    // Position for the cookie-notifier (default=bottom)
    cookieNoticePosition: "bottom",

    // Shows the "learn more button (default=false)
    learnMoreLinkEnabled: true,

    // The href of the learn more link must be applied if (learnMoreLinkEnabled=true)
    learnMoreLinkHref:
      "https://app.termly.io/policy-viewer/policy.html?policyUUID=33799b21-62d2-4d4c-94d8-2627fb48e5e3",

    // Text for optional learn more button
    learnMoreLinkText: {
      en: "Cookie policy",
    },

    // The message will be shown again in X days
    expiresIn: 30,

    // Dismiss button background color
    buttonBgColor: "#ffd053",

    // Dismiss button text color
    buttonTextColor: "#49424a",

    // Notice background color
    noticeBgColor: "#000000",

    // Notice text color
    noticeTextColor: "#f1cfb9",

    // the lernMoreLink color (default='#009fdd')
    linkColor: "#ffffff",
  });

  const note = document.querySelector("#cookieNotice");

  if (note) {
    note.style.fontFamily = "";
    note.style.lineHeight = "";
  }
})();

(function () {
  const dropdownBtn = document.querySelector(".menu-dropdown-btn");
  const dropdownCaret = document.querySelector(".hamburger");
  const dropdownContent = document.querySelector(".hamburger-dropdown-content");

    // add click event to dropdown button
    dropdownBtn.addEventListener("click", function () {
      // add rotate to caret element
      dropdownCaret.classList.toggle("active");
      // add open styles to menu element
      dropdownContent.classList.toggle("open");
  });
})();

(function () {
      var header = document.getElementById("myMenu");
      var items = header.getElementsByClassName(".item");
      for (var i = 0; i < items.length; i++) {
          items[i].addEventListener("click", function() {
              // Remove "active" class from the currently active item
              // var current = document.getElementsByClassName("active");
              // if (current.length > 0) {
              //     current[0].className = current[0].className.replace(" active", "");
              // }
              // // Add "active" class to the clicked item
              // this.className += " active";

              this.classList.toggle("active");
          });
      }

    // Add active class to the current button (highlight it)
    // var header = document.getElementById("myMenu"); // Get the parent container
    // if (header) {
    //     var items = header.getElementsByClassName(".item"); // Get all items with the class "item"
    //     console.log("Items found:", items); // Debugging: Check if items are being selected

    //     for (var i = 0; i < items.length; i++) {
    //         items[i].addEventListener("click", function () {
    //             console.log("Clicked item:", this); // Debugging: Log the clicked item

    //             // Remove "active" class from the currently active item
    //             var current = document.getElementsByClassName("active");
    //             if (current.length > 0) {
    //                 console.log("Removing active class from:", current[0]); // Debugging: Log the current active item
    //                 current[0].className = current[0].className.replace(" active", "");
    //             }

    //             // Add "active" class to the clicked item
    //             this.className += " active";
    //             console.log("Added active class to:", this); // Debugging: Log the item that received the active class
    //         });
    //     }
    // } else {
    //     console.error("Element with id 'myMenu' not found!"); // Debugging: Log if the parent container is missing
    // }
})();

(function () {
  const listCareerDrps = document.querySelector("#position");
  const listCareers = document.querySelectorAll(".careers-list > .item");
  const listCareerDetails = document.querySelectorAll(
    ".careers-list-detail-item"
  );

  // add click event to dropdown button
  listCareers.forEach(function (item, index) {
    item.addEventListener("click", function () {
      listCareers.forEach(function (item, index) {
        item.classList.remove("active");
      });
      item.classList.add("active");

      listCareerDetails.forEach(function (item, index) {
        item.classList.add("d-none");
      });
      listCareerDetails[index]?.classList.remove("d-none");

      if (listCareerDrps) {
        listCareerDrps.value = index;
      }
    });
  });

  if (listCareerDrps) {
    listCareerDrps.addEventListener("change", function () {
      let value = parseInt(listCareerDrps.value);

      listCareers.forEach(function (item, index) {
        item.classList.remove("active");
      });
      listCareers[value]?.classList.add("active");

      listCareerDetails.forEach(function (item, index) {
        item.classList.add("d-none");
      });
      listCareerDetails[value]?.classList.remove("d-none");
    });
  }
})();
