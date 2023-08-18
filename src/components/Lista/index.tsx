import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./item";
import { ITarefa } from "../../Types/tarefa";

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefa}>
            <h2> Estudos do dia </h2>
            <ul>
              {tarefas.map((item) => (
                <Item 
                  selecionaTarefa={selecionaTarefa}
                  key={item.id}
                  {...item}
                />
              ))}
            </ul>
        </aside>
    )
}

export default Lista;