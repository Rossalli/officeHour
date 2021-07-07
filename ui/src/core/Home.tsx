import './Home.css';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  age: string,
  city: string,
  state: string,
};

const Home = () => {
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<Inputs>({mode: 'onChange'});
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
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
};

export default Home;
