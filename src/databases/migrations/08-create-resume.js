export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('resume',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
        },
        images:{
            type:Sequelize.STRING,
        },
        autobiography:{
            type:Sequelize.STRING,
        },
        skill:{
            type:Sequelize.STRING,
        },
        work:{
            type:Sequelize.STRING,
        },
        education:{
            type:Sequelize.STRING,
        },
        createAT:{
            type:Sequelize.DATE,
            allowNull:false,
        },
        updateAT:{
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
    await queryInterface.dropTable('resume');
}