import PropTypes from "prop-types";
import { useState } from "react";
import { FormWrap, Label, Input, Textarea, Button } from "./Form.styled";

const genres = [
  "drama",
  "crime",
  "action",
  "thriller",
  "historical",
  "war",
  "adventure",
  "fantasy",
  "romance",
  "sci-fi",
  "biography",
  "history",
];

const Form = ({ initialData, editFn }) => {
  const [formData, setFormData] = useState(initialData);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    if (name === "actors") {
      const actors = value.split(", ");
      setFormData({ ...formData, [name]: actors });
      return;
    }

    if (name === "genre") {
      const index = formData.genre.indexOf(value);
      const array = [...formData.genre];
      if (index !== -1) {
        array.splice(index, 1);
      } else {
        array.push(value);
      }
      setFormData({ ...formData, [name]: array });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    editFn(formData);
  };

  return (
    <FormWrap id="editForm" onSubmit={handleFormSubmit}>
      <Label htmlFor="title">Title:</Label>
      <Input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleFormChange}
      />

      <Label htmlFor="director">Director:</Label>
      <Input
        type="text"
        id="director"
        name="director"
        value={formData.director}
        onChange={handleFormChange}
      />

      <Label htmlFor="actors">Actors:</Label>
      <Input
        type="text"
        id="actors"
        name="actors"
        value={formData.actors.join(", ")}
        onChange={handleFormChange}
      />

      <Label htmlFor="genre">Genre:</Label>
      <ul id="genreList">
        {genres.map((genre) => {
          return (
            <li key={genre}>
              <Label htmlFor={genre}>
                <Input
                  type="checkbox"
                  id={genre}
                  name="genre"
                  value={genre}
                  checked={formData.genre.includes(genre)}
                  onChange={handleFormChange}
                />
                {genre}
              </Label>
            </li>
          );
        })}
      </ul>

      <Label htmlFor="rating">Rating:</Label>
      <Input
        type="number"
        id="rating"
        name="rating"
        step="0.1"
        value={formData.rating}
        onChange={handleFormChange}
        min={0}
        max={10}
      />

      <Label htmlFor="description">Description:</Label>
      <Textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleFormChange}
        rows="5"
      />

      <Label htmlFor="image">Image URL:</Label>
      <Input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleFormChange}
      />

      <Label htmlFor="release">Release date:</Label>
      <Input
        type="date"
        id="release"
        name="release_date"
        value={formData.release_date}
        onChange={handleFormChange}
      />

      <Button type="submit">Submit</Button>
    </FormWrap>
  );
};

export default Form;

Form.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.string).isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  editFn: PropTypes.func.isRequired,
};
