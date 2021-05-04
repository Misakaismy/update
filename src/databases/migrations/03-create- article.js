export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('articles',{
        articles_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        context:{
            type:Sequelize.TEXT,
        },
        tag:{
            type:Sequelize.STRING,
        },
        response:{
            type:Sequelize.ARRRAY(Sequelize.UUID),
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        user_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        }
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('articles');
}