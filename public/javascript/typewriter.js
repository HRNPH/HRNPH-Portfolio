var i = 0;
        var txt = '<Hirunkul Phimsiri/>'; /* The text */
        var speed = 100; /* The speed/duration of the effect in milliseconds */
        
        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("writename").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
          }
        }
        // call all onload function
        window.addEventListener('load', (event) => {
          typeWriter();
        });