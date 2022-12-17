import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { sequelizeTS } from "../dbConnection";
import { Volee } from "./voleeModel";

// Old system without TypeScript
// import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
// const seanceModel = dbConnection.define(
//     "seance", {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         date: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },
//     }
// );

@Table
export class Seance extends Model {
    // Column "id" added automatically

    @Column
    date!: Date; // The ! postfix operator avoids a "property has no initializer" error

    @HasMany(() => Volee)
    volees!: Volee[];
}

sequelizeTS.addModels([Seance]);
