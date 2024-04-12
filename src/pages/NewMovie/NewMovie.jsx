import { useNavigate } from "react-router-dom";
import { postMovie } from "../../api/api";

import Form from "../../components/Form/Form";

const NewMovie = () => {
  const navigate = useNavigate();

  const template = {
    title: "",
    description: "",
    rating: 0,
    release_date: "",
    genre: [],
    actors: [],
    director: "",
    image: "",
  };

  const uploadMovie = async (data) => {
    const newFilm = { ...template, ...data };

    try {
      await postMovie(newFilm);
      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form initialData={template} editFn={uploadMovie} />
    </div>
  );
};

export default NewMovie;
