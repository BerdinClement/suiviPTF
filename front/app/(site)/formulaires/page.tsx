"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import RefreshButton from "@/components/RefreshButton";
import FormsList from "./FormsList";
import Modal from "@/components/Modal";
import React, { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Space } from "antd";
import { Button as ButtonAntd } from "antd";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

const FormsPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(UserContext);

    const [title, setTitle] = useState("");

    const handleSubmit = async (values: any) => {
        console.log(values);
    }

    return (
        <div className="w-full h-full bg-background">
            <div className={`px-8 ${openModal ? 'blur-sm ' : ''}`}>
                <div className="flex flex-col-reverse md:flex-row justify-between py-4">
                    <h1 className="underline text-2xl">Mes formulaires</h1>
                    <Button type="button" className={`${user.user.student ? "hidden" : ""} bg-purple`} onClick={() => setOpenModal(true)}>
                        Ajouter un formulaire
                    </Button>
                </div>
                <div className="flex flex-row justify-between pb-8">
                    <div className="flex">
                        <Input type="text" placeholder="Titre : ..." className="mr-8"></Input>
                        <Input type="date" placeholder="Date : ..." className="mr-8"></Input>
                    </div>
                    <div className="flex">
                        <RefreshButton />
                    </div>
                </div>
                {/* TODO : boucler sur tout les formulaires existants*/}
                <div className="flex flex-wrap gap-4 w-full">
                    <FormsList />
                </div>
            </div>
            {openModal && <Modal className="w-[700px]" buttonText="Ajouter l'étudiant" open={openModal} onClose={() => setOpenModal(false)}>
                <div className="bg-background w-full max-w-[700px] bg-white rounded-lg shadow-md p-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Créer un formulaire</h2>
                    <Form
                        name="dynamic_form_nest_item"
                        autoComplete="off"
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    <Input value={title} setValue={setTitle} className="w-full" type="text" placeholder="Titre ..." />

                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', width: '100%' }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'last']}
                                                style={{ width: '100%' }}
                                            >
                                                <Input className="w-[40.7rem]" type="text" placeholder={`Question n°${key + 1}`} />
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
            </Modal>}
        </div>
    );
};

export default FormsPage;
