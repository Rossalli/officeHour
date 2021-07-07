import { useState } from 'react';
import './Home.css';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  age: string,
  city: string,
  state: string,
};

const Home = () => {
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<Inputs>({mode: 'onChange'});
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
    setHasItens(true);
  };
  const [hasItens, setHasItens] = useState<boolean>(false);

  const List = () => (
    <>
      <span>Upcoming events</span>
      <div className="list">
        <div className="item">
          <span>date 1</span>
          <span>name 1</span>
          <span>place 1</span>
          <span>image 1</span>
        </div>
        <div className="item">
          <span>date 2</span>
          <span>name 2</span>
          <span>place 2</span>
          <span>image 2</span>
        </div>
        <div className="item">
          <span>date 3</span>
          <span>name 3</span>
          <span>place 3</span>
          <span>image 3</span>
        </div>
      </div>
    </>
  );

  const Form = () => (
    <div className="body">
      <span className="bodyText">About you</span>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="text">age:</span>
            <input 
              type="number" 
              min="0" 
              {...register("age", { required: true,  min: 1, max: 99 })} 
            />
          </div>
          <div>
            <span className="text">state:</span>
            <input {...register("state", { required: true, pattern: /^[A-Za-z]+$/i })} />
          </div>
          <div>
            <span className="text">city:</span>
            <input {...register("city", { required: true, pattern: /^[A-Za-z]+$/i })}/>
          </div>

          {errors.age && <span className="error">This age is not valid</span>}
          {(errors.state || errors.city) && (
            <span className="error">The city or state field is not properly filled.</span>
          )}

          <input type="submit" disabled={!isValid}  className="submit"/>
      </form>
    </div>
  );

  return (
      <>
        {hasItens ? List() : Form()}
      </>
  );
};

export default Home;
