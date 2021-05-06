export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('blacklist',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        reason:{
            type:Sequelize.STRING,
        },
        banAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        unbanAT:{
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
    await queryInterface.dropTable('blacklist');
}