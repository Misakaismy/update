export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('levels',{
        User_id:{
            type:Sequelize.UUID,
            primaryKey:true,
        },
        name:{
            type:Sequelize.STRING,
        },
        title:{
            type:Sequelize.ARRAY(Sequelize.STRING),
            allowNull:true,
        },
        point:{
            type:Sequelize.INTEGER,
            allowNull:false,
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