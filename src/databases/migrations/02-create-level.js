export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('levels',{
        user_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
        exp:{
            type:Sequelize.INTEGER,
        },
        level:{
            type:Sequelize.INTEGER,
            allowNull:false,
        }
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('levels');
}