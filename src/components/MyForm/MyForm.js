import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ProjectContext } from "../../context/ProjectContext";

const MyForm= ({initialValues, submitHandler, submitButton})=> {
 const { validateForm } = useContext(ProjectContext);

    return (
        <>
        <Formik
        onSubmit={submitHandler}
        validate={validateForm}
        initialValues={initialValues}
        >
            {({ errors, isValid, touched }) => (
            <Form>
                <div className="mb-3 d-flex flex-column">
                    <label className="text-start">Project name</label>
                    <Field name="name" id="name"/>
                    {errors.name && touched.name ? (
                        <span>{errors.name}</span>
                    ) : null} 
                </div>

                <div className="mb-3 d-flex flex-column">
                    <label className="text-start">Description</label>
                    <Field name="description" id="description"/>
                    {errors.description && touched.description ? (
                        <span>{errors.description}</span>
                    ) : null}
                </div>
                
                <div className="mb-3 d-flex flex-column">
                    <label className="text-start">Project manager</label>
                    <Field
                    as="select"
                    id="projectManager"
                    name="projectManager"
                    className="input"
                    >
                        <option defaultValue>Select a person</option>
                        <option value={'Walt Cosani'}>Walt Cosani</option>
                        <option value={'John Travolta'}>John Travolta</option>
                        <option value={'Marie Taylor'}>Marie Taylor</option>
                    </Field>
                    {errors.projectManager && touched.projectManager ? (
                        <span>{errors.projectManager}</span>
                    ) : null}
                </div>
                
                <div className="mb-3 d-flex flex-column">
                    <label className="text-start">Assigned to</label>
                    <Field
                    as="select"
                    id="assignedTo"
                    name="assignedTo"
                    className="input"
                    >
                        <option defaultValue>Select a person</option>
                        <option value={'Ignacio'}>Ignacio</option>
                        <option value={'Mariam'}>Mariam</option>
                        <option value={'Olga'}>Olga</option>
                    </Field>
                    {errors.assignedTo && touched.assignedTo ? (
                        <span>{errors.assignedTo}</span>
                    ) : null}
                </div>
                
                <div className="mb-3 d-flex flex-column">
                    <label>Status</label>
                    <Field as="select" id="status" name="status">
                        <option defaultValue>Select status</option>
                        <option value={'Enabled'}>Enabled</option>
                        <option value={'Disabled'}>Disabled</option>
                    </Field>
                    {errors.status && touched.status ? (
                        <span>{errors.status}</span>
                    ) : null}
                </div>
                
                <Button type="submit" variant="danger" disabled={!isValid}>{submitButton}</Button>
            </Form>
            )}
            </Formik>
        </>
    )
}

export default MyForm;