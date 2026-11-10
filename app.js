    const videoInput = document.getElementById('videoInput');
    const bgVideo = document.getElementById('bgVideo');

    let db;
    const request = indexedDB.open("VideoBgDB", 1);

    request.onupgradeneeded = function (e) {
      db = e.target.result;
      if (!db.objectStoreNames.contains("videos")) {
        db.createObjectStore("videos");
      }
    };

    request.onsuccess = function (e) {
      db = e.target.result;
      loadSavedVideo();
    };

    request.onerror = function (e) {
      console.error("IndexedDB error:", e.target.error);
    };

    videoInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
        playVideoFile(file);
        saveVideoToDB(file);
      }
    });

    function playVideoFile(fileBlob) {
      const fileURL = URL.createObjectURL(fileBlob);
      bgVideo.src = fileURL;
      bgVideo.muted = true;
      bgVideo.loop = true;
      bgVideo.play().catch(err => {
        console.log("Autoplay blocked. User interaction might be required.", err);
      });
    }

    function saveVideoToDB(fileBlob) {
      if (!db) return;
      const transaction = db.transaction(["videos"], "readwrite");
      const store = transaction.objectStore("videos");
      store.put(fileBlob, "userBackgroundVideo");
    }

    function loadSavedVideo() {
      if (!db) return;
      const transaction = db.transaction(["videos"], "readonly");
      const store = transaction.objectStore("videos");
      const getRequest = store.get("userBackgroundVideo");

      getRequest.onsuccess = function () {
        if (getRequest.result) {
          playVideoFile(getRequest.result);
        }
      };
    }