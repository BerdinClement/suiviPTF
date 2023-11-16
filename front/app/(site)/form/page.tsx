import QuestionForm from "@/components/QuestionForm";
import Button from "@/components/Button";

const FormPage = () => {
    return (
        <div className="">
            <QuestionForm />
            <Button type="submit" className="bg-slate-700 w-6/12 ">
                   Valider
            </Button>
        </div>
    );
}

export default FormPage;