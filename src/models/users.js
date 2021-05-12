// 設定模型 define 定義 `uesr` 有什麼，第二個是config設定
// modelName 會預設+s 多打可以檢查用
// 從資料庫撈回來的資料會自動套用model
export default (sequelize, DataTypes)=>{
    const users = sequelize.define('users',
    {
        user_id:{
            type:DataTypes.UUID,
            primaryKey: true,
        },
        email: {
            type:DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(60),
        },
        name:{
            type:DataTypes.STRING,
        },
        phone:{
            type:DataTypes.STRING,
        },
        birth:{
            type:DataTypes.STRING,
        },
        icon:{
            type:DataTypes.STRING,
        },
        email_verified: {
            type:DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName:'users',
        freezeTableName: true,
        // timestamps: false,
    });
    return users;
};