import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { ProjectContext } from "../../context/ProjectContext";

const MyForm= ({initialValues, submitHandler, submitButton})=> {
 const { validateForm } = useContext(ProjectContext);

    return (
        <Col lg={8}>
            <Formik
            onSubmit={submitHandler}
            validate={validateForm}
            initialValues={initialValues}
            >
                {({ errors, isValid, touched }) => (
                <Form>
                    <div className="mb-3 d-flex flex-column">
                        <label className="text-start mb-1 fs-5">Project name</label>
                        <Field name="name" id="name"/>
                        {errors.name && touched.name ? (
                            <span>{errors.name}</span>
                        ) : null} 
                    </div>

                    <div className="mb-3 d-flex flex-column">
                        <label className="text-start mb-1 fs-5">Description</label>
                        <Field name="description" id="description"/>
                        {errors.description && touched.description ? (
                            <span>{errors.description}</span>
                        ) : null}
                    </div>
                    
                    <div className="mb-3 d-flex flex-column">
                        <label className="text-start mb-1 fs-5">Project manager</label>
                        <Field
                        as="select"
                        id="projectManager"
                        name="projectManager"
                        className="input"
                        >
                            <option defaultValue>Select</option>
                            <option value={'Walt Cosani'}>Walt Cosani</option>
                            <option value={'Esto es'}>Esto es</option>
                            <option value={'Olga Amado'}>Olga Amado</option>
                        </Field>
                        {errors.projectManager && touched.projectManager ? (
                            <span>{errors.projectManager}</span>
                        ) : null}
                    </div>
                    
                    <div className="mb-3 d-flex flex-column">
                        <label className="text-start mb-1 fs-5">Assigned to</label>
                        <Field
                        as="select"
                        id="assignedTo"
                        name="assignedTo"
                        className="input"
                        >
                            <option defaultValue>Select</option>
                            <option value={'Ignacio'}>Ignacio</option>
                            <option value={'Mariam'}>Mariam</option>
                        </Field>
                        {errors.assignedTo && touched.assignedTo ? (
                            <span>{errors.assignedTo}</span>
                        ) : null}
                    </div>
                    
                    <div className="mb-3 d-flex flex-column">
                        <label className="mb-1 fs-5">Status</label>
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
        </Col>
    )
}

export default MyForm;