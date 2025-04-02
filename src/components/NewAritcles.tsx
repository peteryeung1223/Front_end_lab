import React from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;
const NewArticle = () => {
    const handleFormSubmit = (values: any) =>{
        const title = values.title;
        const context = values.context;
        console.log(values, title, context);
        }
    return (
        <Form name="article" onFinish={(values)=>handleFormSubmit(values)}>
        <Form.Item name="title" label="Title">
            <Input />
        </Form.Item>
        <Form.Item name="context" label="Context">
            <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    );
};
const contentRules = [
    {required: true, message: 'Please input a context' }
   ];
   

export default NewArticle;
