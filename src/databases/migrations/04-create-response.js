
export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('response',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        context:{
            type:Sequelize.TEXT,
        },
        images:{
            type:Sequelize.STRING,
        },
        bestanswer:{
            type:Sequelize.BOOLEAN,
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        articles_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
        user_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('response');
}