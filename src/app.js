import "./style/index.scss";
import { getPerson, getPersonalEducation } from "./person";

const getEducationInfo = (education) => {
  // TODO feedback: class命名用-
  return `<li class="educationInfo">
        <div class="year">
          <p>${education.year}</p>
        </div>
        <div class="contents">
          <h3>${education.title}</h3>
          <p>${education.description}</p>
        </div>
      </li>`;
};

getPerson(1).then((data) => {
  $("#photo").attr("src", data.avatar);
  $("#introduction").html(
    `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`
  );
  $("#aboutMe").html(data.description);
});

getPersonalEducation(1).then((data) => {
  data.forEach((education) => {
    // $("#education").append(`<li class="year">${education.year}</li>`);
    // $("#education").append(`<li class="title">${education.title}</li>`);
    // $("#education").append(`<li class="description">${education.description}</li>`);
    // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
    $("#education").append(getEducationInfo(education));
  });
});
