export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('points',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:true,
        },
        user_id:{
            type:Sequelize.UUID,
            foreignKey:true,
        },
        createdAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updatedAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
    })
}

export async function down(queryInterface, Sequelize){
    await queryInterface.dropTable('points');
}