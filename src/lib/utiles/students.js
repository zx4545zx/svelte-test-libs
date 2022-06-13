import Students from "../../database/students.json"

export const saveStd = (name, gender) => {
  let id = parseInt(Students[Students.length - 1].ID) + 1;
  let std = {
    Accessory: "",
    BreastSize: "",
    Class: "",
    Club: "",
    Color: "",
    Crush: "",
    Gender: `${gender}`,
    Hairstyle: "",
    ID: `${id}`,
    Name: `${name}`,
    Persona: "",
    ScheduleAction: "",
    ScheduleDestination: "",
    ScheduleTime: "",
    Stockings: "",
    Strength: ""
  };

  Students.push(std);

  return Students;
}

export const findStd = (id) => {
  let std = Students.find((value) => value.ID == id);

  return std
}