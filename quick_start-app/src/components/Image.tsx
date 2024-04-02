const user = {
    name: 'Aicha Mbongo',
    imageUrl: 'https://media.licdn.com/dms/image/D4D03AQF8PwPnM-6BKw/profile-displayphoto-shrink_800_800/0/1701713066761?e=1717632000&v=beta&t=cCse76Cko6Gl6W6dkxQiHPmQQEdx_skftFvYJzgdWLQ',
    imageSize: 90,
};

export default function Profile() {
    return (
        <div className="background2">
        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
            width: user.imageSize,
            height: user.imageSize
        }}
        />


        </div>
    );
}
