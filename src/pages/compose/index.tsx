import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Compose = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-center mt-4">
        <Formik
          initialValues={{ to: '', from: '', content: '' }}
          validationSchema={Yup.object().shape({
            to: Yup.string()
              .email('Invalid email address')
              .required('To field is required!'),
            from: Yup.string().email('Invalid email address'),
            content: Yup.string()
              .max(1250)
              .required('Content field is required!'),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {({
            initialValues,
            isSubmitting,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
          }) => {
            const hasChanged = values !== initialValues;
            const hasErrors = Object.keys(errors).length > 0;
            const submitIsDisabled = !hasChanged || hasErrors || isSubmitting;
            const exceededCharacterCount = values.content.length > 1250;

            return (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-3/5 max-w-2xl space-y-4"
              >
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.from}
                    name="from"
                    placeholder="From"
                    className="border-gray-300 border-2 rounded-sm h-10 p-3 w-full"
                  />
                  <div className="text-xs text-gray-500">
                    Just as a regular mail, you may leave the sender field empty
                    if you wish to remain anonymous
                  </div>
                  {touched.from && errors.from && (
                    <div className="text-sm text-red-700">{errors.from}</div>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.to}
                    name="to"
                    placeholder="To*"
                    className="border-gray-300 border-2 rounded-sm h-10 p-3 w-full"
                  />
                  {errors.to && (
                    <div className="text-sm text-red-700">{errors.to}</div>
                  )}
                </div>

                <div>
                  <textarea
                    name="content"
                    cols={30}
                    rows={15}
                    placeholder="Content*"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border-gray-300 border-2 rounded-sm p-3 w-full"
                  />
                  <div className="flex justify-between">
                    <div>
                      {touched.content && errors.content && (
                        <div className="text-sm text-red-700">
                          {errors.content}
                        </div>
                      )}
                    </div>
                    <div
                      className={`${
                        exceededCharacterCount && 'text-red-700'
                      } text-sm`}
                    >
                      {values.content.length} / 1250
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitIsDisabled}
                    className={`${
                      submitIsDisabled
                        ? 'bg-gray-100 text-gray-300'
                        : 'bg-gray-200 text-gray-800'
                    } h-10 mb-6 rounded-sm w-full transition-all`}
                  >
                    Send
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Compose;
