/* 這張是DB看的語法 要建什麼項目column */
export async function up(queryInterface, Sequelize){
    await queryInterface.createTable('users',{
        user_id:{
            type:Sequelize.UUID,
            defaultValue: true,
            primaryKey:true,
        },
        email:{
            type:Sequelize.STRING(50),
            unique:true, 
        },
        password:{
            type:Sequelize.STRING(60),
        },
        name:{
            type:Sequelize.STRING(20),
        },
        phone:{
            type:Sequelize.STRING(10),
        },
        birth:{
            type:Sequelize.STRING,
        },
        icon:{
            type:Sequelize.STRING,
        },
        email_verified:{
            type:Sequelize.DATE,
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
    await queryInterface.dropTable('users');
}