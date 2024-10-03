import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Tự động chuyển đổi
        autoplaySpeed: 2000, // Thời gian giữa các slide (1000ms = 1 giây)
        arrows: false,
    };

    const images = [
        "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/455236579_1550946205826192_5911240628158692063_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvUe3a7-IoVqWguzUXLyVSItsljpQQE88i2yWOlBATzyTTA-sFtcfReV4o_P8qhCFUQijJQf7BA9aE72fays7L&_nc_ohc=XrRJrSAWUp8Q7kNvgHfnTUx&_nc_ht=scontent-sin6-3.xx&_nc_gid=AGUYxOnlNqnpbKSq8AsWCXG&oh=00_AYC5n_x5TaVNyUId94mQ4WPA4BjcqeVE2ctkW7Er7y75hA&oe=6704074E",
        "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/455236579_1550946205826192_5911240628158692063_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvUe3a7-IoVqWguzUXLyVSItsljpQQE88i2yWOlBATzyTTA-sFtcfReV4o_P8qhCFUQijJQf7BA9aE72fays7L&_nc_ohc=XrRJrSAWUp8Q7kNvgHfnTUx&_nc_ht=scontent-sin6-3.xx&_nc_gid=AGUYxOnlNqnpbKSq8AsWCXG&oh=00_AYC5n_x5TaVNyUId94mQ4WPA4BjcqeVE2ctkW7Er7y75hA&oe=6704074E",
        "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/455236579_1550946205826192_5911240628158692063_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFvUe3a7-IoVqWguzUXLyVSItsljpQQE88i2yWOlBATzyTTA-sFtcfReV4o_P8qhCFUQijJQf7BA9aE72fays7L&_nc_ohc=XrRJrSAWUp8Q7kNvgHfnTUx&_nc_ht=scontent-sin6-3.xx&_nc_gid=AGUYxOnlNqnpbKSq8AsWCXG&oh=00_AYC5n_x5TaVNyUId94mQ4WPA4BjcqeVE2ctkW7Er7y75hA&oe=6704074E",
    
    ]

       

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className='rounded-lg'>
                    <img src={image} alt={`Slide ${index}`} className='rounded-lg w-full h-64'/>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
