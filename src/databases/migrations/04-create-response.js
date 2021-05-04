
export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('response',{
        user_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        context:{
            type:Sequelize.TEXT,
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        response_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        articles_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('response');
}