"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import FormsList from "./FormsList";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Space, Input as InputD, message } from "antd";
import { Button as ButtonAntd } from "antd";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { createForm } from "@/services/forms";
import { useSearchParams } from "next/navigation";

const FormsPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(UserContext);

    const searchParams = useSearchParams();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    const [messageApi, contextHolder] = message.useMessage();

    const reset = () => {
        setOpenModal(false);
        setTitle("");
        setDate("");
    }


    const handleSubmit = async (values: any) => {
        const res = await createForm(title, values.questions, date);

        if (!res.status) {
            messageApi.error("Une erreur est survenue lors de la création du formulaire");
            reset()
            return;
        }

        reset();
        messageApi.success("Le formulaire a bien été créé");
        return;
    }

    const [activeTitle, setActiveTitle] = useState("");

    return (
        <div className="w-full h-full bg-background">
            {contextHolder}
            <div className={`px-8 ${openModal ? "blur-sm " : ""}`}>
                <div className="flex flex-col-reverse md:flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Mes formulaires</h1>
                    <Button
                        type="button"
                        className={`${user.user.student ? "hidden" : ""} bg-purple`}
                        onClick={() => setOpenModal(true)}
                    >
                        Ajouter un formulaire
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex flex-col md:flex-row gap-2 md:flex">
                        <Input
                            type="text"
                            placeholder="Titre : ..."
                            className="mr-8"
                            value={activeTitle}
                            setValue={setActiveTitle}
                        ></Input>
                        <Input
                            type="date"
                            placeholder="Date : ..."
                            className="mr-8"
                        ></Input>
                    </div>
                    <div className="hidden sm:flex">
                        <RefreshButton />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 w-full">
                    <FormsList
                        activeUser={searchParams.get('user') ? searchParams.get('user') : undefined}
                        activeTitle={activeTitle}
                    />
                </div>
            </div>
            {openModal && (
                <Modal
                    className="w-[700px]"
                    buttonText="Ajouter l'étudiant"
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                >
                    <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6 ">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Créer un formulaire
                        </h2>
                        <Form
                            name="dynamic_form_nest_item"
                            autoComplete="off"
                            layout="vertical"
                            onFinish={handleSubmit}
                        >
                            <Form.List name="questions">
                                {(fields, { add, remove }) => (
                                    <>
                                        <Input
                                            value={title}
                                            setValue={setTitle}
                                            className="w-full"
                                            type="text"
                                            placeholder="Titre ..."
                                        />

                                        <Input
                                            value={date}
                                            setValue={setDate}
                                            className="w-full"
                                            type="date"
                                            placeholder="Date ..."
                                        />

                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space key={key} style={{ display: 'flex', width: '100%' }} align="baseline">
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'last']}
                                                    style={{ width: '100%' }}
                                                >
                                                    <InputD className="w-[40.7rem]" type="text" placeholder={`Question n°${key + 1}`} />
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item>
                                            <ButtonAntd type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Ajouter une question
                                            </ButtonAntd>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            <Form.Item>
                                <Button type="submit" className="bg-slate-700 w-10/12" >
                                    Ajouter un suivi
                                </Button>
                            </Form.Item>
                        </Form>
                    </div >
                </Modal>)}
        </div>
    );
};

export default FormsPage;