import './Home.css';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  age: string,
  city: string,
  state: string,
};

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
      <div className="body">
        <span>About you</span>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              age: <input type="number" min="0" {...register("age", { required: true })} />
            </div>
            <div>
              state: <input {...register("state", { required: true })} />
            </div>
            <div>
              city: <input {...register("city", { required: true })}/>
            </div>

            {(errors.age || errors.state || errors.city) && <span>This field is required</span>}

            <input type="submit"/>
        </form>
      </div>
  );
};

export default Home;
