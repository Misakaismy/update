export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('exp',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
        },
        exp:{
            type:Sequelize.INTEGER,
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        user_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('exp');
}