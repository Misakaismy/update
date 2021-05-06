export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('articles',{
        articles_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        context:{
            type:Sequelize.TEXT,
        },
        images:{
            type:Sequelize.PATH,
        },
        tag:{
            type:Sequelize.STRING,
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
            foreignKey:true,
        }
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('articles');
}