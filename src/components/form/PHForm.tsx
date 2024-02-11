import { useForm } from "react-hook-form";

const PHForm = ({ children, onSubmit }) => {
  const { handleSubmit } = useForm();

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default PHForm;
