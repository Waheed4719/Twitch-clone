import Avatar from '../../Common/Avatar';

type CardProps = {
    image: string
    avatar: string
}


const Card = ({ image, avatar }: CardProps) => {
    return (
        <div className='live-channel-card'>
            <div className='thumbnail'>
                <picture>
                    <img src={image} alt='live-channel' />
                </picture>
            </div>
            <div className='content-meta-box'>
                <div className='content-description'>
                    <Avatar size='md' avatar={avatar} />
                    <div className='text-description'>
                        <h5>LCK Summer Split 2022</h5>
                        <span> Epic Games </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
