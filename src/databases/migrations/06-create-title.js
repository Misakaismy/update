export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('title',{
        user_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
        titleName:{
            type:Sequelize.STRING,
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('title');
}