document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("introForm");
    const resultDiv = document.getElementById("result");
    const resetLink = document.getElementById("resetLink");
    const coursesContainer = document.getElementById("coursesContainer");
    const addCourseBtn = document.getElementById("addCourse");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
      }
      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        mascot: formData.get("mascot"),
        imageCaption: formData.get("imageCaption"),
        personalBackground: formData.get("personalBackground"),
        professionalBackground: formData.get("professionalBackground"),
        academicBackground: formData.get("academicBackground"),
        webDevBackground: formData.get("webDevBackground"),
        primaryPlatform: formData.get("primaryPlatform"),
        courses: formData.getAll("course[]"),
        funnyThing: formData.get("funnyThing"),
        anythingElse: formData.get("anythingElse")
      };
  
      let outputHTML = `<h2>Your Introduction Page</h2>`;
      outputHTML += `<ul>`;
      outputHTML += `<li><strong>Name:</strong> ${data.name}</li>`;
      outputHTML += `<li><strong>Mascot:</strong> ${data.mascot}</li>`;
      outputHTML += `<li><strong>Image Caption:</strong> ${data.imageCaption}</li>`;
      outputHTML += `<li><strong>Personal Background:</strong> ${data.personalBackground}</li>`;
      outputHTML += `<li><strong>Professional Background:</strong> ${data.professionalBackground}</li>`;
      outputHTML += `<li><strong>Academic Background:</strong> ${data.academicBackground}</li>`;
      outputHTML += `<li><strong>Background in Web Development:</strong> ${data.webDevBackground}</li>`;
      outputHTML += `<li><strong>Primary Computer Platform:</strong> ${data.primaryPlatform}</li>`;
      outputHTML += `<li><strong>Courses Currently Taking:</strong> <ul>`;
      data.courses.forEach((course) => {
        outputHTML += `<li>${course}</li>`;
      });
      outputHTML += `</ul></li>`;
      outputHTML += `<li><strong>Funny/Interesting Item:</strong> ${data.funnyThing}</li>`;
      outputHTML += `<li><strong>Anything Else:</strong> ${data.anythingElse}</li>`;
      outputHTML += `</ul>`;
      outputHTML += `<p><a href="#" id="resetFormLink">Reset and Start Over</a></p>`;
  
      resultDiv.innerHTML = outputHTML;
      form.style.display = "none";

        function resetForm() {
        form.reset();
        form.style.display = "block";
        resultDiv.innerHTML = "";
      }

      document.getElementById("resetFormLink").addEventListener("click", function(e) {
        e.preventDefault();
        resetForm();
      });
    });
  
    addCourseBtn.addEventListener("click", function() {
      const div = document.createElement("div");
      div.className = "course-field";
      div.innerHTML = `<input type="text" name="course[]" placeholder="Course name - Reason" required>
                       <button type="button" class="deleteCourse" onclick="deleteCourse(this)">Delete</button>`;
      coursesContainer.appendChild(div);
    });
  
    window.deleteCourse = function(button) {
      const field = button.parentElement;
      coursesContainer.removeChild(field);
    };
  
  
    resetLink.addEventListener("click", function(e) {
      e.preventDefault();
      resetForm();
    });
  });
  