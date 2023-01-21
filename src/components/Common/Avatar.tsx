
type AvatarProps = {
    size: string,
    avatar: string
}
const Avatar = ({ size = 'sm', avatar }: AvatarProps) => (
    <div className={`avatar ${size}`}>
        <img src={avatar} alt='avatar' />
    </div>
)

export default Avatar;
